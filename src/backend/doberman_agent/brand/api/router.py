"""Brand router aggregation."""

from fastapi import APIRouter

from doberman_agent.brand.api.endpoints.brand import router as brand_router


router = APIRouter(prefix='/brand', tags=['Brand'])
router.include_router(brand_router)
