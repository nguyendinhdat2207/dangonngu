// @spec APP-02, APP-06
import { CaretDown, GearSix } from '@phosphor-icons/react';
import { packInfo } from '../data';
import { href } from './router';
import { useApp } from './state';
import { useLanguageSheet } from './useLanguageSheet';

export function TopBar() {
  const { language, pack } = useApp();
  const openLanguageSheet = useLanguageSheet();
  return (
    <header className="topbar">
      <button type="button" className="topbar__lang" onClick={openLanguageSheet} aria-haspopup="dialog">
        <span className="topbar__lang-text">
          <span className="topbar__lang-name t-body">
            {language?.name ?? 'Chọn ngôn ngữ'}
            <CaretDown size={16} aria-hidden />
          </span>
          {language && language.packs.length > 1 && pack && <span className="t-sm muted">{packInfo(pack).name}</span>}
        </span>
      </button>
      <a className="topbar__settings" href={href('cai-dat')} aria-label="Cài đặt">
        <GearSix size={24} aria-hidden />
      </a>
    </header>
  );
}
