import { MarkdownViewer as SharedMarkdownViewer } from '@doberman-agent/file-viewers/markdown';
import { usePreviewLocale } from '@doberman-agent/file-viewers/locale';
import { resolveKnowledgePreviewUrl } from '../previewUrlUtils';
interface MarkdownViewerProps { fileUrl: string; zoomLevel: number }
export function MarkdownViewer({ fileUrl, zoomLevel }: MarkdownViewerProps) {
  const locale = usePreviewLocale();
  const url = resolveKnowledgePreviewUrl(fileUrl);
  return <SharedMarkdownViewer resource={{ originalUrl: url, previewUrl: url }} zoomLevel={zoomLevel} locale={locale} />;
}
