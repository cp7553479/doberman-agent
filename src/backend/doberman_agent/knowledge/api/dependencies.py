from typing import TYPE_CHECKING

from fastapi import Depends, Request
from sqlmodel.ext.asyncio.session import AsyncSession

from doberman_agent.common.dependencies.core_deps import get_db_session
from doberman_agent.common.dependencies.user_deps import UserPayload
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_chat_session_repository_impl import (
    KnowledgeChatSessionRepositoryImpl,
)
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_document_repository_impl import (
    KnowledgeDocumentRepositoryImpl,
)
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_document_version_repository_impl import (
    KnowledgeDocumentVersionRepositoryImpl,
)
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_file_repository_impl import (
    KnowledgeFileRepositoryImpl,
)
from doberman_agent.knowledge.domain.repositories.implementations.knowledge_repository_impl import KnowledgeRepositoryImpl
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_chat_session_repository import (
    KnowledgeChatSessionRepository,
)
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_document_repository import (
    KnowledgeDocumentRepository,
)
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_document_version_repository import (
    KnowledgeDocumentVersionRepository,
)
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_file_repository import KnowledgeFileRepository
from doberman_agent.knowledge.domain.repositories.interfaces.knowledge_repository import KnowledgeRepository
from doberman_agent.knowledge.domain.services.knowledge_audit_telemetry_service import KnowledgeAuditTelemetryService
from doberman_agent.knowledge.domain.services.knowledge_metadata_service import KnowledgeMetadataService
from doberman_agent.knowledge.domain.services.knowledge_permission_service import KnowledgePermissionService
from doberman_agent.message.api.dependencies import get_message_service as _get_message_service

# Service imports are deferred to avoid circular imports
if TYPE_CHECKING:
    from doberman_agent.knowledge.domain.services.knowledge_file_service import KnowledgeFileService
    from doberman_agent.knowledge.domain.services.knowledge_file_visibility_service import KnowledgeFileVisibilityService
    from doberman_agent.knowledge.domain.services.knowledge_service import KnowledgeService
    from doberman_agent.knowledge.domain.services.knowledge_space_chat_service import KnowledgeSpaceChatService
    from doberman_agent.knowledge.domain.services.knowledge_space_service import KnowledgeSpaceService
    from doberman_agent.knowledge.domain.services.knowledge_version_service import KnowledgeVersionService


async def get_knowledge_repository(
    session: AsyncSession = Depends(get_db_session),
) -> KnowledgeRepository:
    """DapatkanKnowledgeRepositoryInstance Dependencies"""
    return KnowledgeRepositoryImpl(session)


async def get_knowledge_file_repository(
    session: AsyncSession = Depends(get_db_session),
) -> "KnowledgeFileRepository":
    """DapatkanKnowledgeFileRepositoryInstance Dependencies"""

    return KnowledgeFileRepositoryImpl(session)


async def get_knowledge_chat_session_repository() -> KnowledgeChatSessionRepository:
    return KnowledgeChatSessionRepositoryImpl()


async def get_knowledge_document_repository(
    session: AsyncSession = Depends(get_db_session),
) -> KnowledgeDocumentRepository:
    return KnowledgeDocumentRepositoryImpl(session)


async def get_knowledge_document_version_repository(
    session: AsyncSession = Depends(get_db_session),
) -> KnowledgeDocumentVersionRepository:
    return KnowledgeDocumentVersionRepositoryImpl(session)


async def get_knowledge_metadata_service(
    knowledge_repository: KnowledgeRepository = Depends(get_knowledge_repository),
    knowledge_file_repository: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
    permission_service: KnowledgePermissionService = Depends(KnowledgePermissionService),
) -> KnowledgeMetadataService:
    return KnowledgeMetadataService(
        knowledge_repository=knowledge_repository,
        knowledge_file_repository=knowledge_file_repository,
        permission_service=permission_service,
    )


async def get_knowledge_service(
    knowledge_repository: KnowledgeRepository = Depends(get_knowledge_repository),
    knowledge_file_repository: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
    permission_service: KnowledgePermissionService = Depends(KnowledgePermissionService),
    audit_telemetry_service: KnowledgeAuditTelemetryService = Depends(KnowledgeAuditTelemetryService),
    metadata_service: KnowledgeMetadataService = Depends(get_knowledge_metadata_service),
) -> "KnowledgeService":
    """DapatkanKnowledgeServiceInstance Dependencies"""
    from doberman_agent.knowledge.domain.services.knowledge_service import KnowledgeService as _KnowledgeService

    return _KnowledgeService(
        knowledge_repository=knowledge_repository,
        knowledge_file_repository=knowledge_file_repository,
        permission_service=permission_service,
        audit_telemetry_service=audit_telemetry_service,
        metadata_service=metadata_service,
    )


async def get_knowledge_file_service(
    knowledge_repository: KnowledgeRepository = Depends(get_knowledge_repository),
    knowledge_file_repository: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
) -> "KnowledgeFileService":
    """DapatkanKnowledgeFileServiceInstance Dependencies"""
    from doberman_agent.knowledge.domain.services.knowledge_file_service import KnowledgeFileService as _KnowledgeFileService

    return _KnowledgeFileService(
        knowledge_repository=knowledge_repository,
        knowledge_file_repository=knowledge_file_repository,
    )


async def get_knowledge_space_service(
    request: Request,
    session: AsyncSession = Depends(get_db_session),
    login_user: UserPayload = Depends(UserPayload.get_login_user),
    version_repo: KnowledgeDocumentVersionRepository = Depends(get_knowledge_document_version_repository),
    doc_repo: KnowledgeDocumentRepository = Depends(get_knowledge_document_repository),
    knowledge_file_repo: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
) -> "KnowledgeSpaceService":
    """Get KnowledgeSpaceService instance, bound to the current request and login user"""
    from doberman_agent.knowledge.domain.services.knowledge_space_service import KnowledgeSpaceService as _SvcClass
    from doberman_agent.permission.application.access import get_f048_runtime
    from doberman_agent.permission.application.initial_grant import InitialGrantApplication
    from doberman_agent.permission.application.prospective_grant import ProspectiveGrantApplication
    from doberman_agent.tenant.domain.services.f048_permission_subject import TenantPermissionSubjectDirectory

    message_service = await _get_message_service(session)
    runtime = await get_f048_runtime()
    subject_directory = TenantPermissionSubjectDirectory()
    service = _SvcClass(
        request=request,
        login_user=login_user,
        initial_grant_application=InitialGrantApplication(
            runtime=runtime,
            subjects=subject_directory,
        ),
        prospective_grant_application=ProspectiveGrantApplication(
            runtime=runtime,
            subjects=subject_directory,
        ),
        knowledge_file_repo=knowledge_file_repo,
    )
    service.message_service = message_service
    service.version_repo = version_repo
    service.doc_repo = doc_repo
    return service


async def get_knowledge_space_chat_service(
    request: Request,
    login_user: UserPayload = Depends(UserPayload.get_login_user),
    chat_session_repo: KnowledgeChatSessionRepository = Depends(get_knowledge_chat_session_repository),
) -> "KnowledgeSpaceChatService":
    """Get KnowledgeSpaceChatService instance, bound to the current request and login user."""
    from doberman_agent.knowledge.domain.services.knowledge_space_chat_service import KnowledgeSpaceChatService as _SvcClass

    service = _SvcClass(request=request, login_user=login_user)
    service.chat_session_repo = chat_session_repo
    return service


async def get_knowledge_file_visibility_service(
    request: Request,
    login_user: UserPayload = Depends(UserPayload.get_login_user),
    version_repo: KnowledgeDocumentVersionRepository = Depends(get_knowledge_document_version_repository),
) -> "KnowledgeFileVisibilityService":
    """Get KnowledgeFileVisibilityService instance (F029).

    Bound to the current request and login user; shared by chat_folder,
    queryChunksFromDB and CitationResolveService for view_file filtering.
    """
    from doberman_agent.knowledge.domain.services.knowledge_file_visibility_service import (
        KnowledgeFileVisibilityService as _SvcClass,
    )

    service = _SvcClass(request=request, login_user=login_user)
    service.version_repo = version_repo
    return service


async def get_knowledge_version_service(
    request: Request,
    login_user: UserPayload = Depends(UserPayload.get_login_user),
    doc_repo: KnowledgeDocumentRepository = Depends(get_knowledge_document_repository),
    version_repo: KnowledgeDocumentVersionRepository = Depends(get_knowledge_document_version_repository),
    knowledge_file_repo: KnowledgeFileRepository = Depends(get_knowledge_file_repository),
) -> "KnowledgeVersionService":
    """Get KnowledgeVersionService instance, bound to the current request and login user."""
    from doberman_agent.knowledge.domain.services.knowledge_version_service import KnowledgeVersionService

    return KnowledgeVersionService(
        request=request,
        login_user=login_user,
        doc_repo=doc_repo,
        version_repo=version_repo,
        knowledge_file_repo=knowledge_file_repo,
    )
