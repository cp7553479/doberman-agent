/**
 * Input has moved to the shared component library (@doberman-agent/ui) — spec:
 * 组件-Input输入框.md (32px medium default, gray focus chain, className lands on
 * the SHELL, `inputClassName` on the <input>). This re-export keeps every
 * existing `~/components/ui/Input` / barrel call site working unchanged.
 * New code may import from '@doberman-agent/ui' directly.
 */
export { Input, SearchInput, PasswordInput } from '@doberman-agent/ui';
export type { InputProps, SearchInputProps, PasswordInputProps } from '@doberman-agent/ui';
