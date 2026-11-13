import { ImageViewer as SharedImageViewer } from '@doberman-agent/file-viewers/image';
import { usePreviewLocale } from '@doberman-agent/file-viewers/locale';
interface ImageViewerProps { fileUrl: string; zoomLevel: number }
export function ImageViewer({ fileUrl, zoomLevel }: ImageViewerProps) {
  const locale = usePreviewLocale();
  const url = fileUrl;
  return <SharedImageViewer resource={{ originalUrl: url, previewUrl: url }} zoomLevel={zoomLevel} locale={locale} />;
}
