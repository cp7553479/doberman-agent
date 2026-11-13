<p align="center"><img src="docs/assets/doberman-agent-icon.png" width="192" height="192" alt="doberman-agent"></p>

# doberman-agent

Корпоративная Agent-платформа с открытым исходным кодом для создания, развёртывания и управления ИИ-приложениями. Поддерживает многоэтапные задачи, рабочие процессы, поиск знаний, подключение моделей и управление доступом команд.

[简体中文](README.md) · [English](README_EN.md) · [日本語](README_JPN.md) · [Español](README_ES.md) · [Português](README_PT.md) · [Русский](README_RU.md)

## Возможности

- Агенты используют инструменты, навыки и файлы; поддерживаются участие человека и создание документов.
- Визуальные рабочие процессы объединяют диалоги, автоматизацию, циклы, параллельное и пакетное выполнение.
- Пространства знаний с RAG, ссылками на источники и правами доступа к отдельным файлам.
- Настройка моделей и API/MCP-инструментов, управление организациями и арендаторами, журналы аудита.
- Сборка, согласование, публикация и управление размещёнными приложениями требуют отдельной настройки среды выполнения.

## Начало работы

Установите и запустите Docker, подготовьте Docker Compose V2, Git и Bash. Зависимости сборки и настроенные реестры образов должны быть доступны.

```bash
git clone https://github.com/cp7553479/doberman-agent.git
cd doberman-agent
bash docker/install.sh --prepare-only
```

Перед запуском замените учётные данные для разработки и настройте:

- `docker/.env`, созданный из [`docker/.env.example`](docker/.env.example): образы инфраструктуры, авторизацию в реестре, учётные данные MinIO и токен песочницы.
- [`docker/docker-compose.yml`](docker/docker-compose.yml): пароль MySQL и строки подключения к базе данных обоих сервисов OpenFGA.
- [`docker/doberman-agent/config/config.yaml`](docker/doberman-agent/config/config.yaml): подключения бэкенда. Пароль в `database_url` должен быть зашифрован в штатном формате и совпадать с паролем MySQL.

```bash
bash docker/install.sh
cd docker
docker compose ps
docker compose logs -f backend backend_worker
```

Установщик собирает образы приложения из текущих исходников, загружает образы инфраструктуры и запускает сервисы. После запуска откройте `http://SERVER_IP:3001`. Первый зарегистрированный пользователь становится администратором; затем настройте модели. Внешний сервис разбора документов и дополнительные среды выполнения настраиваются отдельно. См. [развёртывание Docker](docker/README.md).

## Документация и участие

[Документация](docs/README.md) · [Архитектура](docs/architecture/01-architecture-overview.md) · [Python SDK](src/doberman-agent-sdk/README.md) · [CLI](src/doberman-agent-cli/README.md)

Изменения можно предложить через [pull request](https://github.com/cp7553479/doberman-agent/pulls). Соблюдайте [правила поведения](CODE_OF_CONDUCT.md).

Лицензия [Apache 2.0](LICENSE). См. [благодарности](README.md#致谢).
