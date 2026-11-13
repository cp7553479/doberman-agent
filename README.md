<p align="center"><img src="docs/assets/doberman-agent-icon.png" width="192" height="192" alt="doberman-agent"></p>

# doberman-agent

开源企业 Agent 平台，提供对话、任务执行、工作流、知识检索和应用托管能力，支持自行部署。

[English](README_EN.md) · [日本語](README_JPN.md) · [Español](README_ES.md) · [Português](README_PT.md) · [Русский](README_RU.md)

## 能力

- Agent 对话与多步骤任务，支持工具、技能、文件和人工确认。
- 工作流编排与知识空间，支持 RAG、引用溯源和文档解析。
- 托管应用的构建、审批、发布和运行管理。
- 模型管理、组织权限、多租户、使用统计和审计。
- 独立 Python SDK、开发者 CLI，以及管理端和用户端 Web 界面。

## 获取源码

```bash
git clone https://github.com/cp7553479/doberman-agent.git
cd doberman-agent
```

## 开发与部署

| 目录 | 用途 |
| --- | --- |
| `src/backend/` | FastAPI API、Celery 和 Agent worker |
| `src/frontend/` | 管理端、用户端及共享前端包 |
| `src/doberman-agent-sdk/` | Python 应用 SDK，导入名 `doberman_agent_sdk` |
| `src/doberman-agent-cli/` | 开发者 CLI，命令 `doberman-agent` |
| `src/runtime-manager/` | 托管应用运行管理 |
| `docker/`、`deploy/` | 容器构建与部署配置 |

前端使用 Node.js 20.19+、pnpm 9；后端使用 Python 3.11 和 uv。组件启动命令见各目录的 `AGENTS.md`，部署步骤见 [Docker 部署说明](docker/README.md)。

```bash
cd src/frontend
pnpm install --frozen-lockfile
pnpm build
```

完整服务需要配置数据库、Redis、对象存储、向量检索和模型服务。托管应用还需要配置相应运行环境。项目名称、命令和镜像使用 `doberman-agent`；Python 标识符使用 `doberman_agent`，环境变量使用 `DOBERMAN_AGENT`。

[文档索引](docs/README.md) · [架构说明](docs/architecture/01-architecture-overview.md) · [提交记录](https://github.com/cp7553479/doberman-agent/commits/main)

## 图标

[1:1 PNG 图标](docs/assets/doberman-agent-icon.png)：白底黑色，以点和短横组成的杜宾正面图案。

## 感谢与许可证

感谢 [BISHENG](https://github.com/dataelement/bisheng) 项目及其贡献者提供开源基础。本仓库修改了项目名称、品牌资源、包标识和构建配置，保留上游提交历史和版权声明。

本项目采用 [Apache License 2.0](LICENSE)。第三方依赖的许可证与版权声明随对应源码保留。
