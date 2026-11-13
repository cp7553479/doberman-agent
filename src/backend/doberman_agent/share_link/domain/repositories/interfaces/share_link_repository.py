from abc import ABC

from doberman_agent.common.repositories.interfaces.base_repository import BaseRepository
from doberman_agent.share_link.domain.models.share_link import ShareLink


class ShareLinkRepository(BaseRepository[ShareLink, str], ABC):
    """Shared Link Warehouse Interface"""
    pass
