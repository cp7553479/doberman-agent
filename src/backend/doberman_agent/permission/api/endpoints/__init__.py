"""F048 permission HTTP endpoint routers."""

from doberman_agent.permission.api.endpoints.catalog import router as catalog_router
from doberman_agent.permission.api.endpoints.decision import router as decision_router
from doberman_agent.permission.api.endpoints.grant import router as grant_router

__all__ = (
    "catalog_router",
    "decision_router",
    "grant_router",
)
