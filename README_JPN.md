<p align="center"><img src="docs/assets/doberman-agent-icon.png" width="192" height="192" alt="doberman-agent"></p>

# doberman-agent

AI アプリケーションの構築・デプロイ・管理のためのオープンソース企業向け Agent プラットフォームです。複数ステップのタスク、ワークフロー、ナレッジ検索、モデル連携、チームのアクセス管理を提供します。

[简体中文](README.md) · [English](README_EN.md) · [日本語](README_JPN.md) · [Español](README_ES.md) · [Português](README_PT.md) · [Русский](README_RU.md)

## 主な機能

- ツール、スキル、ファイルを使う Agent タスク。人による確認やドキュメント生成に対応。
- 会話、ループ、並列処理、バッチ処理を組み合わせるビジュアルワークフロー。
- RAG、出典の引用、ファイル単位の権限を備えたナレッジスペース。
- モデルと API/MCP ツールの設定、組織・マルチテナント管理、監査ログ。
- アプリのビルド、承認、公開、実行管理。別途アプリ実行環境の設定が必要です。

## はじめに

Docker をインストールして起動し、Docker Compose V2、Git、Bash を用意してください。ビルド依存関係と指定したイメージレジストリにアクセスできる必要があります。

```bash
git clone https://github.com/cp7553479/doberman-agent.git
cd doberman-agent
bash docker/install.sh --prepare-only
```

起動前に開発用の認証情報を変更し、次の設定を行ってください。

- [`docker/.env.example`](docker/.env.example) から生成される `docker/.env`：ミドルウェアイメージ、レジストリ認証、MinIO 認証情報、サンドボックストークン。
- [`docker/docker-compose.yml`](docker/docker-compose.yml)：MySQL パスワードと、両方の OpenFGA サービスのデータベース接続文字列。
- [`docker/doberman-agent/config/config.yaml`](docker/doberman-agent/config/config.yaml)：バックエンド接続設定。`database_url` のパスワードは標準の暗号化形式を使い、MySQL と一致させてください。

```bash
bash docker/install.sh
cd docker
docker compose ps
docker compose logs -f backend backend_worker
```

インストーラーは現在のソースからアプリのイメージをビルドし、ミドルウェアイメージを取得して起動します。準備完了後、`http://SERVER_IP:3001` にアクセスしてください。最初の登録ユーザーが管理者になります。ログイン後にモデルサービスを設定してください。外部の文書解析サービスとオプションの実行環境は別途設定が必要です。[Docker デプロイ手順](docker/README.md)を参照してください。

## ドキュメントと貢献

[ドキュメント](docs/README.md) · [アーキテクチャ](docs/architecture/01-architecture-overview.md) · [Python SDK](src/doberman-agent-sdk/README.md) · [CLI](src/doberman-agent-cli/README.md)

[Pull Request](https://github.com/cp7553479/doberman-agent/pulls) を歓迎します。[行動規範](CODE_OF_CONDUCT.md)に従ってください。

[Apache License 2.0](LICENSE) で提供しています。[謝辞](README.md#致谢)をご覧ください。
