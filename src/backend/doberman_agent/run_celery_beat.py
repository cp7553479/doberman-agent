from doberman_agent.worker.main import doberman_agent_celery

if __name__ == '__main__':
    doberman_agent_celery.start(argv=['beat', '--loglevel=debug'])

    # doberman_agent_celery.worker_main(
    #     argv=["worker", "--loglevel=info", "--logfile=./logs/celery.log", '--pool=threads', '--concurrency=4',"-Q=workflow_celery"])
    # worker.main(celery_app)
    # celery -A run_celery.celery_app worker -l info -c 16
    # celery -A run_celery.celery_app beat # Schedule cron job Rilis
    # celery -A run_celery.celery_app worker -l info -P gevent # Scheduling Execution Tasks
