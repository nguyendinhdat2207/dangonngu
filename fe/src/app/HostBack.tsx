// @spec APP-12, APP-09
// Nút về trang học chính. Trang học chính mở app ở trang mới (APP-09), nên đây là một liên kết thường,
// không dùng history.back(): lịch sử route hash của app nằm trước trang học chính, và tab mới không có trang trước.
import { ArrowLeft } from '@phosphor-icons/react';

/** Địa chỉ trang học chính, cấu hình lúc build bằng VITE_HOST_URL. */
export const HOST_URL = import.meta.env.VITE_HOST_URL || 'https://language.pomaskhoahocnaobo.com/';

export function HostBack({ className = '' }: { className?: string }) {
  return (
    <a className={`host-back ${className}`.trim()} href={HOST_URL} aria-label="Quay lại trang học">
      <ArrowLeft size={24} aria-hidden />
      <span className="host-back__text t-body" aria-hidden="true">
        Trang học
      </span>
    </a>
  );
}
