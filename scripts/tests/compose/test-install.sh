#!/usr/bin/env bash
# Exercise installer command boundaries without a Docker daemon.
set -euo pipefail
umask 077
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../docker" && pwd)"
source "${SCRIPT_DIR}/lib/install-env.sh"
TEST_ROOT="$(mktemp -d "${TMPDIR:-/tmp}/doberman-agent-install-tests.XXXXXX")"
trap 'rm -rf -- "$TEST_ROOT"' EXIT
fail() { printf 'FAIL: %s\n' "$*" >&2; exit 1; }
contains() { grep -Fq -- "$2" "$1" || fail "Missing expected text: $2"; }
absent() { ! grep -Fq -- "$2" "$1" || fail "Unexpected text: $2"; }
new_case() {
  CASE_ROOT="$(mktemp -d "${TEST_ROOT}/case.XXXXXX")"
  CASE_DIR="${CASE_ROOT}/docker"
  mkdir -p "$CASE_DIR" "${CASE_ROOT}/bin"
  for item in install.sh build.sh .env.example docker-compose.yml docker-compose.build.yml docker-compose.gateway.yml lib gateway nginx; do
    cp -R "${SCRIPT_DIR}/${item}" "$CASE_DIR/"
  done
  printf 'fixture-license\n' > "${CASE_ROOT}/license"
  cat > "${CASE_ROOT}/bin/docker" <<'DOCKER'
#!/usr/bin/env bash
set -euo pipefail
printf '%s\t' "$@" >> "$INSTALL_TEST_LOG"; printf '\n' >> "$INSTALL_TEST_LOG"
if [[ "${1:-}" = info ]]; then printf 'amd64\n'; fi
if [[ "${1:-}" = login ]]; then
  IFS= read -r supplied_password
  [[ "$supplied_password" = 'test-password$literal' ]] || exit 18
  [[ "${INSTALL_TEST_FAIL:-}" != login ]] || exit 19
fi
if [[ "${INSTALL_TEST_FAIL:-}" = build && "${1:-}" = build ]]; then exit 17; fi
if [[ "${INSTALL_TEST_FAIL:-}" = pull && " $* " = *' pull '* ]]; then exit 17; fi
DOCKER
  chmod +x "${CASE_ROOT}/bin/docker"
}
run_install() {
  : > "${CASE_ROOT}/calls"
  if PATH="${CASE_ROOT}/bin:$PATH" INSTALL_TEST_LOG="${CASE_ROOT}/calls" \
    INSTALL_TEST_FAIL="${TEST_FAIL:-}" /bin/bash "${CASE_DIR}/install.sh" "$@" \
    </dev/null >"${CASE_ROOT}/out" 2>"${CASE_ROOT}/err"; then result=0; else result=$?; fi
}
ok() { [[ $result = 0 ]] || { cat "${CASE_ROOT}/err" >&2; fail 'Installer failed'; }; }
failed() { [[ $result != 0 ]] || fail 'Installer should have failed'; }

new_case
run_install --prepare-only
ok
cmp "${SCRIPT_DIR}/.env.example" "${CASE_DIR}/.env" || fail 'Template was rewritten'
absent "${CASE_ROOT}/calls" $'build\t'
absent "${CASE_ROOT}/calls" $'pull\t'
absent "${CASE_ROOT}/calls" $'up\t'
printf 'PASS: prepare-only validates without building or starting\n'
env_set "${CASE_DIR}/.env" MINIO_ROOT_PASSWORD existing-password
cp "${CASE_DIR}/.env" "${CASE_ROOT}/before"
run_install --prepare-only
ok
cmp "${CASE_DIR}/.env" "${CASE_ROOT}/before" || fail 'Existing configuration changed'
printf 'PASS: existing configuration is preserved\n'

new_case
run_install
ok
contains "${CASE_ROOT}/calls" 'base.Dockerfile'
contains "${CASE_ROOT}/calls" 'docker-compose.build.yml'
contains "${CASE_ROOT}/calls" $'pull\tmysql\topenfga\t'
contains "${CASE_ROOT}/calls" $'up\t-d\t--pull\tnever\t'
absent "${CASE_ROOT}/calls" $'login\t'
awk '/^build\t/ { base = NR } /build\t$/ { build = NR } /pull\tmysql/ { pull = NR } /up\t-d/ { up = NR } END { exit !(base && build > base && pull > build && up > pull) }' "${CASE_ROOT}/calls" || fail 'Wrong build/pull/start order'
printf 'PASS: community source build precedes middleware pull and start\n'

new_case
TEST_FAIL=build run_install
failed
absent "${CASE_ROOT}/calls" $'pull\t'
absent "${CASE_ROOT}/calls" $'up\t'
printf 'PASS: build failure leaves running services untouched\n'

new_case
TEST_FAIL=pull run_install
failed
absent "${CASE_ROOT}/calls" $'up\t'
printf 'PASS: middleware pull failure stops before service changes\n'

new_case
run_install --prepare-only
ok
env_set "${CASE_DIR}/.env" CR_REGISTRY_USERNAME test-user
env_set "${CASE_DIR}/.env" CR_REGISTRY_PASSWORD 'test-password$literal'
run_install
ok
contains "${CASE_ROOT}/calls" $'login\tcr.dataelem.com\t--username\ttest-user\t--password-stdin\t'
for output in calls out err; do absent "${CASE_ROOT}/$output" 'test-password$literal'; done
TEST_FAIL=login run_install
failed
absent "${CASE_ROOT}/calls" $'build\t'
printf 'PASS: mirror login is opt-in and keeps credentials out of arguments\n'

new_case
run_install --gateway --license-file "${CASE_ROOT}/license" --public-url https://example.invalid --prepare-only
failed
contains "${CASE_ROOT}/err" DOBERMAN_AGENT_GATEWAY_IMAGE
absent "${CASE_ROOT}/calls" $'up\t'
env_set "${CASE_DIR}/.env" DOBERMAN_AGENT_GATEWAY_IMAGE operator.invalid/gateway:test
run_install --gateway --license-file "${CASE_ROOT}/license" --public-url https://example.invalid --prepare-only
ok
contains "${CASE_ROOT}/calls" docker-compose.gateway.yml
[[ "$(env_get "${CASE_DIR}/.env" DOBERMAN_AGENT_PRO)" = true ]] || fail 'External gateway flag missing'
target="$(env_get "${CASE_DIR}/.env" DOBERMAN_AGENT_NGINX_CONF_DIR)"
contains "${target}/default.conf" 'proxy_pass http://gateway:8080;'
contains "${target}/websocket.conf" 'proxy_pass http://gateway:8080;'
contains "${target}/default.conf" 'proxy_pass http://minio:9000;'
run_install --no-gateway --prepare-only
ok
[[ "$(env_get "${CASE_DIR}/.env" DOBERMAN_AGENT_PRO)" = false ]] || fail 'External gateway flag retained'
absent "${CASE_ROOT}/calls" docker-compose.gateway.yml
printf 'PASS: gateway requires an explicit image and is isolated from community configuration\n'
