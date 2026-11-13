"""F014 ``POST /api/v1/internal/sso/login-sync`` endpoint."""

from fastapi import APIRouter, Depends, Request

from doberman_agent.common.schemas.api import UnifiedResponseModel, resp_200
from doberman_agent.sso_sync.domain.constants import DEFAULT_SSO_SYNC_SOURCE
from doberman_agent.sso_sync.domain.schemas.payloads import (
    LoginSyncRequest,
    LoginSyncResponse,
)
from doberman_agent.sso_sync.domain.services.hmac_auth import verify_hmac
from doberman_agent.sso_sync.domain.services.login_sync_service import (
    LoginSyncService,
)
from doberman_agent.sso_sync.domain.services.org_sync_log_writer import (
    OrgSyncLogBuffer,
    flush_log,
)
from doberman_agent.utils import get_request_ip

router = APIRouter(tags=['SSO Sync'])


@router.post(
    '/internal/sso/login-sync',
    response_model=UnifiedResponseModel[LoginSyncResponse],
    summary='Gateway SSO login sync (HMAC-signed)',
)
async def login_sync(
    payload: LoginSyncRequest,
    request: Request,
    _: None = Depends(verify_hmac),
):
    """HMAC-signed login callback from the Gateway. Upserts user + primary/
    secondary departments, derives the leaf tenant via F012 sync, and
    returns a freshly signed JWT.
    """
    result = await LoginSyncService.execute(
        payload,
        request_ip=get_request_ip(request),
        row_source=payload.source or DEFAULT_SSO_SYNC_SOURCE,
    )
    # Best-effort per-request audit row. ``skip_org_sync_log`` is used when
    # Gateway calls ``gateway_wecom_org_sync`` which flushes a single row.
    if not payload.skip_org_sync_log:
        buffer = OrgSyncLogBuffer()
        buffer.member_updated += 1
        await flush_log(buffer, trigger_type='sso_realtime')
    return resp_200(result)
