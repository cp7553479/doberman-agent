# DobermanAgent Helm charts

Two independent charts. The platform never talks to the Kubernetes API; the
worker calls the replica URLs in `sandbox.endpoints`.

| Chart | What it installs |
|-------|------------------|
| `doberman-agent-sandbox` | StatefulSet + **headless** Service `code-runner` |
| `doberman-agent` | frontend, backend API, Celery worker |

MySQL / Redis / MinIO / Elasticsearch / Milvus / OpenFGA are **not** in these
charts. Point `doberman-agent` values (and `files/config.yaml` hosts) at Services that
already exist.

## Install

```bash
# 1. Sandbox — keep the Service name code-runner (default fullnameOverride)
helm upgrade --install sandbox docker/helm/doberman-agent-sandbox \
  --namespace doberman-agent-sandbox --create-namespace \
  --set token.value="$SANDBOX_TOKEN"

# 2. Platform
helm upgrade --install doberman-agent docker/helm/doberman-agent \
  --namespace doberman-agent --create-namespace \
  --set sandbox.token="$SANDBOX_TOKEN" \
  --set sandbox.endpoints='{http://code-runner-0.code-runner.doberman-agent-sandbox.svc.cluster.local:8080,http://code-runner-1.code-runner.doberman-agent-sandbox.svc.cluster.local:8080}'
```

`SANDBOX_TOKEN` must be the same on both releases.

NetworkPolicy on the sandbox chart only allows TCP/8080 from pods in namespace
`doberman-agent` labeled `app.kubernetes.io/component=worker`, `backend` or `linsight`
(automatic `kubernetes.io/metadata.name` label). Change `networkPolicy.allowFrom`
if you use other names. Egress is allowed by default
(`networkPolicy.denyEgress: false`). Set it to `true` to block all outbound
traffic from the runner pods.

## Why not one ClusterIP for runners

`keep_session` sticks to a **hostname** (`http://code-runner-0.code-runner…`).
A ClusterIP / kube-proxy VIP would send the next `exec` to another Pod and
lose the working directory.

## Scale runners

```bash
helm upgrade sandbox docker/helm/doberman-agent-sandbox --reuse-values --set replicaCount=4
```

Then add each new Pod URL to the platform chart `sandbox.endpoints` and upgrade that release. Nothing scans DNS for new ordinals.

## Check

```bash
kubectl -n doberman-agent-sandbox get sts,svc,po
kubectl -n doberman-agent exec deploy/doberman-agent-worker -- \
  getent hosts code-runner-0.code-runner.doberman-agent-sandbox.svc.cluster.local
```

配置项与排障见
[沙箱部署说明](../../features/v3.0.0-beta1/068-code-execution-sandbox/沙箱部署说明.md)，
页面用法见
[沙箱使用说明](../../features/v3.0.0-beta1/068-code-execution-sandbox/沙箱使用说明.md)。

Application image defaults are local `:local` outputs. Run `bash docker/build.sh` first, then load those images into the cluster or publish them to your own registry and set every `image.repository` and `image.tag`. No prebuilt fork images are assumed.
