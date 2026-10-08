import { act, render, screen } from '@testing-library/react';
import { App } from '../../src/app/App';
import { AppProvider, type AppDeps } from '../../src/app/state';
import { SheetProvider } from '../../src/components/C6-sheet/SheetHost';
import { ToastProvider } from '../../src/components/C7-thong-bao/ToastHost';
import { FixtureSource, SafeStorage, type DataSource } from '../../src/data';
import type { ReactNode } from 'react';

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
