// @spec C6-01, C6-02, C6-03, C6-04, APP-11
// Một nơi duy nhất hiển thị sheet: mở sheet mới thì sheet đang mở đóng trước (APP-11).
import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { X } from '@phosphor-icons/react';
import './sheet.css';

export interface SheetSpec {
  title: string;
  /** confirm: không đóng khi chạm lớp nền (C6-02). */
  kind?: 'normal' | 'confirm';
  body: (close: () => void) => ReactNode;
  /** Hành động chính đứng yên ở đáy (C6-04). */
  footer?: (close: () => void) => ReactNode;
  onClose?: () => void;
}

interface SheetApi {
  open: (spec: SheetSpec) => void;
  close: () => void;
  isOpen: boolean;
}

const Ctx = createContext<SheetApi | null>(null);

export function useSheet(): SheetApi {
  const v = useContext(Ctx);
  if (!v) throw new Error('useSheet ngoài SheetProvider');
  return v;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export function SheetProvider({ children }: { children: ReactNode }) {
  const [spec, setSpec] = useState<(SheetSpec & { n: number }) | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const specRef = useRef(spec);
  specRef.current = spec;

  const close = useCallback(() => {
    const cur = specRef.current;
    if (!cur) return;
    setSpec(null);
    cur.onClose?.();
    const el = opener.current;
    opener.current = null;
    if (el && document.contains(el)) window.setTimeout(() => el.focus(), 0);
  }, []);

  const open = useCallback(
    (s: SheetSpec) => {
      if (specRef.current) {
        // Đóng sheet đang mở trước, giữ phần tử đã mở ban đầu.
        specRef.current.onClose?.();
      } else {
        opener.current = document.activeElement as HTMLElement | null;
      }
      setSpec({ ...s, n: Date.now() });
    },
    [],
  );

  return (
    <Ctx.Provider value={{ open, close, isOpen: spec !== null }}>
      {children}
      {spec && <SheetView key={spec.n} spec={spec} close={close} />}
    </Ctx.Provider>
  );
}

function SheetView({ spec, close }: { spec: SheetSpec; close: () => void }) {
  const titleId = useId();
  const panel = useRef<HTMLDivElement>(null);
  const drag = useRef<{ y: number; dy: number } | null>(null);
  const [dy, setDy] = useState(0);

  useEffect(() => {
    const first = panel.current?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        close();
        return;
      }
      if (e.key === 'Tab' && panel.current) {
        const els = [...panel.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((x) => x.offsetParent !== null || x === document.activeElement);
        if (els.length === 0) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && (document.activeElement === first || !panel.current.contains(document.activeElement))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !panel.current.contains(document.activeElement))) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    // capture để Esc của sheet chạy trước phím tắt của trang.
    window.addEventListener('keydown', on, true);
    return () => window.removeEventListener('keydown', on, true);
  }, [close]);

  return (
    <div className="sheet-layer">
      <div
        className="sheet-scrim"
        data-testid="sheet-scrim"
        onClick={() => {
          if (spec.kind !== 'confirm') close();
        }}
      />
      <div
        ref={panel}
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={dy ? { transform: `translateY(${dy}px)` } : undefined}
      >
        <div
          className="sheet__handle"
          aria-hidden="true"
          onPointerDown={(e) => {
            drag.current = { y: e.clientY, dy: 0 };
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!drag.current) return;
            drag.current.dy = Math.max(0, e.clientY - drag.current.y);
            setDy(drag.current.dy);
          }}
          onPointerUp={() => {
            const d = drag.current?.dy ?? 0;
            drag.current = null;
            setDy(0);
            if (d > 80) close();
          }}
        />
        <header className="sheet__head">
          <h2 id={titleId} className="t-lg sheet__title">
            {spec.title}
          </h2>
          <button type="button" className="sheet__close" aria-label="Đóng" onClick={close}>
            <X size={24} aria-hidden />
          </button>
        </header>
        <div className="sheet__body">{spec.body(close)}</div>
        {spec.footer && <footer className="sheet__foot">{spec.footer(close)}</footer>}
      </div>
    </div>
  );
}
