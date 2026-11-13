from abc import ABC

from doberman_agent.common.repositories.interfaces.base_repository import BaseRepository
from doberman_agent.knowledge.domain.models.knowledge import Knowledge


class KnowledgeRepository(BaseRepository[Knowledge, int], ABC):
    """Knowledge Base Repository Interface"""
    pass
