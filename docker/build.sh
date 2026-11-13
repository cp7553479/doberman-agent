#!/usr/bin/env bash
# Build the community application images from this checkout.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "${SCRIPT_DIR}/lib/install-env.sh"
ENV_FILE="${DOBERMAN_AGENT_ENV_FILE:-${SCRIPT_DIR}/.env}"
[[ -f "$ENV_FILE" ]] || { echo 'Run bash docker/install.sh --prepare-only first.' >&2; exit 1; }
if docker compose version >/dev/null 2>&1; then COMPOSE=(docker compose);
else echo 'Source builds require Docker Compose V2.' >&2; exit 1; fi
case "$(docker info --format '{{.Architecture}}')" in
  x86_64|amd64) build_arch=amd64 ;;
  aarch64|arm64) build_arch=arm64 ;;
  *) echo 'The backend base supports amd64 and arm64 Docker engines.' >&2; exit 1 ;;
esac
base_image="$(env_get "$ENV_FILE" DOBERMAN_AGENT_BACKEND_BASE_IMAGE)"
[[ -n "$base_image" ]] || { echo 'Set DOBERMAN_AGENT_BACKEND_BASE_IMAGE in docker/.env.' >&2; exit 1; }
docker build --file "${SCRIPT_DIR}/../src/backend/base.Dockerfile" \
  --build-arg "PANDOC_ARCH=$build_arch" --tag "$base_image" "${SCRIPT_DIR}/../src/backend"
"${COMPOSE[@]}" --env-file "$ENV_FILE" -f "${SCRIPT_DIR}/docker-compose.yml" \
  -f "${SCRIPT_DIR}/docker-compose.build.yml" build "$@"
