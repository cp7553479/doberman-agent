import { TextViewer as SharedTextViewer } from '@doberman-agent/file-viewers/text';
import { usePreviewLocale } from '@doberman-agent/file-viewers/locale';
interface TextViewerProps { fileUrl: string; zoomLevel: number }
export function TextViewer({ fileUrl, zoomLevel }: TextViewerProps) {
  const locale = usePreviewLocale();
  const url = fileUrl;
  return <SharedTextViewer resource={{ originalUrl: url, previewUrl: url }} zoomLevel={zoomLevel} locale={locale} />;
}
