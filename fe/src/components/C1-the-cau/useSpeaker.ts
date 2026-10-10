// @spec C1-04, C1-05
import { useCallback, useEffect, useRef, useState } from 'react';
import { speak, stopSpeaking, voicesFor } from '../../app/speech';
import { useApp } from '../../app/state';

export type Playing = 'idle' | 'once' | 'loop';

/** Đọc câu gốc bằng giọng và tốc độ đã chọn. Đổi câu hoặc rời màn thì dừng ngay. */
export function useSpeaker(text: string, lang: string, locale?: string) {
  const { settings, voices, voicesReady } = useApp();
  const [playing, setPlaying] = useState<Playing>('idle');
  const mode = useRef<Playing>('idle');
  const timer = useRef<number | undefined>(undefined);
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const hasVoice = supported && voicesFor(lang, voices).length > 0;
  const noVoice = voicesReady && !hasVoice;

  const stop = useCallback(() => {
    window.clearTimeout(timer.current);
    if (mode.current !== 'idle') stopSpeaking();
    mode.current = 'idle';
    setPlaying('idle');
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(timer.current);
      if (mode.current !== 'idle') stopSpeaking();
      mode.current = 'idle';
    };
  }, [text]);

  const start = (m: Exclude<Playing, 'idle'>) => {
    window.clearTimeout(timer.current);
    stopSpeaking();
    mode.current = m;
    setPlaying(m);
    const once = (): boolean =>
      speak({
        text,
        lang,
        locale,
        voiceURI: settings.voiceByLang[lang],
        rate: settings.rate,
        onEnd: () => {
          if (mode.current === 'loop') timer.current = window.setTimeout(once, 1500);
          else if (mode.current === 'once') {
            mode.current = 'idle';
            setPlaying('idle');
          }
        },
      });
    if (!once()) stop();
  };

  return {
    playing,
    noVoice,
    ready: voicesReady,
    toggle: (m: Exclude<Playing, 'idle'>) => (mode.current === m ? stop() : start(m)),
    stop,
  };
}
