"""Replace Column(JSON) with Column(JsonType) across model and migration files."""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent

MODEL_FILES = [
    "doberman_agent/citation/domain/models/message_citation.py",
    "doberman_agent/database/models/flow_version.py",
    "doberman_agent/database/models/evaluation.py",
    "doberman_agent/database/models/assistant.py",
    "doberman_agent/database/models/session.py",
    "doberman_agent/database/models/role.py",
    "doberman_agent/database/models/message.py",
    "doberman_agent/database/models/flow.py",
    "doberman_agent/database/models/tenant.py",
    "doberman_agent/database/models/template.py",
    "doberman_agent/database/models/audit_log.py",
    "doberman_agent/llm/domain/models/llm_server.py",
    "doberman_agent/message/domain/models/inbox_message.py",
    "doberman_agent/finetune/domain/models/finetune.py",
    "doberman_agent/channel/domain/models/channel.py",
    "doberman_agent/knowledge/domain/models/knowledge_file.py",
    "doberman_agent/knowledge/domain/models/knowledge.py",
    "doberman_agent/tool/domain/models/gpts_tools.py",
    "doberman_agent/approval/domain/models/approval_request.py",
]

MIGRATION_FILES = [
    "doberman_agent/core/database/alembic/versions/v2_3_0_beta1_9ba42685e830.py",
    "doberman_agent/core/database/alembic/versions/v2_5_0_f001_multi_tenant.py",
    "doberman_agent/core/database/alembic/versions/v2_5_0_f005_role_menu_quota.py",
    "doberman_agent/core/database/alembic/versions/v2_5_0_f009_org_sync.py",
    "doberman_agent/core/database/alembic/versions/v2_5_1_f011_tenant_tree.py",
    "doberman_agent/core/database/alembic/versions/v2_5_1_f022_approval_request.py",
]

IMPORT_LINE = "from doberman_agent.core.database.dialect_helpers import JsonType"


def _add_jsontype_import(content: str) -> str:
    """Insert JsonType import, merging with existing dialect_helpers import if present."""
    if "from doberman_agent.core.database.dialect_helpers import" in content:
        def merge(m: re.Match) -> str:
            existing = m.group(1)
            names = {n.strip() for n in existing.split(",")} | {"JsonType"}
            return "from doberman_agent.core.database.dialect_helpers import " + ", ".join(sorted(names))
        return re.sub(
            r"from doberman_agent\.core\.database\.dialect_helpers import ([^\n]+)",
            merge,
            content,
        )
    # Insert before first revision variable or first def
    marker = re.search(r"^(revision\s*[=:]|def\s)", content, re.MULTILINE)
    if marker:
        pos = marker.start()
        return content[:pos] + IMPORT_LINE + "\n\n" + content[pos:]
    return content + "\n" + IMPORT_LINE + "\n"


def _remove_json_from_import(content: str, source: str) -> str:
    """Remove JSON from a specific import source (sqlmodel or sqlalchemy)."""
    pattern = rf"(from {re.escape(source)} import )([^\n]+)"

    def replacer(m: re.Match) -> str:
        prefix = m.group(1)
        names = [n.strip() for n in m.group(2).split(",")]
        names = [n for n in names if n != "JSON"]
        if not names:
            return ""
        return prefix + ", ".join(names)

    result = re.sub(pattern, replacer, content)
    # Clean up empty lines left by removing entire import line
    result = re.sub(r"\n\n\n+", "\n\n", result)
    return result


def transform_model(filepath: str) -> str:
    path = ROOT / filepath
    content = path.read_text()
    original = content

    # Determine where JSON is imported from
    if re.search(r"from sqlmodel import[^\n]*\bJSON\b", content):
        content = _remove_json_from_import(content, "sqlmodel")
    if re.search(r"from sqlalchemy import[^\n]*\bJSON\b", content):
        content = _remove_json_from_import(content, "sqlalchemy")

    # Add JsonType import
    content = _add_jsontype_import(content)

    # Replace Column(JSON with Column(JsonType (handles Column(JSON, and Column(JSON))
    content = re.sub(r"\bColumn\(JSON\b", "Column(JsonType", content)

    if content != original:
        path.write_text(content)
        return f"  CHANGED: {path.name}"
    return f"  unchanged: {path.name}"


def transform_migration(filepath: str) -> str:
    path = ROOT / filepath
    content = path.read_text()
    original = content

    if "sa.JSON" not in content and "Column(JSON" not in content:
        return f"  unchanged: {path.name}"

    # Add JsonType import
    content = _add_jsontype_import(content)

    # Replace sa.JSON() and sa.JSON (with trailing comma/space/paren)
    content = re.sub(r"\bsa\.JSON\(\)", "JsonType", content)
    content = re.sub(r"\bsa\.JSON\b", "JsonType", content)

    if content != original:
        path.write_text(content)
        return f"  CHANGED: {path.name}"
    return f"  unchanged: {path.name}"


if __name__ == "__main__":
    print("=== Model files ===")
    for f in MODEL_FILES:
        print(transform_model(f))

    print("\n=== Migration files ===")
    for f in MIGRATION_FILES:
        print(transform_migration(f))

    print("\nDone.")
