#!/usr/bin/env node
// Tạo fixture cho test (DATA-09) từ bộ dữ liệu đầy đủ trong fe/public/data.
// Chạy lại được bất cứ lúc nào: node scripts/make-fixtures.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'fe/public/data');
const OUT = path.join(ROOT, 'fe/fixtures/data');
const read = (p) => JSON.parse(fs.readFileSync(path.join(SRC, p), 'utf8'));
const write = (p, v) => {
  fs.mkdirSync(path.dirname(path.join(OUT, p)), { recursive: true });
  fs.writeFileSync(path.join(OUT, p), JSON.stringify(v, null, 2) + '\n');
};
const num = (id) => Number(id);

function subset(pack, lang, unitNumbers, truncate = {}) {
  const file = read(`${pack}/${lang}.json`);
  const units = read(`${pack}/units-${lang}.json`);
  const picked = units.units.filter((u) => unitNumbers.includes(u.number)).map((u) => {
    const n = truncate[u.number];
    return n ? { ...u, ids: u.ids.slice(0, n), _fixtureNote: `cắt còn ${n} câu để thử unit thiếu câu` } : u;
  });
  const keep = new Set(picked.flatMap((u) => u.ids.map(num)));
  const items = file.items.filter((it) => keep.has(it.id));
  write(`${pack}/${lang}.json`, { ...file, itemCount: items.length, items, _fixtureNote: `tập con của ${pack}/${lang}.json` });
  write(`${pack}/units-${lang}.json`, { ...units, ...(units.unitCount ? { unitCount: picked.length } : {}), ...(units.itemCount ? { itemCount: items.length } : {}), units: picked });
  return items;
}

// English Fluency: unit 1 đến 3 đủ 8 câu, unit 4 cắt còn 5 câu; tiếng Nhật (furigana), Thái, Nga (chữ Kirin): unit 1.
const LANGS = ['en', 'ja', 'th', 'ru'];
const man = read('fluency/manifest.json');
write('fluency/manifest.json', { ...man, languages: man.languages.filter((l) => LANGS.includes(l.id)) });
const idx = read('fluency/source-index.json');
write('fluency/source-index.json', { ...idx, languageCount: LANGS.length, languages: idx.languages.filter((l) => LANGS.includes(l.languageId)) });
subset('fluency', 'en', [1, 2, 3, 4], { 4: 5 });
for (const l of ['ja', 'th', 'ru']) subset('fluency', l, [1]);

// Global English: unit 1, unit 2 (chủ đề khác) và unit chứa câu tiếng Anh dài nhất (trình độ khác).
const g = read('global/en.json');
const longest = g.items.reduce((a, b) => (b.en.length > a.en.length ? b : a));
const gUnits = read('global/units-en.json').units;
const longUnit = gUnits.find((u) => u.ids.includes(longest.id)).number;
write('global/manifest.json', read('global/manifest.json'));
const gi = subset('global', 'en', [...new Set([1, 2, longUnit])]);

console.log(`Fixture: fluency ${LANGS.join(', ')}; global unit 1, 2 và ${longUnit} (câu dài nhất ${longest.en.length} ký tự, id ${longest.id}); ${gi.length} câu Global.`);
