from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from doberman_agent.common.errcode.channel import DobermanAgentInformationServiceError
from doberman_agent.core.config.settings import IntelligenceCenterConf
from doberman_agent.core.external.doberman_agent_information_client.client import DobermanAgentInformationClient


async def test_subscribe_failure_emits_collectable_error_log_and_reraises():
    http_client = SimpleNamespace(
        post=AsyncMock(return_value=SimpleNamespace(status_code=503, body={"message": "unavailable"}))
    )
    client = DobermanAgentInformationClient(
        http_client=http_client,
        get_conf=lambda: IntelligenceCenterConf(base_url="http://information.test", api_key="secret"),
    )

    with patch("doberman_agent.core.external.doberman_agent_information_client.client.logger.exception") as log_exception:
        with pytest.raises(DobermanAgentInformationServiceError):
            await client.subscribe_information_source(["source-1", "source-2"])

    log_exception.assert_called_once_with(
        "DOBERMAN_AGENT_INFORMATION_SUBSCRIPTION_REQUEST_FAILED endpoint={} source_count={}",
        "http://information.test/information/subscribe",
        2,
    )
