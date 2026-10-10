import { act, render, screen } from '@testing-library/react';
import { App } from '../../src/app/App';
import { AppProvider, type AppDeps } from '../../src/app/state';
import { SheetProvider } from '../../src/components/C6-sheet/SheetHost';
import { ToastProvider } from '../../src/components/C7-thong-bao/ToastHost';
import { FixtureSource, SafeStorage, type DataSource } from '../../src/data';
import type { ReactNode } from 'react';
import { vi } from 'vitest';
import progress30 from '../../fixtures/progress/fluency-en-30-ngay.json';
import soLieu30 from '../../fixtures/progress/fluency-en-30-ngay.so-lieu.json';

/** Tiến độ mẫu 30 ngày (DATA-09) và số liệu tính tay đi kèm. */
export const PROGRESS_30 = progress30;
export const SO_LIEU_30 = soLieu30;
export const progressSeed = (p: unknown = progress30, pack = 'fluency', lang = 'en') => ({ [`vitasr2.progress.${pack}.${lang}`]: p });

/** speechSynthesis giả với danh sách giọng cho trước. */
export function fakeSpeech(voices: { lang: string; voiceURI: string; name: string; default?: boolean }[]) {
  const synth = {
    speak: vi.fn(),
    cancel: vi.fn(),
    getVoices: () => voices,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
  class Utter {
    text: string;
    lang = '';
    rate = 1;
    voice: unknown = null;
    onend: (() => void) | null = null;
    onerror: (() => void) | null = null;
    constructor(t: string) {
      this.text = t;
    }
  }
  (window as unknown as Record<string, unknown>).speechSynthesis = synth;
  (globalThis as unknown as Record<string, unknown>).SpeechSynthesisUtterance = Utter;
  return synth;
}

export function removeFakeSpeech() {
  delete (window as unknown as Record<string, unknown>).speechSynthesis;
  delete (globalThis as unknown as Record<string, unknown>).SpeechSynthesisUtterance;
}

export const NOW = new Date(2026, 9, 8, 10, 0, 0).getTime();

export function memoryBackend(seed: Record<string, unknown> = {}) {
  const mem = new Map<string, string>(Object.entries(seed).map(([k, v]) => [k, typeof v === 'string' ? v : JSON.stringify(v)]));
  const backend = {
    getItem: (k: string) => (mem.has(k) ? mem.get(k)! : null),
    setItem: (k: string, v: string) => void mem.set(k, String(v)),
    removeItem: (k: string) => void mem.delete(k),
    key: (i: number) => [...mem.keys()][i] ?? null,
    get length() {
      return mem.size;
    },
    clear: () => mem.clear(),
  } as unknown as Storage;
  return { mem, backend };
}

export function makeDeps(opts: { seed?: Record<string, unknown>; source?: DataSource; now?: () => number; backend?: Storage | null } = {}) {
  const { mem, backend } = memoryBackend(opts.seed);
  const deps: AppDeps = {
    source: opts.source ?? new FixtureSource(),
    storage: new SafeStorage(opts.backend === undefined ? backend : opts.backend),
    now: opts.now ?? (() => NOW),
  };
  return { deps, mem };
}

export function settingsSeed(extra: Record<string, unknown> = {}) {
  return { 'vitasr2.settings': { schema: 1, packByLang: { en: 'fluency' }, lang: 'en', theme: 'system', voiceByLang: {}, rate: 1, weeklyGoal: 5, guideSeen: true, ...extra } };
}

export async function renderApp(hash: string, opts: Parameters<typeof makeDeps>[0] & { wait?: boolean } = {}) {
  window.history.replaceState(null, '', `/${hash}`);
  const made = makeDeps(opts);
  const utils = render(<App deps={made.deps} />);
  // Chờ dữ liệu fixture nạp xong (khung xương biến mất), tối đa khoảng 2 giây.
  for (let i = 0; i < 100; i++) {
    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });
    if (opts.wait === false) break;
    if (!utils.container.querySelector('.skeleton, .s3[aria-busy="true"]')) break;
  }
  await act(async () => {
    await new Promise((r) => setTimeout(r, 0));
  });
  return { ...utils, ...made };
}

/** Bọc thành phần với các provider (không có Shell). */
export function withProviders(ui: ReactNode, opts: Parameters<typeof makeDeps>[0] = {}) {
  const made = makeDeps(opts);
  return {
    ...render(
      <AppProvider deps={made.deps}>
        <ToastProvider>
          <SheetProvider>{ui}</SheetProvider>
        </ToastProvider>
      </AppProvider>,
    ),
    ...made,
  };
}

export const hash = () => window.location.hash;

export async function settle(ms = 0) {
  await act(async () => {
    await new Promise((r) => setTimeout(r, ms));
  });
}

export { screen };

/** Nguồn tĩnh đọc bộ dữ liệu đầy đủ trong fe/public/data (dùng khi cần nhiều câu, ví dụ phân trang). */
export async function publicSource(): Promise<DataSource> {
  const { readFileSync } = await import('node:fs');
  const path = await import('node:path');
  const { StaticFileSource } = await import('../../src/data');
  const root = path.resolve(process.cwd(), 'fe/public');
  const fetchImpl = (async (url: string) => {
    try {
      return new Response(readFileSync(path.join(root, url.replace(/^\.\//, ''))), { status: 200 });
    } catch {
      return new Response('', { status: 404 });
    }
  }) as unknown as typeof fetch;
  return new StaticFileSource('./data', fetchImpl);
}

/** Các dialog đang mở. */
export const dialogs = () => document.querySelectorAll('[role="dialog"]');
