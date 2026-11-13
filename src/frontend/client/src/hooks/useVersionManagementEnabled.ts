import { useRecoilValue } from "recoil";
import { dobermanAgentConfState } from "~/pages/appChat/store/atoms";

// Returns true when the knowledge version management feature flag is enabled
// in the server-side DobermanAgentConfig. Falls back to false when config is not yet
// loaded or the key is absent.
export function useVersionManagementEnabled(): boolean {
  const conf = useRecoilValue(dobermanAgentConfState);
  return conf?.knowledges?.version_management?.enabled ?? false;
}

export function usePersonalTokenEnabled(): boolean {
  const conf = useRecoilValue(dobermanAgentConfState);
  return conf?.personal_token_enabled ?? false;
}
