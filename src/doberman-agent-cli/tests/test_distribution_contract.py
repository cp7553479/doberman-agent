"""F119 覆盖 AC: AC-01, AC-27: test the wheel actually downloaded by platform users."""

import hashlib
import json
import subprocess
import sys
import tomllib
import zipfile
from email.parser import Parser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
ARTIFACTS = ROOT / "src/backend/doberman_agent/dev_toolkit/artifacts"


def test_source_metadata_wheel_and_platform_manifest_agree():
    import doberman_agent_cli

    distribution = json.loads((ARTIFACTS / "manifest.json").read_text())["cli"]
    wheel = ARTIFACTS / distribution["filename"]
    assert distribution["version"] == doberman_agent_cli.__version__
    assert (
        tomllib.loads((ROOT / "src/doberman-agent-cli/pyproject.toml").read_text())["project"]["version"]
        == doberman_agent_cli.__version__
    )
    assert hashlib.sha256(wheel.read_bytes()).hexdigest() == distribution["sha256"]
    with zipfile.ZipFile(wheel) as archive:
        metadata = Parser().parsestr(
            archive.read(next(n for n in archive.namelist() if n.endswith(".dist-info/METADATA"))).decode()
        )
        assert metadata["Version"] == distribution["version"]
        assert archive.read("doberman_agent_cli/errors.py") == (ROOT / "src/doberman-agent-cli/doberman_agent_cli/errors.py").read_bytes()


def test_downloaded_wheel_has_the_new_error_behavior_in_an_isolated_python():
    distribution = json.loads((ARTIFACTS / "manifest.json").read_text())["cli"]
    wheel = ARTIFACTS / distribution["filename"]
    script = "import sys; sys.path.insert(0, sys.argv[1]); from doberman_agent_cli.errors import error_from_platform,render_human; err=error_from_platform(16124,'failed',details={'reason':'startup_exited','tail':[]}); assert err.code==16124 and err.exit_code==10; text=render_human(err); assert 'startup_exited' in text and '暂无可用' in text"
    subprocess.run([sys.executable, "-I", "-c", script, str(wheel)], check=True, capture_output=True)


def test_cli_packaging_preserves_the_existing_sdk_distribution():
    manifest = json.loads((ARTIFACTS / "manifest.json").read_text())
    sdk_metadata = tomllib.loads((ROOT / "src/doberman-agent-sdk/pyproject.toml").read_text())["project"]
    assert manifest["sdk"]["version"] == sdk_metadata["version"]
    assert manifest["sdk"]["filename"].startswith("doberman_agent_sdk-")
    sdk = ARTIFACTS / manifest["sdk"]["filename"]
    assert hashlib.sha256(sdk.read_bytes()).hexdigest() == manifest["sdk"]["sha256"]
