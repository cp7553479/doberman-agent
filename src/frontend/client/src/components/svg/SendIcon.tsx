import { Outlined } from '@doberman-agent/icons';
import { cn } from '~/utils';

// Thin wrapper around the @doberman-agent/icons ArrowUp so every send button shares the
// design-system icon. Keeps the original { size, className } API for callers.
export default function SendIcon({ size = 24, className = '' }) {
  return (
    <Outlined.ArrowUp
      size={size}
      className={cn('text-white dark:text-black', className)}
    />
  );
}
