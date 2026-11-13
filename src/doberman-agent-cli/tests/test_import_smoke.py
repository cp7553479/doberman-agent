"""Module-level import smoke.

Every import below runs at collection time, deliberately — not inside a fixture
or a function body. A dependency that resolved to a version whose API moved
breaks at import, and if the only imports live inside test bodies that break can
hide behind mocks and still leave a wheel that dies on `doberman-agent --help`.

This repo has already paid for that once: `fastapi>=0.115` with no ceiling
resolved to 0.121 in development (69 tests green) and to 0.141 in production,
where the removed `add_websocket_route` killed the process at import. The upper
bounds in pyproject.toml and this file are the two halves of that fix.
"""

from __future__ import annotations

import tomllib
from pathlib import Path

import httpx
import yaml

import doberman_agent_cli
import doberman_agent_cli.cli
import doberman_agent_cli.commands
import doberman_agent_cli.credentials
import doberman_agent_cli.errors
import doberman_agent_cli.http
import doberman_agent_cli.ignore
import doberman_agent_cli.main
import doberman_agent_cli.output
import doberman_agent_cli.packaging
import doberman_agent_cli.project
from doberman_agent_cli.cli import build_parser
from doberman_agent_cli.main import main


def test_console_script_entry_point_is_importable_and_callable() -> None:
    # `[project.scripts] doberman-agent = "doberman_agent_cli.main:main"` — this is the exact
    # symbol pip wires the shell command to.
    assert callable(main)
    assert build_parser().prog == "doberman-agent"


def test_declared_runtime_dependencies_expose_the_api_we_use() -> None:
    # Not "is it installed" but "does this version still have the entry points
    # this CLI calls at module scope".
    assert hasattr(httpx, "MockTransport") and hasattr(httpx, "Timeout")
    assert hasattr(yaml, "safe_load")


def test_version_is_declared_once() -> None:
    # Everything that reports a version — --version, the compatibility probe, the
    # artifacts manifest — has to read this one attribute. A second literal
    # somewhere is how the download endpoint starts advertising a version that
    # is not the one inside the wheel.
    assert doberman_agent_cli.cli.__version__ is doberman_agent_cli.__version__
    assert doberman_agent_cli.http.__version__ is doberman_agent_cli.__version__
    # Compare with the declared package version rather than counting dots:
    # valid post releases such as 3.0.0.post1 contain more than two.
    pyproject = Path(__file__).resolve().parents[1] / "pyproject.toml"
    metadata = tomllib.loads(pyproject.read_text(encoding="utf-8"))
    assert doberman_agent_cli.__version__ == metadata["project"]["version"]
