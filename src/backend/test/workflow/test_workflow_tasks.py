import importlib
import sys
from pathlib import Path
from types import ModuleType
from unittest.mock import Mock

import pytest

# The shared test bootstrap replaces ``doberman_agent.worker`` with a lightweight
# module. Give that stub a package path so this focused test can import the real
# workflow task module while retaining the mocked Celery application.
worker_package = ModuleType("doberman_agent.worker")
worker_package.__path__ = [str(Path(__file__).parents[2] / "doberman_agent" / "worker")]
sys.modules["doberman_agent.worker"] = worker_package
tasks = importlib.import_module("doberman_agent.worker.workflow.tasks")


@pytest.mark.parametrize(
    ("task", "runner_name"),
    [
        (tasks.execute_workflow, "_execute_workflow"),
        (tasks.continue_workflow, "_continue_workflow"),
    ],
)
def test_telemetry_failure_does_not_change_workflow_task_outcome(monkeypatch, task, runner_name):
    runner = Mock()
    monkeypatch.setattr(tasks, runner_name, runner)
    monkeypatch.setattr(
        tasks.WorkFlowService,
        "get_one_workflow_simple_info_sync",
        Mock(side_effect=RuntimeError("telemetry metadata unavailable")),
    )

    task.run("run-id", "workflow-id", "chat-id", 42)

    runner.assert_called_once_with("run-id", "workflow-id", "chat-id", 42, "platform")
