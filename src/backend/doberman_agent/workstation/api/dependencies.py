from fastapi import Depends

from doberman_agent.common.dependencies.user_deps import UserPayload
from doberman_agent.share_link.api.dependencies import header_share_token_parser
from doberman_agent.share_link.domain.models.share_link import ShareLink

LoginUserDep = Depends(UserPayload.get_login_user)
AdminUserDep = Depends(UserPayload.get_admin_user)
ShareLinkDep = Depends(header_share_token_parser)

__all__ = ['LoginUserDep', 'AdminUserDep', 'ShareLink', 'ShareLinkDep', 'UserPayload']
