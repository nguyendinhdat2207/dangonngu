// @spec APP-02, APP-06, APP-12, S8-01
import { ArrowLeft, CaretDown, GearSix } from '@phosphor-icons/react';
import { packInfo } from '../data';
import { HostBack } from './HostBack';
import { backFromSettings, href } from './router';
import { useApp } from './state';
import { useLanguageSheet } from './useLanguageSheet';

/** Thanh trên cùng: nút về trang học chính (APP-12), tên ngôn ngữ, nút Cài đặt. Ở S8 Cài đặt, nút Quay lại thay cho cả nhóm bên trái (S8). */
export function TopBar({ settings = false }: { settings?: boolean }) {
  const { language, pack } = useApp();
  const openLanguageSheet = useLanguageSheet();
  if (settings) {
    return (
      <header className="topbar">
        <button type="button" className="topbar__back" onClick={backFromSettings}>
          <ArrowLeft size={24} aria-hidden />
          <span className="t-body">Quay lại</span>
        </button>
      </header>
    );
  }
  return (
    <header className="topbar">
      <div className="topbar__start">
        <HostBack />
        <button type="button" className="topbar__lang" onClick={openLanguageSheet} aria-haspopup="dialog">
          <span className="topbar__lang-text">
            <span className="topbar__lang-name t-body">
              {language?.name ?? 'Chọn ngôn ngữ'}
              <CaretDown size={16} aria-hidden />
            </span>
            {language && language.packs.length > 1 && pack && <span className="t-sm muted">{packInfo(pack).name}</span>}
          </span>
        </button>
      </div>
      <a className="topbar__settings" href={href('cai-dat')} aria-label="Cài đặt">
        <GearSix size={24} aria-hidden />
      </a>
    </header>
  );
}
