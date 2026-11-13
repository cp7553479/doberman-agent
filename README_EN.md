<p align="center"><img src="docs/assets/doberman-agent-icon.png" width="192" height="192" alt="doberman-agent"></p>

# doberman-agent

An open-source enterprise Agent platform for building, deploying and managing AI applications, with multi-step tasks, workflows, knowledge retrieval, model integration and team access control.

[简体中文](README.md) · [English](README_EN.md) · [日本語](README_JPN.md) · [Español](README_ES.md) · [Português](README_PT.md) · [Русский](README_RU.md)

## Features

- Agents combine tools, skills and files to complete multi-step tasks, with human input and document generation.
- Visual workflows support conversations, automation, loops, parallel execution and batch processing.
- Knowledge spaces provide RAG, source citations and file-level permissions.
- Centralized model and API/MCP tool configuration, organization management, multi-tenancy and audit logs.
- Hosted application builds, approvals, publishing and runtime management require the optional application runtime.

## Getting started

Install and start Docker, and install Docker Compose V2, Git and Bash. Build dependencies and configured image registries must be reachable.

```bash
git clone https://github.com/cp7553479/doberman-agent.git
cd doberman-agent
bash docker/install.sh --prepare-only
```

Before starting, replace development credentials and configure:

- `docker/.env`, generated from [`docker/.env.example`](docker/.env.example): infrastructure images, registry authentication, MinIO credentials and sandbox token.
- [`docker/docker-compose.yml`](docker/docker-compose.yml): MySQL password and both OpenFGA database connection strings.
- [`docker/doberman-agent/config/config.yaml`](docker/doberman-agent/config/config.yaml): backend connections. The password in `database_url` must use the native encrypted format and match MySQL.

```bash
bash docker/install.sh
cd docker
docker compose ps
docker compose logs -f backend backend_worker
```

The installer builds application images from this checkout, pulls infrastructure images and starts services. Visit `http://SERVER_IP:3001` once ready. The first registered user becomes administrator; configure model services after signing in. External document parsing and optional runtimes need separate configuration. See [Docker deployment](docker/README.md).

## Documentation and contributions

[Documentation](docs/README.md) · [Architecture](docs/architecture/01-architecture-overview.md) · [Python SDK](src/doberman-agent-sdk/README.md) · [CLI](src/doberman-agent-cli/README.md)

Contributions are welcome through [pull requests](https://github.com/cp7553479/doberman-agent/pulls). Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

Licensed under [Apache License 2.0](LICENSE). See [acknowledgements](README.md#致谢).
