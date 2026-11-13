from fastapi import APIRouter

from doberman_agent.citation.api.endpoints.citation import router as citation_endpoint_router

router = APIRouter(prefix='/citations', tags=['Citation'])
router.include_router(citation_endpoint_router)
