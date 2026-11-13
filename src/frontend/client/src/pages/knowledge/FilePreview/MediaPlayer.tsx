import { MediaPlayer as SharedMediaPlayer, type MediaPlayerProps as SharedMediaPlayerProps } from '@doberman-agent/file-viewers/media-player';
import { usePreviewLocale } from '@doberman-agent/file-viewers/locale';
interface MediaPlayerProps extends Omit<SharedMediaPlayerProps, 'labels' | 'selectLabels'> { src: string }
export function MediaPlayer(props: MediaPlayerProps) {
  const locale = usePreviewLocale();
  return <SharedMediaPlayer {...props} labels={locale.media} selectLabels={locale.select} />;
}
