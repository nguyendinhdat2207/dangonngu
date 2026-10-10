// @spec S8-05, DATA-06
// Xuất và nhập tiến độ của một cặp (bộ nội dung, ngôn ngữ) dưới dạng file JSON.
import type { Progress, Settings } from './progress';
import type { PackId } from './types';

export interface ProgressFile {
  app: 'vitasr2';
  kind: 'tien-do';
  pack: PackId;
  lang: string;
  exportedAt: string;
  settings: Settings;
  progress: Progress;
}

const two = (n: number) => String(n).padStart(2, '0');

/** `vitasr-tien-do-[mã ngôn ngữ]-[yyyy-mm-dd].json`, ngày theo giờ của máy. */
export function exportFileName(lang: string, now: number): string {
  const d = new Date(now);
  return `vitasr-tien-do-${lang}-${d.getFullYear()}-${two(d.getMonth() + 1)}-${two(d.getDate())}.json`;
}

export function makeExport(pack: PackId, lang: string, settings: Settings, progress: Progress, now: number): ProgressFile {
  return { app: 'vitasr2', kind: 'tien-do', pack, lang, exportedAt: new Date(now).toISOString(), settings, progress };
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isStr = (v: unknown): v is string => typeof v === 'string';
const oneOf = (v: unknown, list: readonly string[]) => isStr(v) && list.includes(v);

const NGUON = ['lo-trinh', 'on-tap', 'tu-khoa', 'cau', 'kiem-tra'] as const;
const KIND = ['ghi-nho', 'trac-nghiem', 'nghe-chon', 'sap-xep'] as const;
const OUTCOME = ['nho', 'can-on', 'dung', 'sai'] as const;

function validProgress(v: unknown): v is Progress {
  if (!isObj(v) || v.schema !== 1 || !Array.isArray(v.sessions) || !Array.isArray(v.attempts) || !isObj(v.items)) return false;
  const sessionsOk = v.sessions.every(
    (s) =>
      isObj(s) &&
      isStr(s.id) &&
      oneOf(s.nguon, NGUON) &&
      Array.isArray(s.itemIds) &&
      s.itemIds.every(isNum) &&
      isNum(s.startedAt) &&
      (s.completedAt === undefined || isNum(s.completedAt)) &&
      isNum(s.position),
  );
  const attemptsOk = v.attempts.every(
    (a) => isObj(a) && isStr(a.sessionId) && isNum(a.itemId) && isNum(a.at) && oneOf(a.kind, KIND) && oneOf(a.outcome, OUTCOME) && typeof a.hinted === 'boolean',
  );
  const itemsOk = Object.entries(v.items).every(
    ([id, s]) => /^\d+$/.test(id) && isObj(s) && oneOf(s.status, ['da-hoc', 'kiem-tra']) && isNum(s.streak) && s.streak >= 0 && isNum(s.due) && isNum(s.lastAt),
  );
  return sessionsOk && attemptsOk && itemsOk;
}

/**
 * Đọc file nhập. Trả về tiến độ khi file đúng cấu trúc DATA-06 và đúng cặp (bộ, ngôn ngữ) đang học;
 * ngược lại trả về null và không thay đổi gì.
 */
export function parseImport(text: string, pack: PackId, lang: string): Progress | null {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return null;
  }
  if (!isObj(raw) || raw.app !== 'vitasr2' || raw.kind !== 'tien-do' || raw.lang !== lang || raw.pack !== pack) return null;
  return validProgress(raw.progress) ? raw.progress : null;
}
