from doberman_agent.core.config.settings import Settings


def test_in_app_message_forwarding_defaults_disabled():
    s = Settings()
    assert s.in_app_message_forwarding.cofco.enabled is False
    assert s.in_app_message_forwarding.cofco.api_base == ""
    assert s.in_app_message_forwarding.cofco.timeout_seconds == 5.0
    assert s.in_app_message_forwarding.cofco.enable_duplicate_check == 0


def test_in_app_message_forwarding_override():
    s = Settings(
        in_app_message_forwarding={
            "cofco": {
                "enabled": True,
                "api_base": "http://10.28.64.30:8070/qwmsg-ui",
                "app_id": "doberman_agent",
                "secret": "xxx",
                "agentid": 1,
                "doberman_agent_inbox_url": "https://doberman-agent.cofco.com",
            }
        }
    )
    c = s.in_app_message_forwarding.cofco
    assert c.enabled is True
    assert c.api_base.endswith("/qwmsg-ui")
    assert c.agentid == 1
