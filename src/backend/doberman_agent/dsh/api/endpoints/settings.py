"""Manage Desktop access addresses within the configured deployment boundary."""

from fastapi import APIRouter, Depends, Response

from doberman_agent.common.dependencies.user_deps import UserPayload
from doberman_agent.common.errcode.dsh import DshDshDisabledError
from doberman_agent.common.schemas.api import resp_200
from doberman_agent.dsh.api.dependencies import get_settings
from doberman_agent.dsh.api.responses import DshRoute
from doberman_agent.dsh.config import DshSettings
from doberman_agent.dsh.domain.schemas.settings import DshManagementSettings
from doberman_agent.dsh.domain.services.settings import DshSettingsService

router = APIRouter(route_class=DshRoute)
settings_admin = UserPayload.get_admin_user


def settings_service() -> DshSettingsService:
    return DshSettingsService()


def require_deployment(config: DshSettings = Depends(get_settings)) -> DshSettings:
    if not config.enabled:
        raise DshDshDisabledError()
    return config


@router.get("/dsh/browser-config")
async def browser_config(
    response: Response,
    config: DshSettings = Depends(get_settings),
    service: DshSettingsService = Depends(settings_service),
):
    response.headers["Cache-Control"] = "no-store"
    if not config.enabled:
        return resp_200(data={**DshManagementSettings().model_dump(), "management_enabled": False, "enabled": False})
    current = await service.read()
    return resp_200(data={"management_enabled": True, **current.model_dump()})


@router.get("/dsh/admin/settings")
async def read_settings(
    response: Response,
    user=Depends(settings_admin),
    config=Depends(require_deployment),
    service: DshSettingsService = Depends(settings_service),
):
    response.headers["Cache-Control"] = "no-store"
    return resp_200(data=await service.read())


@router.put("/dsh/admin/settings")
async def save_settings(
    body: DshManagementSettings,
    user=Depends(settings_admin),
    config=Depends(require_deployment),
    service: DshSettingsService = Depends(settings_service),
):
    return resp_200(data=await service.save(body))
