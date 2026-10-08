// @spec C7-01, C7-02, C7-03
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import './toast.css';

export interface ToastSpec {
  text: string;
  kind?: 'status' | 'alert';
  action?: { label: string; onClick: () => void };
}

const Ctx = createContext<{ show: (t: ToastSpec) => void; hide: () => void } | null>(null);

export function useToast() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useToast ngoài ToastProvider');
  return v;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<(ToastSpec & { n: number }) | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const hide = useCallback(() => {
    window.clearTimeout(timer.current);
    setToast(null);
  }, []);
  const show = useCallback((t: ToastSpec) => {
    window.clearTimeout(timer.current);
    setToast({ ...t, n: Date.now() });
    timer.current = window.setTimeout(() => setToast(null), t.action ? 6000 : 3000);
  }, []);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  return (
    <Ctx.Provider value={{ show, hide }}>
      {children}
      <div className="toast-region">
        {toast && (
          <div key={toast.n} className="toast" role={toast.kind === 'alert' ? 'alert' : 'status'}>
            <span className="toast__text">{toast.text}</span>
            {toast.action && (
              <button
                type="button"
                className="toast__action"
                onClick={() => {
                  toast.action!.onClick();
                  hide();
                }}
              >
                {toast.action.label}
              </button>
            )}
          </div>
        )}
      </div>
    </Ctx.Provider>
  );
}
