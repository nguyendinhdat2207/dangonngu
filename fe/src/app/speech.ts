// @spec C1-04, C1-05, S8-02
// Bọc speechSynthesis. Không có giọng đọc thì báo để giao diện khóa nút (C1-05).
import { useEffect, useState } from 'react';

const synth = (): SpeechSynthesis | null => (typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null);

const norm = (s: string) => s.replace('_', '-').toLowerCase();

export function voicesFor(lang: string, all: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  const l = norm(lang).split('-')[0];
  return all.filter((v) => norm(v.lang).split('-')[0] === l);
}

/** Danh sách giọng của thiết bị; `ready` sau khi trình duyệt đã nạp giọng (hoặc đã chờ đủ lâu). */
export function useVoices(): { voices: SpeechSynthesisVoice[]; ready: boolean } {
  const s = synth();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => s?.getVoices() ?? []);
  const [ready, setReady] = useState(() => !s || voices.length > 0);
  useEffect(() => {
    if (!s) return;
    const update = () => {
      const v = s.getVoices();
      setVoices(v);
      if (v.length > 0) setReady(true);
    };
    update();
    s.addEventListener?.('voiceschanged', update);
    const t = window.setTimeout(() => setReady(true), 1500);
    return () => {
      s.removeEventListener?.('voiceschanged', update);
      window.clearTimeout(t);
    };
  }, [s]);
  return { voices, ready };
}

export interface SpeakOptions {
  text: string;
  lang: string;
  locale?: string;
  voiceURI?: string;
  rate: number;
  onEnd?: () => void;
}

export function speak(o: SpeakOptions): boolean {
  const s = synth();
  if (!s || typeof SpeechSynthesisUtterance === 'undefined') return false;
  const u = new SpeechSynthesisUtterance(o.text);
  const candidates = voicesFor(o.lang, s.getVoices());
  // Không chọn giọng thì dùng giọng mặc định của thiết bị cho ngôn ngữ đó (S8-02).
  const voice = candidates.find((v) => v.voiceURI === o.voiceURI) ?? candidates.find((v) => v.default) ?? candidates[0];
  u.lang = voice?.lang ?? o.locale ?? o.lang;
  if (voice) u.voice = voice;
  u.rate = o.rate;
  u.onend = () => o.onEnd?.();
  u.onerror = () => o.onEnd?.();
  s.speak(u);
  return true;
}

export function stopSpeaking() {
  synth()?.cancel();
}

export const speechSupported = () => synth() !== null;
