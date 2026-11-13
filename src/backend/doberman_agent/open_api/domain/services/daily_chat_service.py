"""Open API adaptation onto the shared daily-chat implementation."""

from __future__ import annotations

from doberman_agent.chat_session.domain.session_subject import SessionSubject
from doberman_agent.common.errcode.open_api import OpenApiModelUnavailableError
from doberman_agent.knowledge.domain.services.temp_upload_service import TempUploadService
from doberman_agent.open_api.domain.context import OpenApiPrincipal
from doberman_agent.open_api.domain.schemas.workstation import OpenDailyChatCompletionReq
from doberman_agent.open_api.domain.services.session_subject_service import session_subject_from_principal
from doberman_agent.open_api.domain.services.task_mode_service import OpenTaskModeService
from doberman_agent.workstation.domain.schemas.chat import APIChatCompletion
from doberman_agent.workstation.domain.services.workstation_service import WorkStationService


class OpenDailyChatService:
    @classmethod
    async def prepare_request(
        cls,
        *,
        principal: OpenApiPrincipal,
        request: OpenDailyChatCompletionReq,
        login_user,
    ) -> tuple[APIChatCompletion, SessionSubject]:
        subject = session_subject_from_principal(principal)
        await TempUploadService.assert_owned_references(request.files, subject)
        config = await WorkStationService.get_open_api_daily_config(login_user)
        cls._validate_model_and_tools(request, config)
        return request.to_internal(), subject

    @staticmethod
    def _validate_model_and_tools(request: OpenDailyChatCompletionReq, config: dict[str, list]) -> None:
        model_ids = {str(item.get("id")) for item in config.get("models", [])}
        if request.model not in model_ids:
            # F073: a platform error code instead of a bare 400 (task-mode PRD §4.10).
            raise OpenApiModelUnavailableError(model=request.model)
        # Same check and same error (26067 with tool_id / tool_key) as task mode.
        OpenTaskModeService.check_tools(request.tools, config)
