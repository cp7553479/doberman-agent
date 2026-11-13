"""每个模块都能单独 import —— 一个循环 import 在应用容器里就是启动失败。"""

from __future__ import annotations

import importlib

import pytest

MODULES = [
    "doberman_agent_sdk",
    "doberman_agent_sdk.auth",
    "doberman_agent_sdk.retrieve",
    "doberman_agent_sdk.storage",
    "doberman_agent_sdk.errors",
    "doberman_agent_sdk._attachment",
    "doberman_agent_sdk._codes",
    "doberman_agent_sdk._compat",
    "doberman_agent_sdk._context",
    "doberman_agent_sdk._env",
    "doberman_agent_sdk._headers",
    "doberman_agent_sdk._http",
    "doberman_agent_sdk._paths",
    "doberman_agent_sdk._storage_local",
    "doberman_agent_sdk._storage_remote",
]


@pytest.mark.parametrize("name", MODULES)
def test_module_imports(name: str):
    assert importlib.import_module(name) is not None


def test_import_does_no_io():
    """`import doberman_agent_sdk` 不打网络、不读盘——否则单测与探活都被拖下水。

    `no_network` 哨兵已经保证了前半句；这里断言导入后没有任何客户端被建出来。
    """
    from doberman_agent_sdk import _http

    importlib.reload(importlib.import_module("doberman_agent_sdk"))
    assert _http._clients == {}
    assert _http._aclients == {}


def test_httpx_is_available_with_both_faces():
    import httpx

    assert hasattr(httpx, "Client") and hasattr(httpx, "AsyncClient") and hasattr(httpx, "MockTransport")
