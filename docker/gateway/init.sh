#!/usr/bin/env bash
# Runs inside the MySQL image; no host MySQL client is needed.
set -euo pipefail
: "${GATEWAY_DATABASE_PASSWORD:?Set DOBERMAN_AGENT_GATEWAY_DB_PASSWORD before enabling Gateway}"
mysql -h mysql -u root < /schema.sql
password=${GATEWAY_DATABASE_PASSWORD//\\/\\\\}
password=${password//\'/\'\'}
{
  printf "CREATE USER IF NOT EXISTS 'doberman_agent_gateway'@'%%' IDENTIFIED BY '%s';\n" "$password"
  printf "GRANT ALL PRIVILEGES ON doberman_agent_gateway.* TO 'doberman_agent_gateway'@'%%';\n"
} | mysql -h mysql -u root
