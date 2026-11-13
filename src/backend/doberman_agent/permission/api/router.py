"""Permission module router registration."""

from fastapi import APIRouter

from doberman_agent.permission.api.endpoints.catalog import router as catalog_router
from doberman_agent.permission.api.endpoints.decision import router as decision_router
from doberman_agent.permission.api.endpoints.grant import router as grant_router
from doberman_agent.permission.api.endpoints.grant_subjects import router as grant_subjects_router

router = APIRouter(prefix='/permissions', tags=['Permission'])
router.include_router(catalog_router)
router.include_router(grant_router)
router.include_router(decision_router)
router.include_router(grant_subjects_router)
