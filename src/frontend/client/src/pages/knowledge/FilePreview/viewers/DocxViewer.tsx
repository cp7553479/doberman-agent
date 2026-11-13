import { DocxViewer as SharedDocxViewer } from '@doberman-agent/file-viewers/docx';
import { usePreviewLocale } from '@doberman-agent/file-viewers/locale';
interface DocxViewerProps { fileUrl: string; zoomLevel: number }
export function DocxViewer({ fileUrl, zoomLevel }: DocxViewerProps) {
  const locale = usePreviewLocale();
  const url = fileUrl;
  return <SharedDocxViewer resource={{ originalUrl: url, previewUrl: url }} zoomLevel={zoomLevel} locale={locale} />;
}
