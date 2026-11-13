from fastapi import APIRouter

from doberman_agent.evaluation.api.endpoints.evaluation import router as evaluation_router

router = APIRouter()
router.include_router(evaluation_router)
