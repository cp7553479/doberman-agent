# register tasks
# ruff: noqa: F401 - importing task modules is the Celery registration mechanism.
from doberman_agent.worker.admin_scope.tasks import admin_scope_cleanup
from doberman_agent.worker.app_publish.tasks import run_publish_pipeline
from doberman_agent.worker.approval.tasks import execute_approval_outbox, retry_approval_outbox
from doberman_agent.worker.commercial_license.tasks import refresh_etl_license

# DSH tasks register without performing network IO; startup owns approved runtimes.
from doberman_agent.worker.dsh.registry import register_dsh_tasks
from doberman_agent.worker.information.article import dispatch_information_article_poll, sync_information_articles
from doberman_agent.worker.information.knowledge_delivery import (
    deliver_information_articles_to_config,
    route_new_information_articles,
)
from doberman_agent.worker.information.reconcile import (
    dispatch_information_subscription_reconcile,
    reconcile_information_subscriptions,
)
from doberman_agent.worker.knowledge.file_worker import (
    file_copy_celery,
    parse_knowledge_file_celery,
    retry_knowledge_file_celery,
)
from doberman_agent.worker.knowledge.knowledge_chat_history_retention import (
    rehome_knowledge_chat_sessions as rehome_knowledge_chat_sessions,
)
from doberman_agent.worker.knowledge.move_worker import migrate_file_vectors
from doberman_agent.worker.knowledge.qa import copy_qa_knowledge_celery, insert_qa_celery, rebuild_qa_knowledge_celery
from doberman_agent.worker.knowledge.rebuild_knowledge_worker import rebuild_knowledge_celery, rebuild_knowledge_file_chunk
from doberman_agent.worker.knowledge.scheduler import (
    reconcile_file_scheduler_task,
    trigger_dispatch_task,
)
from doberman_agent.worker.knowledge.space_delete import dispatch_pending_deletes, purge_space_delete
from doberman_agent.worker.knowledge.stale_projection_reconciler import (
    reconcile_stale_parent_projections as reconcile_stale_parent_projections,
)
from doberman_agent.worker.linsight.personal_skill_sweep import (
    dispatch_personal_skill_orphan_sweep,
    sweep_personal_skill_orphans,
)
from doberman_agent.worker.main import doberman_agent_celery
from doberman_agent.worker.permission.retry_failed_tuples import (
    cleanup_succeeded_failed_tuples,
    retry_failed_tuples,
)
from doberman_agent.worker.runtime_audit.tasks import runtime_audit_export, runtime_audit_reconcile
from doberman_agent.worker.telemetry.mid_table import (
    sync_mid_app_increment,
    sync_mid_knowledge_increment,
    sync_mid_user_increment,
    sync_mid_user_interact_dtl,
)
from doberman_agent.worker.tenant_reconcile.tasks import reconcile_user_tenant_assignments
from doberman_agent.worker.test.test import add
from doberman_agent.worker.workflow.tasks import continue_workflow, execute_workflow, stop_workflow

register_dsh_tasks(doberman_agent_celery)

__all__ = [
    "add",
    "admin_scope_cleanup",
    "cleanup_succeeded_failed_tuples",
    "continue_workflow",
    "copy_qa_knowledge_celery",
    "dispatch_information_article_poll",
    "dispatch_information_subscription_reconcile",
    "dispatch_personal_skill_orphan_sweep",
    "execute_approval_outbox",
    "execute_workflow",
    "file_copy_celery",
    "insert_qa_celery",
    "migrate_file_vectors",
    "parse_knowledge_file_celery",
    "rebuild_knowledge_celery",
    "rebuild_knowledge_file_chunk",
    "rebuild_qa_knowledge_celery",
    "reconcile_file_scheduler_task",
    "reconcile_information_subscriptions",
    "reconcile_user_tenant_assignments",
    "retry_approval_outbox",
    "retry_failed_tuples",
    "retry_knowledge_file_celery",
    "stop_workflow",
    "sweep_personal_skill_orphans",
    "sync_information_articles",
    "sync_mid_app_increment",
    "sync_mid_knowledge_increment",
    "sync_mid_user_increment",
    "sync_mid_user_interact_dtl",
    "trigger_dispatch_task",
]
