"""F053 — the platform's own distribution face for the ``doberman_agent`` CLI.

Two anonymous endpoints under ``/api/v1/dev-toolkit`` (design D10) hand out the
CLI installer and the version truth that the CLI compares itself against. The
artifacts they serve ship *inside this package* (``artifacts/``) because the
backend image's build context is only ``src/backend/`` — ``src/doberman-agent-cli/``
never reaches the image.
"""
