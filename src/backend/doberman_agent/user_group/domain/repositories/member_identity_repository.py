"""Batch identity display data for existing user-group members."""

from sqlmodel import select

from doberman_agent.core.database import get_async_db_session
from doberman_agent.database.models.tenant import UserTenant
from doberman_agent.user.domain.models.user import User


class MemberIdentityRepository:
    @staticmethod
    async def tenant_member_ids(user_ids: list[int], tenant_id: int) -> set[int]:
        if not user_ids:
            return set()
        query = select(UserTenant.user_id).where(
            UserTenant.user_id.in_(user_ids),
            UserTenant.tenant_id == tenant_id,
            UserTenant.is_active == 1,
            UserTenant.status == "active",
        )
        async with get_async_db_session() as session:
            return set((await session.exec(query)).all())

    @staticmethod
    async def external_ids(user_ids: list[int]) -> dict[int, str | None]:
        if not user_ids:
            return {}
        async with get_async_db_session() as session:
            rows = (await session.exec(select(User.user_id, User.external_id).where(User.user_id.in_(user_ids)))).all()
        return {row.user_id: row.external_id for row in rows}
