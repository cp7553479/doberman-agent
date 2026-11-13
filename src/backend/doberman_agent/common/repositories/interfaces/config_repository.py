from abc import ABC

from doberman_agent.common.models.config import Config
from doberman_agent.common.repositories.interfaces.base_repository import BaseRepository


class ConfigRepository(BaseRepository[Config, str], ABC):
    """Configure warehouse interfaces"""
    pass
