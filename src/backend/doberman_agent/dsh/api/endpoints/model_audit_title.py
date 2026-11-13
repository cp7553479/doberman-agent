"""Authenticated Desktop title updates, without model admission or billing."""

import json

from fastapi import APIRouter, Depends, Request
from loguru import logger
from pydantic import ValidationError
from sqlalchemy.exc import SQLAlchemyError

from doberman_agent.common.errcode.dsh import DshInternalErrorError, DshInvalidRequestError
from doberman_agent.dsh.api.dependencies import get_settings
from doberman_agent.dsh.api.endpoints.models import desktop_principal
from doberman_agent.dsh.api.responses import DshRoute
from doberman_agent.dsh.domain.repositories.model_audit_setting import DshModelAuditSettingRepository
from doberman_agent.dsh.domain.repositories.model_audit_title import DshModelAuditTitleRepository
from doberman_agent.dsh.domain.schemas.model_audit_title import AuditTitleUpdate
from doberman_agent.dsh.domain.services.model_audit_setting import DshModelAuditSettingService
from doberman_agent.dsh.domain.services.model_audit_title import DshModelAuditTitleService
from doberman_agent.dsh.infrastructure.model_audit_blocking import run_audit_blocking
from doberman_agent.dsh.operations_runtime import repository_scope

router = APIRouter(route_class=DshRoute)


def title_service(settings=Depends(get_settings)):
    async def read():
        def load():
            with repository_scope(DshModelAuditSettingRepository) as repository:
                return repository.read()

        return await run_audit_blocking(load)

    modes = DshModelAuditSettingService(read, timeout_seconds=settings.audit_mode_read_timeout_seconds)
    return DshModelAuditTitleService(modes, lambda: repository_scope(DshModelAuditTitleRepository))


@router.post("/dsh/audit/conversations/title")
async def update_title(request: Request, principal=Depends(desktop_principal), service=Depends(title_service)):
    if request.url.query or request.headers.get("content-type", "").split(";", 1)[0].lower() != "application/json":
        raise DshInvalidRequestError()
    raw = bytearray()
    try:
        async for chunk in request.stream():
            if len(raw) + len(chunk) > 4096:
                raise DshInvalidRequestError()
            raw.extend(chunk)
        command = AuditTitleUpdate.model_validate(json.loads(raw))
    except (ValueError, ValidationError, UnicodeError, RecursionError):
        raise DshInvalidRequestError() from None
    try:
        return await service.update(principal, command)
    except (SQLAlchemyError, RuntimeError, TimeoutError) as error:
        logger.warning("DSH audit title unavailable ({})", type(error).__name__)
        raise DshInternalErrorError() from None
