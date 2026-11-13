"""Lazy native DSH composition without external identity or seat services."""

import asyncio
from dataclasses import dataclass

from fastapi import Depends, Request

from doberman_agent.common.errcode.dsh import DshDshDisabledError
from doberman_agent.dsh.config import DshSettings
from doberman_agent.dsh.domain.repositories.identities import CurrentIdentityRecords
from doberman_agent.dsh.domain.repositories.local_session import DshSessionRepository
from doberman_agent.dsh.domain.repositories.tickets import TicketRepository
from doberman_agent.dsh.domain.services.access import DshAccessService
from doberman_agent.dsh.domain.services.authorization import DshAuthorizationService
from doberman_agent.dsh.domain.services.identity import IdentityService
from doberman_agent.dsh.domain.services.local_session import DshLocalSessionService
from doberman_agent.dsh.domain.services.settings import DshSettingsService
from doberman_agent.dsh.infrastructure.token_keys import ISSUER, LocalTokenKeys


def get_settings() -> DshSettings:
    from doberman_agent.common.services.config_service import settings

    return settings.dsh


@dataclass
class DshRuntime:
    settings: DshSettings
    identity: IdentityService
    access: DshAccessService
    sessions: DshLocalSessionService
    authorizations: DshAuthorizationService

    async def close(self):
        models = getattr(self, "models", None)
        if models is not None:
            await models.close()


async def get_logout_runtime(request: Request, config: DshSettings = Depends(get_settings)) -> DshRuntime:
    runtime = getattr(request.app.state, "dsh_runtime", None)
    if runtime is not None:
        return runtime
    if not hasattr(request.app.state, "dsh_init_lock"):
        request.app.state.dsh_init_lock = asyncio.Lock()
    async with request.app.state.dsh_init_lock:
        runtime = getattr(request.app.state, "dsh_runtime", None)
        if runtime is not None:
            return runtime
        from doberman_agent.core.cache.redis_manager import get_redis_client
        from doberman_agent.dsh.operations_runtime import repository_scope

        redis = (await get_redis_client()).async_connection
        authorizations = DshAuthorizationService(redis, config.platform_public_url)
        identity = IdentityService(TicketRepository(redis), CurrentIdentityRecords(), authorizations)
        keys = LocalTokenKeys()
        sessions = DshLocalSessionService(
            lambda: repository_scope(DshSessionRepository),
            identity,
            keys,
            access_seconds=config.access_ttl_seconds,
            session_seconds=config.session_ttl_seconds,
        )
        access = DshAccessService(ISSUER, keys, identity, sessions)
        runtime = DshRuntime(config, identity, access, sessions, authorizations)
        request.app.state.dsh_runtime = runtime
        return runtime


async def get_runtime(request: Request, config: DshSettings = Depends(get_settings)) -> DshRuntime:
    if not config.enabled:
        raise DshDshDisabledError()
    await DshSettingsService().require_enabled()
    return await get_logout_runtime(request, config)
