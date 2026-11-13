from fastapi import Depends
from sqlmodel.ext.asyncio.session import AsyncSession

from doberman_agent.common.dependencies.core_deps import get_db_session
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_file_repository_impl import (
    KnowledgeFileRepositoryImpl,
)
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_repository_impl import KnowledgeRepositoryImpl
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_file_repository import KnowledgeFileRepository
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_repository import KnowledgeRepository
from doberman_agent.knowledge.domain.services.knowledge_file_service import KnowledgeFileService
from doberman_agent.knowledge.domain.services.knowledge_service import KnowledgeService


async def get_knowledge_repository(
    session: AsyncSession = Depends(get_db_session),
) -> KnowledgeRepository:
    """Dapatkan KnowledgeRepositoryInstance Dependencies"""
    return KnowledgeRepositoryImpl(session)


async def get_knowledge_file_repository(
    session: AsyncSession = Depends(get_db_session),
) -> "KnowledgeFileRepository":
    """Dapatkan KnowledgeFileRepositoryInstance Dependencies"""

    return KnowledgeFileRepositoryImpl(session)


async def get_knowledge_service(
    knowledge_repository: KnowledgeRepository = Depends(get_knowledge_repository),
    knowledge_file_repository: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
) -> "KnowledgeService":
    """Dapatkan KnowledgeServiceInstance Dependencies"""
    return KnowledgeService(
        knowledge_repository=knowledge_repository, knowledge_file_repository=knowledge_file_repository
    )


async def get_knowledge_file_service(
    knowledge_repository: KnowledgeRepository = Depends(get_knowledge_repository),
    knowledge_file_repository: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
) -> "KnowledgeFileService":
    """Dapatkan KnowledgeFileServiceInstance Dependencies"""
    return KnowledgeFileService(
        knowledge_repository=knowledge_repository,
        knowledge_file_repository=knowledge_file_repository,
    )
