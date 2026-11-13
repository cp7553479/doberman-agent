"""SQLAlchemy event hooks for automatic tenant filtering and filling.

Registers two global Session events:
- ``do_orm_execute``: Intercepts SELECT queries and injects
  ``WHERE tenant_id = <current>`` for all tenant-aware tables.
- ``before_flush``: Auto-fills ``tenant_id`` on new objects before INSERT.

Known limitation: raw SQL via ``text()`` bypasses ORM events. Callers using
raw SQL must manually add ``WHERE tenant_id = X``.
"""

import logging

from sqlalchemy import event, false
from sqlmodel import Session

from doberman_agent.core.context.tenant import (
    DEFAULT_TENANT_ID,
    get_current_tenant_id,
    get_visible_tenant_ids,
    is_management_all_tenants,
    is_strict_tenant_filter,
    is_tenant_filter_bypassed,
)

logger = logging.getLogger(__name__)

_tenant_aware_tables: set[str] = set()
_initialized: bool = False

# Tables whose compatibility tenant_id column is not an isolation boundary.
# channel_info_source is a public metadata catalog; model discovery may import it,
# so exclusion here is required even though it is not force-imported below.
_EXCLUDED_TABLES: set[str] = {"user_tenant", "channel_info_source"}

# ORM modules that must be imported before _discover_tenant_aware_tables runs.
# Without this, models that nothing in the FastAPI router chain happens to
# import stay invisible to SQLModel.metadata, and their tables silently slip
# past both before_flush auto-fill and do_orm_execute filtering — which is
# exactly how knowledgefile / flowversion / roleaccess / userrole / ...
# kept writing child-tenant resources to root in v2.5.
_TENANT_AWARE_MODEL_MODULES = (
    "doberman_agent.dsh.domain.models.content_safety_event",
    "doberman_agent.dsh.domain.models.local_session",
    "doberman_agent.dsh.domain.models.model_audit_conversation",
    "doberman_agent.dsh.domain.models.model_audit_title",
    "doberman_agent.dsh.domain.models.model_audit_tree",
    "doberman_agent.dsh.domain.models.work_publication",
    "doberman_agent.dsh_market.domain.models",
    # Already on the main router import chain — listed for completeness so
    # _force_import_all_models() guarantees them even if a future refactor
    # severs an indirect import edge.
    "doberman_agent.database.models.flow",
    "doberman_agent.database.models.assistant",
    "doberman_agent.database.models.role",
    "doberman_agent.database.models.group",
    "doberman_agent.database.models.audit_log",
    "doberman_agent.database.models.department",
    "doberman_agent.database.models.message",
    "doberman_agent.database.models.session",
    "doberman_agent.chat_session.domain.models.workflow_file_manifest",
    "doberman_agent.knowledge.domain.models.knowledge",
    "doberman_agent.knowledge.domain.models.department_knowledge_space",
    "doberman_agent.llm.domain.models.llm_server",
    "doberman_agent.llm.domain.models.llm_call_log",
    "doberman_agent.llm.domain.models.llm_token_log",
    "doberman_agent.llm.domain.models.tenant_system_model_config",
    "doberman_agent.workstation.domain.models.tenant_workstation_config",
    "doberman_agent.org_sync.domain.models.org_sync",
    "doberman_agent.approval.domain.models.approval_request",
    "doberman_agent.citation.domain.models.message_citation",
    # Previously *not* on any auto-imported chain — silent tenant-id leaks.
    "doberman_agent.database.models.failed_tuple",
    "doberman_agent.database.models.flow_version",
    "doberman_agent.database.models.role_access",
    "doberman_agent.database.models.user_group",
    "doberman_agent.database.models.group_resource",
    "doberman_agent.database.models.tag",
    "doberman_agent.database.models.template",
    "doberman_agent.evaluation.domain.models.evaluation",
    "doberman_agent.database.models.invite_code",
    "doberman_agent.database.models.variable_value",
    "doberman_agent.database.models.report",
    "doberman_agent.database.models.mark_app_user",
    "doberman_agent.database.models.mark_record",
    "doberman_agent.database.models.mark_task",
    "doberman_agent.user.domain.models.user_role",
    "doberman_agent.knowledge.domain.models.knowledge_file",
    "doberman_agent.knowledge.domain.models.knowledge_space_delete_job",
    "doberman_agent.tool.domain.models.gpts_tools",
    "doberman_agent.share_link.domain.models.share_link",
    "doberman_agent.message.domain.models.inbox_message",
    "doberman_agent.message.domain.models.inbox_message_read",
    "doberman_agent.channel.domain.models.channel",
    "doberman_agent.channel.domain.models.article_read_record",
    "doberman_agent.channel.domain.models.channel_info_source",
    "doberman_agent.telemetry_search.domain.models.dashboard",
    "doberman_agent.linsight.domain.models.linsight_execute_task",
    "doberman_agent.linsight.domain.models.linsight_session_version",
    "doberman_agent.linsight.domain.models.linsight_sop",
    "doberman_agent.linsight.domain.models.linsight_skill",
    # F048 imports the complete permission metadata graph. Catalog and model
    # release tables are global; only tables that physically carry tenant_id
    # are selected by _discover_tenant_aware_tables().
    "doberman_agent.permission.domain.models.catalog",
    "doberman_agent.permission.domain.models.grant",
    "doberman_agent.permission.domain.models.projection",
    "doberman_agent.permission.domain.models.migration",
    "doberman_agent.finetune.domain.models.sft_model",
    "doberman_agent.finetune.domain.models.server",
    "doberman_agent.finetune.domain.models.preset_train",
    "doberman_agent.finetune.domain.models.model_deploy",
    "doberman_agent.finetune.domain.models.finetune",
    # Open API auth: package-level registration — the package __init__ imports
    # api_credential / service_account / credential_delegate_scope /
    # open_api_tenant_setting, all of which carry tenant_id.
    "doberman_agent.open_api.domain.models",
    # F054 hosted apps. `app` / `app_instance` carry tenant_id and are filtered.
    # `app_version` deliberately does NOT: a version belongs to its app, so its
    # isolation is derived — load the `app` row by `app_id` (that one IS
    # filtered) and read the version through it. Listing the module here only
    # guarantees SQLModel.metadata sees the table;
    # _discover_tenant_aware_tables() skips it for lack of the column, so a
    # read that starts from a bare `version_id` still leaks across tenants
    # (design K5 ② / pit 31) — the DAO forces `app_id` into every such
    # signature for exactly this reason.
    "doberman_agent.database.models.app",
    "doberman_agent.database.models.app_version",
    "doberman_agent.database.models.app_instance",
    # `app_access_log` (AC-38) carries the *application's* tenant_id, written
    # explicitly by entry_authz_service (the internal authorize endpoint runs
    # under bypass, so before_flush does not fill it); registering it here is
    # what makes the F056 query face's reads auto-filtered.
    "doberman_agent.database.models.app_access_log",
    # F055 publish pipeline. `app_deployment` and `app_preview_session` carry
    # tenant_id and are filtered; `hosted_app_subject` does not (it derives
    # isolation from the `app` row).
    "doberman_agent.app_publish.domain.models",
    "doberman_agent.app_runtime.domain.models",
    "doberman_agent.app_governance.domain.models",
    # `resource_tier` has NO tenant_id column: resource tiers are platform-level
    # and shared across tenants (AC-44). Listing it here only guarantees
    # SQLModel.metadata sees the table; _discover_tenant_aware_tables() skips it
    # for lack of the column, so it is never auto-filtered.
    "doberman_agent.database.models.resource_tier",
    # F062 desktop model access.
    "doberman_agent.dsh.domain.models.unified_policy",
    "doberman_agent.dsh.domain.models.user_policy",
    "doberman_agent.dsh.domain.models.admin_operation",
    "doberman_agent.dsh.domain.models.monthly_usage",
    "doberman_agent.dsh.domain.models.model_call",
    "doberman_agent.dsh.domain.models.subject_policy",
    "doberman_agent.dsh.domain.models.subject_grant",
    "doberman_agent.dsh.domain.models.model_audit_setting",
    "doberman_agent.dsh.domain.models.model_audit_request",
    "doberman_agent.dsh.domain.models.model_audit_content",
)


def _force_import_all_models() -> None:
    """Force-import every tenant-aware ORM module so SQLModel.metadata
    fully populates before _discover_tenant_aware_tables() runs.

    Failures are warned but not raised — a missing optional module must
    not break the whole tenant filter registration.
    """
    import importlib

    for module_name in _TENANT_AWARE_MODEL_MODULES:
        try:
            importlib.import_module(module_name)
        except Exception as exc:
            logger.warning(
                "Failed to import tenant-aware model module %s: %s. "
                "Tables defined in that module will silently bypass tenant "
                "filtering until the import is fixed.",
                module_name,
                exc,
            )


def _discover_tenant_aware_tables() -> set[str]:
    """Discover tables that have a ``tenant_id`` column from SQLModel metadata.

    This avoids hardcoding table names — any model with a ``tenant_id``
    column will automatically be tenant-filtered.
    """
    from sqlmodel import SQLModel

    tables = set()
    for table_name, table in SQLModel.metadata.tables.items():
        if "tenant_id" in table.c and table_name not in _EXCLUDED_TABLES:
            tables.add(table_name)
    logger.debug(f"Discovered {len(tables)} tenant-aware tables: {tables}")
    return tables


def register_tenant_filter_events() -> None:
    """Register global Session events for tenant filtering.

    Safe to call multiple times — only registers once.
    Must be called after all ORM models are imported (so metadata is populated).
    """
    global _tenant_aware_tables, _initialized
    if _initialized:
        return

    _force_import_all_models()
    _tenant_aware_tables = _discover_tenant_aware_tables()
    if not _tenant_aware_tables:
        logger.warning("No tenant-aware tables found. Tenant filtering will be inactive.")

    @event.listens_for(Session, "do_orm_execute")
    def _on_orm_execute(orm_execute_state):
        """Intercept ORM queries and inject tenant_id WHERE clause."""
        if is_tenant_filter_bypassed():
            return

        if not orm_execute_state.is_select:
            return
        if is_management_all_tenants() and not is_strict_tenant_filter():
            return

        stmt = orm_execute_state.statement

        # Find tenant-aware tables in the query
        tables_to_filter = _get_tenant_tables_from_statement(stmt)
        if not tables_to_filter:
            return

        visible_tenant_ids = _resolve_visible_tenant_ids()
        if visible_tenant_ids is not None:
            if not visible_tenant_ids:
                for _ in tables_to_filter:
                    stmt = stmt.where(false())
            elif len(visible_tenant_ids) == 1:
                tid = next(iter(visible_tenant_ids))
                for table in tables_to_filter:
                    stmt = stmt.where(table.c.tenant_id == tid)
            else:
                tenant_ids = sorted(visible_tenant_ids)
                for table in tables_to_filter:
                    stmt = stmt.where(table.c.tenant_id.in_(tenant_ids))
        else:
            # Resolve current tenant_id
            tid = _resolve_tenant_id()
            if tid is None:
                # Should not reach here — _resolve_tenant_id raises or returns a value
                return

            # Inject WHERE clause for each tenant-aware table
            for table in tables_to_filter:
                stmt = stmt.where(table.c.tenant_id == tid)

        orm_execute_state.statement = stmt

    @event.listens_for(Session, "before_flush")
    def _on_before_flush(session, flush_context, instances):
        """Auto-fill tenant_id on new objects before INSERT."""
        if is_tenant_filter_bypassed():
            return

        tid = get_current_tenant_id()
        if tid is None:
            from doberman_agent.common.services.config_service import settings

            if not settings.multi_tenant.enabled:
                tid = DEFAULT_TENANT_ID
            else:
                # In enabled mode without context, skip auto-fill.
                # The do_orm_execute handler will catch reads without context.
                return

        for obj in session.new:
            table_name = _get_table_name(obj)
            if table_name and table_name in _tenant_aware_tables:
                current_val = getattr(obj, "tenant_id", None)
                if current_val is None or current_val == 0:
                    obj.tenant_id = tid
                elif current_val != tid:
                    # Defense-in-depth: write proceeds with the explicit
                    # value (could be admin cross-tenant write, or a leaked
                    # default like the v2.5 default=1 bug). Log so anomalies
                    # surface during canary rollout.
                    logger.warning(
                        "tenant_id mismatch on write: table=%s pk=%s ctx_tid=%s obj_tid=%s (write proceeded as-is)",
                        table_name,
                        getattr(obj, "id", None),
                        tid,
                        current_val,
                    )

    _initialized = True
    logger.info(f"Tenant filter events registered for {len(_tenant_aware_tables)} tables")


def build_tenant_filter_clause(tenant_col):
    """Return a WHERE clause matching the do_orm_execute event listener's logic.

    The auto tenant filter in ``_on_orm_execute`` can only see tables that
    surface through ``column_descriptions`` or ``get_final_froms`` on the
    outer statement. SQL shapes like ``select(sub.c.id) FROM (select … FROM
    flow UNION ALL select … FROM assistant) AS sub`` hide the inner tables
    behind a Subquery, so the listener finds no tenant-aware table and
    injects no filter — leaking cross-tenant data on the outer SELECT.

    Use this helper at those sites: build the clause once per inner SELECT
    and attach it manually. Keeping the resolution logic here (instead of
    open-coding ``tenant_col == get_current_tenant_id()`` per call site)
    ensures the manual path stays in lockstep with the event listener as
    bypass / visible-ids / strict semantics evolve.

    Returns:
        A SQLAlchemy clause (``tenant_col == X`` or ``tenant_col.in_([…])``
        or ``false()`` for empty visible set), or ``None`` when no filter
        should be applied (bypass active, or ``_resolve_tenant_id`` returned
        ``None`` — the latter only when multi_tenant is disabled and no
        context exists). Callers should treat ``None`` as "skip this WHERE".
    """
    if is_tenant_filter_bypassed() or (is_management_all_tenants() and not is_strict_tenant_filter()):
        return None

    visible = _resolve_visible_tenant_ids()
    if visible is not None:
        if not visible:
            return false()
        if len(visible) == 1:
            return tenant_col == next(iter(visible))
        return tenant_col.in_(sorted(visible))

    tid = _resolve_tenant_id()
    if tid is None:
        return None
    return tenant_col == tid


def _get_tenant_tables_from_statement(stmt):
    """Extract SQLAlchemy Table objects that are tenant-aware from a statement.

    Handles:
    - Simple ``select(Model)`` — via ``column_descriptions``
    - Joins and subqueries — via ``froms``
    """
    tables = []

    # Method 1: Use column_descriptions (works for select(Model) patterns)
    if hasattr(stmt, "column_descriptions"):
        for desc in stmt.column_descriptions:
            entity = desc.get("entity")
            if entity is not None:
                table_name = _get_table_name_from_class(entity)
                if table_name and table_name in _tenant_aware_tables:
                    table = getattr(entity, "__table__", None)
                    if table is not None and table not in tables:
                        tables.append(table)

    # Method 2: Fallback to froms (for joins, subqueries, etc.)
    if not tables:
        froms = getattr(stmt, "get_final_froms", None)
        froms = froms() if froms else getattr(stmt, "froms", [])
        for from_clause in froms:
            table_name = getattr(from_clause, "name", None)
            if table_name and table_name in _tenant_aware_tables:
                if from_clause not in tables:
                    tables.append(from_clause)

    return tables


def _get_table_name_from_class(cls) -> str | None:
    """Get __tablename__ from an ORM class."""
    return getattr(cls, "__tablename__", None)


def _get_table_name(obj) -> str | None:
    """Get table name from an ORM instance."""
    cls = type(obj)
    return _get_table_name_from_class(cls)


def _resolve_tenant_id() -> int:
    """Resolve the effective tenant_id for the current context.

    Returns:
        int: The tenant_id to use for filtering.

    Raises:
        NoTenantContextError: If multi_tenant.enabled=True and no context is set.
    """
    tid = get_current_tenant_id()
    if tid is not None:
        return tid

    from doberman_agent.common.services.config_service import settings

    if not settings.multi_tenant.enabled:
        return DEFAULT_TENANT_ID
    else:
        from doberman_agent.common.errcode.tenant import NoTenantContextError

        raise NoTenantContextError()


def _resolve_visible_tenant_ids() -> frozenset[int] | None:
    """Resolve the visible tenant IN-list for the current request, if any."""
    if is_strict_tenant_filter():
        return None
    visible = get_visible_tenant_ids()
    if visible is None:
        return None
    return frozenset(int(one) for one in visible)
