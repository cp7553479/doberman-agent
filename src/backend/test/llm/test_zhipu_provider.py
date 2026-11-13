import json
from types import SimpleNamespace
from unittest.mock import AsyncMock

from doberman_agent.llm.domain.const import LLMModelType, LLMServerType
from doberman_agent.llm.domain.llm.llm import DobermanAgentLLM, _get_zhipu_params
from doberman_agent.llm.domain.services.llm import LLMService


def _make_llm_wrapper(server_type: str) -> DobermanAgentLLM:
    inst = DobermanAgentLLM.model_construct(streaming=None)
    object.__setattr__(inst, "server_info", SimpleNamespace(type=server_type))
    object.__setattr__(inst, "model_info", SimpleNamespace(model_name="glm-4-plus"))
    return inst


def test_zhipu_defaults_to_non_streaming_when_not_configured():
    inst = _make_llm_wrapper(LLMServerType.ZHIPU.value)

    params = inst._get_default_params({}, {})

    assert params["streaming"] is False


def test_zhipu_respects_explicit_streaming_user_kwargs():
    inst = _make_llm_wrapper(LLMServerType.ZHIPU.value)

    params = inst._get_default_params({}, {"user_kwargs": json.dumps({"streaming": True})})

    assert params["streaming"] is True


def test_zhipu_params_keep_provider_advanced_kwargs():
    params = _get_zhipu_params(
        {"model": "glm-4-plus", "streaming": False},
        {
            "openai_api_key": "test-key",
            "openai_api_base": "https://open.bigmodel.cn/api/paas/v4/",
        },
        {"user_kwargs": json.dumps({"top_p": 0.7, "tags": ["dm8"]})},
    )

    assert params["zhipuai_api_key"] == "test-key"
    assert params["zhipuai_api_base"] == "https://open.bigmodel.cn/api/paas/v4/chat/completions"
    assert params["streaming"] is False
    assert params["top_p"] == 0.7
    assert params["tags"] == ["dm8"]


async def test_model_status_checks_llm_with_non_streaming(monkeypatch):
    seen_kwargs = {}

    async def fake_get_doberman_agent_llm(**kwargs):
        seen_kwargs.update(kwargs)
        return SimpleNamespace(ainvoke=AsyncMock())

    monkeypatch.setattr(LLMService, "get_doberman_agent_llm", fake_get_doberman_agent_llm)
    # The probe records its verdict on success too (F044), so stub the write —
    # this test is only about how the model gets called.
    monkeypatch.setattr(
        "doberman_agent.llm.domain.services.llm.LLMDao.update_model_status",
        lambda *args, **kwargs: None,
    )

    await LLMService.test_model_status(
        SimpleNamespace(id=10, model_name="glm-4-plus", model_type=LLMModelType.LLM.value),
        SimpleNamespace(user_id=3),
    )

    assert seen_kwargs["model_id"] == 10
    assert seen_kwargs["ignore_online"] is True
    assert seen_kwargs["streaming"] is False
