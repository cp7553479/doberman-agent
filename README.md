<p align="center"><img src="docs/assets/doberman-agent-icon.png" width="192" height="192" alt="doberman-agent"></p>

# doberman-agent

开源企业 Agent 平台，用于构建、部署和管理 AI 应用，集成任务执行、工作流、知识检索、模型接入和团队权限管理，支持私有化部署。

[简体中文](README.md) · [English](README_EN.md) · [日本語](README_JPN.md) · [Español](README_ES.md) · [Português](README_PT.md) · [Русский](README_RU.md)

## 功能

- **任务 Agent**：拆解多步骤任务，结合工具、技能和文件执行工作，支持人工确认与文档产出。
- **工作流**：可视化编排对话和自动化任务，支持循环、并行、批量执行与人工交互。
- **知识空间与 RAG**：组织文档、检索知识并进行问答，提供来源引用和文件级权限控制。
- **模型与工具**：集中配置模型，接入 API、MCP 工具和技能，供应用与 Agent 使用。
- **托管应用**：管理应用的构建、审批、发布和运行；需另外配置并启用应用运行环境。
- **团队管理**：管理组织、角色、资源权限和多租户数据，记录系统操作与审计日志。

## 快速开始

需要已安装并启动的 Docker、Docker Compose V2、Git 和 Bash。构建依赖及配置的镜像源须可访问。

```bash
git clone https://github.com/cp7553479/doberman-agent.git
cd doberman-agent
bash docker/install.sh --prepare-only
```

首次启动前配置以下文件。仓库中的开发默认凭据需要替换，数据库密码须在各处保持一致：

- [`docker/.env.example`](docker/.env.example) 生成的 `docker/.env`：配置中间件镜像地址、镜像仓库认证、MinIO 凭据和沙箱令牌。
- [`docker/docker-compose.yml`](docker/docker-compose.yml)：设置 MySQL 密码，并同步两个 OpenFGA 服务的数据库连接串。
- [`docker/doberman-agent/config/config.yaml`](docker/doberman-agent/config/config.yaml)：配置后端连接；`database_url` 中的密码须按原生配置要求加密，并与 MySQL 一致。

然后构建并启动服务：

```bash
bash docker/install.sh
cd docker
docker compose ps
docker compose logs -f backend backend_worker
```

安装脚本从当前源码构建应用镜像，拉取中间件镜像并启动服务。默认部署包含 MySQL、Redis、MinIO、OpenFGA、Elasticsearch 和 Milvus。

服务就绪后访问 `http://服务器IP:3001`。首个注册用户会成为管理员；登录后配置模型服务。外部文档解析服务及可选运行环境需另行配置，详见 [Docker 部署说明](docker/README.md)。

## 文档

- [文档索引](docs/README.md)
- [Docker 部署](docker/README.md)
- [系统架构](docs/architecture/01-architecture-overview.md)
- [Python SDK](src/doberman-agent-sdk/README.md) · [开发者 CLI](src/doberman-agent-cli/README.md)

## 贡献

欢迎通过 [Pull Request](https://github.com/cp7553479/doberman-agent/pulls) 提交改进。参与项目请遵循 [行为准则](CODE_OF_CONDUCT.md)。

## 许可证

本项目采用 [Apache License 2.0](LICENSE)。

## 致谢

感谢 [BISHENG](https://github.com/dataelement/bisheng) 项目及其贡献者提供开源基础。
