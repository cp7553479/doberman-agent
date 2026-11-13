from fastapi import Depends
from sqlmodel.ext.asyncio.session import AsyncSession

from doberman_agent.channel.domain.repositories.implementations.article_read_repository_impl import ArticleReadRepositoryImpl
from doberman_agent.channel.domain.repositories.implementations.channel_info_source_repository_impl import (
    ChannelInfoSourceRepositoryImpl,
)
from doberman_agent.channel.domain.repositories.implementations.channel_repository_impl import ChannelRepositoryImpl
from doberman_agent.channel.domain.repositories.interfaces.article_read_repository import ArticleReadRepository
from doberman_agent.channel.domain.repositories.interfaces.channel_info_source_repository import ChannelInfoSourceRepository
from doberman_agent.channel.domain.repositories.interfaces.channel_repository import ChannelRepository
from doberman_agent.channel.domain.services.article_es_service import ArticleEsService
from doberman_agent.channel.domain.services.channel_service import ChannelService
from doberman_agent.common.dependencies.core_deps import get_db_session
from doberman_agent.common.repositories.implementations.space_channel_member_repository_impl import (
    SpaceChannelMemberRepositoryImpl,
)
from doberman_agent.common.repositories.interfaces.space_channel_member_repository import SpaceChannelMemberRepository
from doberman_agent.message.api.dependencies import get_message_service as _get_message_service


async def get_channel_repository(
    session: AsyncSession = Depends(get_db_session),
) -> ChannelRepository:
    """Adaptation ChannelRepositoryInstance Dependencies"""
    return ChannelRepositoryImpl(session)


async def get_space_channel_member_repository(
    session: AsyncSession = Depends(get_db_session),
) -> "SpaceChannelMemberRepository":
    """Adaptation SpaceChannelMemberRepositoryInstance Dependencies"""
    return SpaceChannelMemberRepositoryImpl(session)


async def get_channel_info_source_repository(
    session: AsyncSession = Depends(get_db_session),
) -> "ChannelInfoSourceRepository":
    """Adaptation ChannelInfoSourceRepository Dependencies"""
    return ChannelInfoSourceRepositoryImpl(session)


def get_article_es_service() -> ArticleEsService:
    """Get ArticleEsService instance"""
    return ArticleEsService()


async def get_article_read_repository(
    session: AsyncSession = Depends(get_db_session),
) -> ArticleReadRepository:
    """Adaptation ArticleReadRepository Dependencies"""
    return ArticleReadRepositoryImpl(session)


async def get_channel_service(
    session: AsyncSession = Depends(get_db_session),
) -> "ChannelService":
    """Adaptation ChannelServiceInstance Dependencies"""

    channel_repository = await get_channel_repository(session)
    space_channel_member_repository = await get_space_channel_member_repository(session)
    channel_info_source_repository = await get_channel_info_source_repository(session)
    article_es_service = get_article_es_service()
    article_read_repository = await get_article_read_repository(session)
    message_service = await _get_message_service(session)
    from doberman_agent.permission.application.access import get_f048_runtime
    from doberman_agent.permission.application.initial_grant import InitialGrantApplication
    from doberman_agent.permission.application.prospective_grant import ProspectiveGrantApplication
    from doberman_agent.tenant.domain.services.f048_permission_subject import TenantPermissionSubjectDirectory

    runtime = await get_f048_runtime()
    subject_directory = TenantPermissionSubjectDirectory()

    return ChannelService(
        channel_repository=channel_repository,
        space_channel_member_repository=space_channel_member_repository,
        channel_info_source_repository=channel_info_source_repository,
        article_es_service=article_es_service,
        article_read_repository=article_read_repository,
        message_service=message_service,
        initial_grant_application=InitialGrantApplication(
            runtime=runtime,
            subjects=subject_directory,
        ),
        prospective_grant_application=ProspectiveGrantApplication(
            runtime=runtime,
            subjects=subject_directory,
        ),
    )
