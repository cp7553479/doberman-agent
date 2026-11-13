"""SSO realtime sync module (F014-sso-org-realtime-sync).

HMAC-authenticated endpoints that let the Gateway push SSO login events and
bulk department changes into doberman_agent in real time. Separate from
``doberman_agent.org_sync`` because F014 is the *push* direction (Gateway → doberman_agent,
HMAC-only, no JWT context) whereas ``org_sync`` is the *pull* direction
(doberman_agent → provider, admin-gated, Celery-scheduled).

See ``features/v2.5.1/014-sso-org-realtime-sync/spec.md``.
"""
