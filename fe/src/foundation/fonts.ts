// @spec FND-04
// Font tự host (QD-05). Lexend và Literata nạp sẵn; Noto chỉ nạp khi ngôn ngữ đang học cần.
import '@fontsource/lexend/latin-400.css';
import '@fontsource/lexend/latin-600.css';
import '@fontsource/lexend/latin-ext-400.css';
import '@fontsource/lexend/latin-ext-600.css';
import '@fontsource/lexend/vietnamese-400.css';
import '@fontsource/lexend/vietnamese-600.css';
import '@fontsource/literata/latin-400.css';
import '@fontsource/literata/latin-ext-400.css';
import '@fontsource/literata/vietnamese-400.css';

const loaders: Record<string, () => Promise<unknown>> = {
  ja: () => Promise.all([import('@fontsource/noto-sans-jp/400.css'), import('@fontsource/noto-sans-jp/600.css')]),
  zh: () => Promise.all([import('@fontsource/noto-sans-sc/400.css'), import('@fontsource/noto-sans-sc/600.css')]),
  ko: () => Promise.all([import('@fontsource/noto-sans-kr/400.css'), import('@fontsource/noto-sans-kr/600.css')]),
  th: () => Promise.all([import('@fontsource/noto-sans-thai/400.css'), import('@fontsource/noto-sans-thai/600.css')]),
  lo: () => Promise.all([import('@fontsource/noto-sans-lao/400.css'), import('@fontsource/noto-sans-lao/600.css')]),
  hi: () => Promise.all([import('@fontsource/noto-sans-devanagari/400.css'), import('@fontsource/noto-sans-devanagari/600.css')]),
  ta: () => Promise.all([import('@fontsource/noto-sans-tamil/400.css'), import('@fontsource/noto-sans-tamil/600.css')]),
  ru: () => Promise.all([import('@fontsource/noto-sans/cyrillic-400.css'), import('@fontsource/noto-sans/cyrillic-600.css')]),
};

const loaded = new Set<string>();

export function ensureScriptFont(lang: string): void {
  const load = loaders[lang];
  if (!load || loaded.has(lang)) return;
  loaded.add(lang);
  load().catch(() => loaded.delete(lang));
}
