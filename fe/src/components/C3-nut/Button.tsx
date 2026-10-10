// @spec C3-01, C3-02, C3-04
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'text';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  variant?: ButtonVariant;
  /** Khóa: aria-disabled, không phát click (C3-04). */
  locked?: boolean;
  /** Đang xử lý: giữ chữ, thêm chỉ báo nhỏ, không nhận chạm. */
  busy?: boolean;
  icon?: ReactNode;
  /** Gợi ý phím tắt (hiện từ 900 px). */
  shortcut?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'secondary', locked, busy, icon, shortcut, className, onClick, children, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`btn btn--${variant} ${busy ? 'is-busy' : ''} ${className ?? ''}`}
      aria-disabled={locked || busy ? true : undefined}
      aria-busy={busy || undefined}
      onClick={(e) => {
        if (locked || busy) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      {...rest}
    >
      {icon}
      <span className="btn__label">{children}</span>
      {busy && <span className="btn__spinner" aria-hidden="true" />}
      {shortcut && <kbd className="btn__kbd t-sm" aria-hidden="true">{shortcut}</kbd>}
    </button>
  );
});
