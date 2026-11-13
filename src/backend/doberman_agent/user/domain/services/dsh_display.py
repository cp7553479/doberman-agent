"""doberman-agent-only department display; never part of the Gateway profile outbox."""

from doberman_agent.core.database import get_async_db_session
from doberman_agent.user.domain.repositories.dsh_display import DshDisplayRepository


async def read_dsh_display_profiles(user_ids: list[int]) -> dict[int, dict]:
    async with get_async_db_session() as session:
        return await session.run_sync(lambda sync: DshDisplayRepository.read(sync, user_ids))
