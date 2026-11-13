import os

from doberman_agent.worker.main import doberman_agent_celery

_QUEUES = {
    "all": "ocr_celery,knowledge_celery,workflow_celery,celery",
    "ocr": "ocr_celery",
    "file": "knowledge_celery,workflow_celery,celery",
}


def main() -> None:
    mode = os.environ.get("DOBERMAN_AGENT_CELERY_MODE", "all")
    if mode not in _QUEUES:
        raise ValueError(f"DOBERMAN_AGENT_CELERY_MODE={mode!r} is invalid; expected one of {sorted(_QUEUES)}")
    concurrency = os.environ.get("DOBERMAN_AGENT_CELERY_CONCURRENCY", "20")
    doberman_agent_celery.start(
        argv=[
            "worker",
            "-l",
            "info",
            "-c",
            concurrency,
            "-P",
            "threads",
            "-Q",
            _QUEUES[mode],
        ]
    )


if __name__ == "__main__":
    main()
