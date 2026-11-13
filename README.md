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

## 示例、模板与辅助资料

| 类别 | 入口 | 用途 |
|---|---|---|
| 示例与原型 | [表单问卷](examples/apps/form-survey/) · [应用工场与服务账号原型](features/v3.0.0/000-prd1-discovery/ui-demo/) | 演示托管应用契约，以及平台交互与企业集成场景。 |
| 评测工具 | [任务模式评测执行器](tools/taskmode_eval/README.md) | 10 个文件提供环境准备、执行、产物抽取、判分和历史基线比较；手工运行，客户用例材料存放在仓库外。 |
| 导入工具 | [首钢组织与人员导入 CLI](src/backend/scripts/shougang_init_org_users.py) | 按首钢 Excel 字段约定手工导入部门和人员，支持 `--dry-run`。 |
| 回归样例 | [思源 PPT 会话](src/frontend/client/src/components/Linsight/Execution/__fixtures__/linsightSieyuanPptHistory.json) · [步骤折叠测试](src/frontend/client/src/components/Linsight/Execution/stepFold.test.ts) · [旁白测试](src/frontend/client/src/components/Linsight/Execution/narration.realSession.test.ts) | 用真实会话验证执行时间线、步骤折叠与旁白渲染。 |
| 回归样例 | [读图辅助测试](src/backend/test/common/test_image_view_loop.py) · [读图编排测试](src/backend/test/common/test_image_view_react_loop.py) | 内含首钢手册片段，验证图片定位、选择与多模态读图流程。 |
| 预览测试 | [XLS](src/frontend/config/fixtures/spreadsheet.xls) · [XLSX](src/frontend/config/fixtures/spreadsheet.xlsx) · [F089 夹具](features/v3.0.0/089-shared-preview-citation/browser-smoke/fixtures/) | 表格解析，以及文档、图片、音频和引用预览的测试输入。 |
| PPT 模板 | [五套模板](src/backend/doberman_agent/linsight/builtin_skills/doberman-agent-pptx/templates/) · [制作配方](src/backend/doberman_agent/linsight/builtin_skills/doberman-agent-pptx/references/pptx-cookbook.md) | PPT 技能使用红韵、蓝图、经营、深空、课堂模板生成可编辑演示文稿。 |
| 初始化资料 | [应用模板](src/backend/doberman_agent/database/data/template.json) · [工具](src/backend/doberman_agent/database/data/t_gpts_tools.json) · [工具分类](src/backend/doberman_agent/database/data/t_gpts_tools_type.json) · [报告模板](src/backend/doberman_agent/database/data/0254d1808a5247d2a3ee0d0011819acb.docx) | 平台初始化使用的预置应用、工具与报告文档。 |
| 前端资料 | [评测 CSV](src/frontend/platform/public/template.csv) · [数据集 JSON](src/frontend/platform/public/dataset.json) · [模型配置 PDF](src/frontend/platform/public/doc.pdf) · [空白 Word](src/frontend/platform/public/empty.docx) | 评测与数据集页面的下载样例、模型配置说明和报告编辑起始文档。 |
| 运行资源 | [品牌图标](src/frontend/client/public/assets/sg-logo.png) · [ASR 音频](src/backend/doberman_agent/llm/domain/services/asr_example.wav) | 当前品牌图片资源，以及语音识别模型连通性探测的输入音频。 |
| 权限参考 | [权限字典](Claude%20outputs/doberman-agent-3.0-beta1-permission-dictionary/permission-dictionary.html) · [MySQL 查询](Claude%20outputs/doberman-agent-3.0-beta1-permission-dictionary/permission_config_queries.mysql.sql) · [DM8 查询](Claude%20outputs/doberman-agent-3.0-beta1-permission-dictionary/permission_config_queries.dm8.sql) | 适用于 3.0.0-beta1 的权限表、字段与手工查询参考。 |
| 产品与研发文档 | [PRD](docs/PRD/) · [SDD](features/) · [技术博客](docs/blog/) · [多租户指南](docs/customer-guides/多租户产品使用说明.md) | 产品需求、设计与验证、技术讲解和使用说明；企业案例记录功能需求来源及验证场景。 |

## 贡献

欢迎通过 [Pull Request](https://github.com/cp7553479/doberman-agent/pulls) 提交改进。参与项目请遵循 [行为准则](CODE_OF_CONDUCT.md)。

## 许可证

本项目采用 [Apache License 2.0](LICENSE)。

## 致谢

感谢 [BISHENG](https://github.com/dataelement/bisheng) 项目及其贡献者提供开源基础。
