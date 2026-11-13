<p align="center"><img src="docs/assets/doberman-agent-icon.png" width="192" height="192" alt="doberman-agent"></p>

# doberman-agent

Plataforma Agent empresarial de código aberto para criar, implantar e gerenciar aplicações de IA, com tarefas de várias etapas, fluxos de trabalho, recuperação de conhecimento, integração de modelos e controle de acesso para equipes.

[简体中文](README.md) · [English](README_EN.md) · [日本語](README_JPN.md) · [Español](README_ES.md) · [Português](README_PT.md) · [Русский](README_RU.md)

## Recursos

- Agentes que combinam ferramentas, habilidades e arquivos, com participação humana e geração de documentos.
- Fluxos visuais para conversas, automação, ciclos, execução paralela e processamento em lote.
- Espaços de conhecimento com RAG, citações de fontes e permissões por arquivo.
- Configuração de modelos e ferramentas API/MCP, gestão de organizações, múltiplos locatários e registros de auditoria.
- Compilação, aprovação, publicação e gestão de aplicações hospedadas; exigem configurar o ambiente de execução opcional.

## Primeiros passos

Instale e inicie o Docker e prepare Docker Compose V2, Git e Bash. As dependências de compilação e os registros de imagens configurados precisam estar acessíveis.

```bash
git clone https://github.com/cp7553479/doberman-agent.git
cd doberman-agent
bash docker/install.sh --prepare-only
```

Antes de iniciar, substitua as credenciais de desenvolvimento e configure:

- `docker/.env`, gerado a partir de [`docker/.env.example`](docker/.env.example): imagens de infraestrutura, autenticação do registro, credenciais do MinIO e token do sandbox.
- [`docker/docker-compose.yml`](docker/docker-compose.yml): senha do MySQL e conexões de banco de dados dos dois serviços OpenFGA.
- [`docker/doberman-agent/config/config.yaml`](docker/doberman-agent/config/config.yaml): conexões do backend. A senha em `database_url` deve usar o formato criptografado nativo e corresponder à senha do MySQL.

```bash
bash docker/install.sh
cd docker
docker compose ps
docker compose logs -f backend backend_worker
```

O instalador compila as imagens da aplicação a partir deste código, baixa as imagens de infraestrutura e inicia os serviços. Quando estiverem prontos, acesse `http://SERVER_IP:3001`. O primeiro usuário registrado será administrador; configure os modelos após entrar. A análise externa de documentos e os ambientes opcionais precisam de configuração adicional. Consulte a [implantação com Docker](docker/README.md).

## Documentação e contribuições

[Documentação](docs/README.md) · [Arquitetura](docs/architecture/01-architecture-overview.md) · [SDK Python](src/doberman-agent-sdk/README.md) · [CLI](src/doberman-agent-cli/README.md)

Contribuições por [pull requests](https://github.com/cp7553479/doberman-agent/pulls) são bem-vindas. Siga o [Código de conduta](CODE_OF_CONDUCT.md).

Licença [Apache 2.0](LICENSE). Veja os [agradecimentos](README.md#致谢).
