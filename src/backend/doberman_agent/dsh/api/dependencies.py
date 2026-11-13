"""HTTP dependency exports for the shared DSH application runtime."""

from fastapi import Depends, Request

from doberman_agent.common.errcode.dsh import DshInvalidAccessTokenError
from doberman_agent.dsh.access_runtime import DshRuntime, get_runtime, get_settings
from doberman_agent.dsh.domain.services.access import DshPrincipal


async def desktop_principal(request: Request, runtime: DshRuntime = Depends(get_runtime)) -> DshPrincipal:
    if len(request.headers.getlist("authorization")) != 1:
        raise DshInvalidAccessTokenError()
    return await runtime.access.authenticate(request.headers["authorization"])


__all__ = ["DshRuntime", "desktop_principal", "get_runtime", "get_settings"]
