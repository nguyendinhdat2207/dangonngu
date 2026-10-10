// @spec T2-03, T3-02, T3-07, S5-03, S5-04, S8-02, S8-05
// Hook dùng chung cho các trang.
import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { speak } from './speech';
import { useApp } from './state';

/** Giá trị cập nhật sau khi ngừng thay đổi `ms` mili giây (T2-03, T3-02: 250 ms). */
export function useDebounced<T>(value: T, ms: number): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = window.setTimeout(() => setV(value), ms);
    return () => window.clearTimeout(t);
  }, [value, ms]);
  return v;
}

/** Khớp media query; trình duyệt không có matchMedia thì coi như không khớp. */
export function useMediaQuery(query: string): boolean {
  const get = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(query).matches;
  const [m, setM] = useState(get);
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const mq = window.matchMedia(query);
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener?.('change', on);
    return () => mq.removeEventListener?.('change', on);
  }, [query]);
  return m;
}

/** Kho trạng thái nhỏ để phần thân và phần đáy của một sheet dùng chung dữ liệu. */
export interface Store<T> {
  get: () => T;
  set: (patch: Partial<T>) => void;
  subscribe: (fn: () => void) => () => void;
}

export function createStore<T extends object>(init: T): Store<T> {
  let state = init;
  const subs = new Set<() => void>();
  return {
    get: () => state,
    set: (patch) => {
      state = { ...state, ...patch };
      subs.forEach((f) => f());
    },
    subscribe: (fn) => {
      subs.add(fn);
      return () => {
        subs.delete(fn);
      };
    },
  };
}

export function useStore<T extends object>(store: Store<T>): T {
  return useSyncExternalStore(store.subscribe, store.get, store.get);
}

/** Đọc một đoạn bằng giọng và tốc độ đã chọn cho ngôn ngữ đó. */
export function useSay() {
  const { settings } = useApp();
  return useCallback(
    (text: string, lang: string, locale?: string, voiceURI?: string) =>
      speak({ text, lang, locale, voiceURI: voiceURI ?? settings.voiceByLang[lang], rate: settings.rate }),
    [settings],
  );
}
