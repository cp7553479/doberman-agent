// @ts-strict-ignore
/**
 * Button has moved to the shared component library (@doberman-agent/ui) — the first
 * component managed there and consumed by both apps. This re-export keeps every
 * existing `~/components/ui/Button` call site working unchanged.
 * New code may import from '@doberman-agent/ui' directly.
 */
export { Button, buttonVariants } from '@doberman-agent/ui';
export type { ButtonProps, ButtonStyleProps } from '@doberman-agent/ui';
