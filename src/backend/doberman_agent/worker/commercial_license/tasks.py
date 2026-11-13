"""Celery task — hourly ETL license refresh (F070).

Deployment-level: do not pass tenant_id, do not iterate tenants, do not
restore a tenant ContextVar. Authorization is not tenant-scoped (INV-35).
"""

from doberman_agent.worker._asyncio_utils import run_async_task
from doberman_agent.worker.main import doberman_agent_celery


@doberman_agent_celery.task(
    acks_late=True,
    time_limit=120,
    soft_time_limit=90,
    name="doberman_agent.worker.commercial_license.tasks.refresh_etl_license",
)
def refresh_etl_license():
    run_async_task(_refresh_etl_license)


async def _refresh_etl_license() -> None:
    from doberman_agent.commercial_license.domain.repositories.license_info_repository import LicenseInfoRepository
    from doberman_agent.commercial_license.domain.services.etl_sync import sync_etl_license
    from doberman_agent.core.database import get_async_db_session

    async with get_async_db_session() as session:
        await sync_etl_license(LicenseInfoRepository(session))
