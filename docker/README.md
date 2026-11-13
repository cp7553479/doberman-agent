# doberman-agent deployment

Docker Compose V2 builds the community application images from this checkout:

```bash
bash docker/install.sh --prepare-only
# Edit docker/.env, including credentials and any infrastructure mirror addresses.
bash docker/install.sh
```

The installer builds the backend base, backend, frontend and code sandbox before starting services. Application tags in `.env.example` are local build outputs, not published registry images. `bash docker/build.sh` rebuilds them without starting the stack. The backend base uses the Docker engine architecture for its Pandoc download. Build and image availability still need verification on the target Docker host.

Infrastructure image names retain their published identities. Defaults use the existing infrastructure mirror; configure `CR_REGISTRY_USERNAME` and `CR_REGISTRY_PASSWORD` only if that mirror requires authentication, or select another complete image reference. External models and document parsing services need their own configuration. Persistent directories are under `docker/` by default; `DOCKER_VOLUME_DIRECTORY` changes their location.

The commercial Java gateway source is absent from this repository. Community traffic goes directly from Nginx to FastAPI. The optional `docker-compose.gateway.yml` requires an explicitly supplied `DOBERMAN_AGENT_GATEWAY_IMAGE` implementing the renamed configuration contract, a license and its own verification. Existing proprietary binaries are not claimed to support that contract. To configure a compatible external image:

```bash
bash docker/install.sh --gateway --license-file /secure/license.txt --public-url https://platform.example
```

The application factory runtime is optional. Set its secrets and backend configuration, then enable `COMPOSE_PROFILES=app-runtime` before building/installing. `scripts/build_runtime_images.sh` produces the immutable runtime/preparer/helper images and catalogs; see [runtime operations](../src/runtime-manager/OPERATIONS.md). Those catalogs must be generated from actual built images, not renamed upstream digests.

Check readiness with `docker compose --env-file docker/.env -f docker/docker-compose.yml ps` and service logs. Default platform entry: `http://localhost:3001`. Helm users must build, load or publish the local images and configure reachable image references; see [Helm deployment](helm/README.md). Office remains optional in `docker-compose-office.yml`.
