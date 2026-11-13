from typing import Union

from fastapi import APIRouter, Depends, Request

from doberman_agent.api.services.flow import FlowService
from doberman_agent.api.v1.schemas import resp_200
from doberman_agent.common.constants.enums.telemetry import BaseTelemetryTypeEnum
from doberman_agent.common.dependencies.user_deps import UserPayload
from doberman_agent.common.errcode.http_error import NotFoundError
from doberman_agent.common.services import telemetry_service
from doberman_agent.core.logger import trace_id_var
from doberman_agent.database.models.flow import FlowDao
from doberman_agent.share_link.api.dependencies import header_share_token_parser
from doberman_agent.share_link.domain.models.share_link import ShareLink

# build router
router = APIRouter(prefix='/flows', tags=['Flows'], dependencies=[Depends(UserPayload.get_login_user)])


@router.get('/{flow_id}')
async def read_flow(*, flow_id: str, login_user: UserPayload = Depends(UserPayload.get_login_user),
                    share_link: Union['ShareLink', None] = Depends(header_share_token_parser)):
    """Read a flow."""
    return await FlowService.get_one_flow(login_user, flow_id, share_link)


@router.delete('/{flow_id}', status_code=200)
async def delete_flow(
    *,
    request: Request,
    flow_id: str,
    login_user: UserPayload = Depends(UserPayload.get_login_user),
):
    """Delete a flow."""

    db_flow = FlowDao.get_flow_by_id(flow_id)
    if not db_flow:
        raise NotFoundError()
    await FlowService.project_flow_delete(login_user, db_flow)
    FlowDao.delete_flow(db_flow)
    telemetry_service.log_event_sync(
        user_id=login_user.user_id,
        event_type=BaseTelemetryTypeEnum.DELETE_APPLICATION,
        trace_id=trace_id_var.get()
    )
    FlowService.delete_flow_hook(request, login_user, db_flow)
    return resp_200()
