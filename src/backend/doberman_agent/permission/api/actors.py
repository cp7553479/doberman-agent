"""Translate authenticated HTTP identity into permission-domain identity."""

from __future__ import annotations

from doberman_agent.common.dependencies.user_deps import UserPayload
from doberman_agent.permission.application.identity import resolve_permission_actor
from doberman_agent.permission.domain.services.permission_action_service import (
    PermissionActor,
)


async def permission_actor(login_user: UserPayload) -> PermissionActor:
    """Resolve the authenticated identity facts used by F048 services."""

    return await resolve_permission_actor(login_user)
