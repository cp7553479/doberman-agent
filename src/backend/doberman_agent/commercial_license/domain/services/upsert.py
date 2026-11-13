from datetime import datetime

from loguru import logger

from doberman_agent.commercial_license.domain.mappers import LICENSE_CODES
from doberman_agent.commercial_license.domain.models.license_info import LicenseInfo
from doberman_agent.commercial_license.domain.repositories.license_info_repository import LicenseInfoRepository
from doberman_agent.common.errcode.commercial_license import CommercialLicenseInvalidPayloadError


def keep_previous_on_fetch_failure(code: str) -> None:
    logger.warning("license fetch failed; keeping previous row license_code={}", code)


async def upsert_mapped(repo: LicenseInfoRepository, mapped: dict) -> LicenseInfo:
    code = mapped.get("license_code")
    if code not in LICENSE_CODES:
        raise CommercialLicenseInvalidPayloadError(msg="Unsupported license_code")
    row = LicenseInfo(
        license_code=code,
        expire_date=mapped.get("expire_date"),
        days_remaining=mapped.get("days_remaining"),
        display_state=mapped["display_state"],
        source_status=mapped.get("source_status"),
        checked_at=datetime.now(),
        extra=mapped.get("extra") or {},
    )
    return await repo.upsert(row)
