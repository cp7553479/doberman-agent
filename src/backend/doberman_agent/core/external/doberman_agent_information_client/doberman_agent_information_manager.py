from doberman_agent.core.external.doberman_agent_information_client.client import DobermanAgentInformationClient


async def get_doberman_agent_information_client() -> DobermanAgentInformationClient:
    """Get a lightweight doberman-agent Information Client with the latest config."""
    from doberman_agent.common.services.config_service import settings
    from doberman_agent.core.external.http_client.http_client_manager import get_http_client
    http_client = await get_http_client()
    return DobermanAgentInformationClient(http_client=http_client, get_conf=settings.get_intelligence_center_conf)


def get_doberman_agent_information_client_sync() -> DobermanAgentInformationClient:
    """Get a lightweight sync doberman-agent Information Client with the latest config."""
    from doberman_agent.common.services.config_service import settings
    return DobermanAgentInformationClient(http_client=None, get_conf=settings.get_intelligence_center_conf)
