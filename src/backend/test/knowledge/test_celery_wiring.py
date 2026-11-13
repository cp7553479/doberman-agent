def test_beat_schedule_contains_scheduler_entries():
    from doberman_agent.core.config.settings import CeleryConf

    conf = CeleryConf()
    assert "file_scheduler_dispatch" in conf.beat_schedule
    entry = conf.beat_schedule["file_scheduler_dispatch"]
    assert entry["task"] == "doberman_agent.worker.knowledge.scheduler.trigger_dispatch_task"
    assert entry["schedule"] == 30.0

    assert "file_scheduler_reconcile" in conf.beat_schedule
    rentry = conf.beat_schedule["file_scheduler_reconcile"]
    assert rentry["task"] == "doberman_agent.worker.knowledge.scheduler.reconcile_file_scheduler_task"
    assert rentry["schedule"] == 300.0


def test_worker_init_exports_scheduler_tasks():
    from doberman_agent import worker

    assert hasattr(worker, "trigger_dispatch_task")
    assert hasattr(worker, "reconcile_file_scheduler_task")
