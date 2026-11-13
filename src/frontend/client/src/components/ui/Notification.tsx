/**
 * Notification lives in the shared component library (@doberman-agent/ui) — one
 * imperative API (`notification.success(...)`) plus a single always-mounted
 * container, per packages/ui/docs/组件-Notification通知提醒.md.
 *
 * `<Notification />` renders the container at the app root with the localized
 * copy the library cannot hold itself. Business code imports `{ notification }`
 * from '@doberman-agent/ui'.
 */
import { Notifier } from '@doberman-agent/ui';
import { useLocalize } from '~/hooks';

export { notification } from '@doberman-agent/ui';

export default function Notification() {
  const localize = useLocalize();
  return (
    <Notifier
      closeLabel={localize('com_ui_close_notification')}
      expandLabel={localize('com_ui_expand')}
    />
  );
}
