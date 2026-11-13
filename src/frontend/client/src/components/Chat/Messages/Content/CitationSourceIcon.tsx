import type { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { CitationSourceIcon as SharedSourceIcon } from '@doberman-agent/chat/citation-views';
export { CitationSourceIconStack,CitationFileTypeIcon } from '@doberman-agent/chat/citation-views';
export function CitationSourceIcon(props:Omit<ComponentProps<typeof SharedSourceIcon>,'localize'>){
 const {t}=useTranslation('shared');return <SharedSourceIcon {...props} localize={(key,options)=>String(t(key as never,options as never))}/>;
}
