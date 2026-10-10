// @spec S1-02, S1-03, APP-06
// Dòng ngôn ngữ dùng chung cho S1 và sheet Đổi ngôn ngữ.
import { CaretRight, Check } from '@phosphor-icons/react';
import { formatCount, packInfo, type CatalogLanguage, type PackId } from '../data';

export function LangRowText({ lang }: { lang: CatalogLanguage }) {
  return (
    <span className="lang-row__text">
      <span className="lang-row__name t-body">{lang.name}</span>
      {lang.nativeName && (
        <span className="lang-row__native t-sm muted src" lang={lang.id}>
          {lang.nativeName}
        </span>
      )}
    </span>
  );
}

/** Danh sách cho sheet Đổi ngôn ngữ: ngôn ngữ nhiều bộ tách thành một dòng cho mỗi bộ. */
export function SwitchList({
  languages,
  current,
  busy,
  onPick,
}: {
  languages: CatalogLanguage[];
  current?: { lang: string; pack?: PackId };
  busy?: string | null;
  onPick: (lang: string, pack: PackId) => void;
}) {
  const rows = languages.flatMap((l) => l.packs.map((p) => ({ l, p, multi: l.packs.length > 1 })));
  return (
    <ul className="lang-list">
      {rows.map(({ l, p, multi }) => {
        const key = `${p}.${l.id}`;
        const active = current?.lang === l.id && current?.pack === p;
        return (
          <li key={key}>
            <button
              type="button"
              className="lang-row"
              aria-current={active ? 'true' : undefined}
              aria-disabled={(busy && busy !== key) || undefined}
              aria-busy={busy === key || undefined}
              onClick={() => !busy && !active && onPick(l.id, p)}
            >
              <span className="lang-row__text">
                <span className="lang-row__name t-body">
                  {l.name}
                  {multi ? `, ${packInfo(p).name}` : ''}
                </span>
                {l.nativeName && (
                  <span className="lang-row__native t-sm muted src" lang={l.id}>
                    {l.nativeName}
                  </span>
                )}
              </span>
              {busy === key ? (
                <span className="lang-row__spinner" aria-label="Đang tải" />
              ) : active ? (
                <Check size={24} aria-label="Đang học" />
              ) : !multi && l.count ? (
                <span className="t-sm muted num">{formatCount(l.count)}</span>
              ) : (
                <CaretRight size={24} aria-hidden className="muted" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
