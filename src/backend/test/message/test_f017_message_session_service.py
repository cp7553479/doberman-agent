"""F017 unit tests — MessageSession derived-data tenant attribution (T13).

Verifies ChatSessionService.get_or_create_session stamps the new row with
the user's leaf tenant (INV-T13) and refuses to persist on missing
context (AC-11).
"""

from __future__ import annotations

# F017: pre-mock the ``doberman_agent.api`` chain (same rationale as
# test_f017_chat_message_service.py — see docstring there).
import sys as _sys  # noqa: E402
from unittest.mock import MagicMock as _MagicMock  # noqa: E402

# conftest.py premocks ``doberman_agent.common.services`` as MagicMock which
# breaks later ``from doberman_agent.common.services.base import ...`` lookups.
# Drop that mock before our real imports so the package loads normally;
# conftest's other premocks (errcodes, database models) remain untouched.
for _common_services_mod in (
    'doberman_agent.common.services',
    'doberman_agent.common.services.config_service',
    'doberman_agent.common.services.telemetry',
    'doberman_agent.common.services.telemetry.telemetry_service',
):
    _sys.modules.pop(_common_services_mod, None)

for _m in (
    'doberman_agent.api',
    'doberman_agent.api.services',
    'doberman_agent.api.services.chat_imp',
    'doberman_agent.api.services.workflow',
    'doberman_agent.api.services.audit_log',
    'doberman_agent.api.v1',
    'doberman_agent.api.v1.schemas',
    'doberman_agent.api.v1.schema',
    'doberman_agent.api.v1.schema.base_schema',
    'doberman_agent.api.v1.schema.chat_schema',
    'doberman_agent.api.v1.schema.workflow',
    'doberman_agent.common.chat',
    'doberman_agent.common.chat.client',
):
    _sys.modules.setdefault(_m, _MagicMock())

from unittest.mock import MagicMock, patch  # noqa: E402

import pytest  # noqa: E402

from doberman_agent.chat_session.domain.chat import ChatSessionService  # noqa: E402
from doberman_agent.common.errcode.tenant_sharing import TenantContextMissingError  # noqa: E402
from doberman_agent.core.context.tenant import current_tenant_id  # noqa: E402


def _login_user(user_id: int = 100, tenant_id: int | None = 5):
    u = MagicMock()
    u.user_id = user_id
    u.tenant_id = tenant_id
    u.user_name = 'tester'
    return u


def _flow_info(flow_type: int = 10, name: str = 'wf-x'):
    f = MagicMock()
    f.flow_type = flow_type
    f.name = name
    return f


def test_get_or_create_session_stamps_leaf_tenant_from_context():
    captured = {}

    def _fake_insert(session_obj):
        captured['session'] = session_obj
        return session_obj

    token = current_tenant_id.set(5)
    try:
        with patch(
            'doberman_agent.chat_session.domain.chat.MessageSessionDao.get_one',
            return_value=None,
        ), patch(
            'doberman_agent.chat_session.domain.chat.MessageSessionDao.insert_one',
            side_effect=_fake_insert,
        ), patch(
            'doberman_agent.chat_session.domain.chat.FlowDao.get_flow_by_id',
            return_value=_flow_info(flow_type=5),  # ASSISTANT
        ), patch(
            'doberman_agent.chat_session.domain.chat.AuditLogService.create_chat_workflow',
        ), patch(
            'doberman_agent.chat_session.domain.chat.telemetry_service.log_event_sync',
        ):
            ChatSessionService.get_or_create_session(
                chat_id='c1', flow_id='f1',
                login_user=_login_user(tenant_id=7),  # context wins over login_user
                request_ip='1.2.3.4',
            )
    finally:
        current_tenant_id.reset(token)

    assert captured['session'].tenant_id == 5  # from ContextVar, not login_user=7


def test_get_or_create_session_skips_when_existing():
    """Existing session → short-circuit, no tenant resolution at all."""
    existing = MagicMock()
    with patch(
        'doberman_agent.chat_session.domain.chat.MessageSessionDao.get_one',
        return_value=existing,
    ):
        # No context, no login_user.tenant_id — must not raise because we
        # never reach the create path.
        result = ChatSessionService.get_or_create_session(
            chat_id='c1', flow_id='f1',
            login_user=_login_user(tenant_id=None),
            request_ip='1.2.3.4',
        )
    assert result is existing


def test_get_or_create_session_raises_when_context_missing():
    """Create path with neither ContextVar nor login_user.tenant_id → 19504."""
    with patch(
        'doberman_agent.chat_session.domain.chat.MessageSessionDao.get_one',
        return_value=None,
    ), patch(
        'doberman_agent.chat_session.domain.chat.FlowDao.get_flow_by_id',
        return_value=_flow_info(),
    ):
        with pytest.raises(TenantContextMissingError):
            ChatSessionService.get_or_create_session(
                chat_id='c1', flow_id='f1',
                login_user=_login_user(tenant_id=None),  # no tenant
                request_ip='1.2.3.4',
            )
