#!/bin/bash

export PYTHONPATH="./"
echo "Reindexing telemetry events..."
python doberman_agent/script/base_telemetry_events_reindex.py
echo "Reindexing completed."