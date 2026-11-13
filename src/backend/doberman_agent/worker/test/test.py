from loguru import logger

from doberman_agent.worker.main import doberman_agent_celery


@doberman_agent_celery.task
def add(x, y):
    logger.info(f"add {x} + {y}")
    return x + y
