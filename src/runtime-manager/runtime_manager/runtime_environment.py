"""Pure public environment contract; identities and mounts remain adapter-owned."""

SYSTEM_PATH = "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
BUNDLE_PATH = "/opt/venv/bin:/workspace/app/node_modules/.bin:" + SYSTEM_PATH


def platform_environment(
    *, app_id, slug, version_id, version_no, port, health_path="/", base_path="", language="", bundle=False, extra=None
):
    env = dict(extra or {})
    prefix = base_path or f"/apps/{slug}"
    env.update(
        {
            "DOBERMAN_AGENT_APP_DB_URL": "sqlite:////data/app.db",
            "DOBERMAN_AGENT_APP_DB_PATH": "/data/app.db",
            "DOBERMAN_AGENT_APP_ID": app_id,
            "DOBERMAN_AGENT_APP_SLUG": slug,
            "DOBERMAN_AGENT_APP_VERSION_ID": version_id,
            "DOBERMAN_AGENT_APP_VERSION": "" if version_no is None else str(version_no),
            "PORT": str(port),
            "DOBERMAN_AGENT_APP_PORT": str(port),
            "DOBERMAN_AGENT_APP_BASE_PATH": prefix,
            "DOBERMAN_AGENT_APP_HEALTH_PATH": health_path,
        }
    )
    if language == "python3.11":
        env.update(UVICORN_ROOT_PATH=prefix, GRADIO_ROOT_PATH=prefix, STREAMLIT_SERVER_BASE_URL_PATH=prefix.lstrip("/"))
    elif language == "node20":
        env["BASE_PATH"] = prefix
    if bundle:
        env["PATH"] = BUNDLE_PATH
    return env
