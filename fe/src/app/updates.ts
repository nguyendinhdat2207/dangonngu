// @spec APP-10
// Đăng ký service worker để mở lại được khi ngoại tuyến, và báo khi có bản mới.
// Service worker mới tự kích hoạt nhưng trang đang mở không tự tải lại: chỉ tải lại khi người dùng bấm "Cập nhật".
import { useEffect, useRef } from 'react';
import { useToast } from '../components/C7-thong-bao/ToastHost';
import type { RouteName } from './router';

let available = false;
const listeners = new Set<() => void>();

/** Báo có bản mới (gọi từ service worker hoặc từ test). */
export function signalUpdate() {
  available = true;
  listeners.forEach((l) => l());
}

export function resetUpdateSignal() {
  available = false;
}

/** Tải lại app. Bọc trong đối tượng để test thay được. */
export const appReload = {
  run: () => window.location.reload(),
};

type Container = Pick<ServiceWorkerContainer, 'register'> & { controller: unknown };

/**
 * Đăng ký service worker. `onFirstControl` chạy khi service worker vừa nhận quản lý trang lần đầu
 * (lần mở đầu tiên có mạng), để nạp lại dữ liệu đã tải vào bộ nhớ ngoại tuyến.
 */
export function registerServiceWorker(container: Container | undefined, opts: { url?: string; onFirstControl?: () => void } = {}) {
  if (!container) return;
  const hadController = Boolean(container.controller);
  container
    .register(opts.url ?? './sw.js')
    .then((reg) => {
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        if (!w) return;
        w.addEventListener('statechange', () => {
          if (w.state !== 'activated') return;
          if (hadController) signalUpdate();
          else opts.onFirstControl?.();
        });
      });
    })
    .catch(() => {
      // Không đăng ký được (trình duyệt chặn, iframe sandbox...): app vẫn chạy bình thường khi có mạng.
    });
}

const HIDDEN_ON: RouteName[] = ['phien-hoc', 'kiem-tra'];

/** Hiện thông báo "Có bản cập nhật", trừ khi đang ở S3 hoặc S5; khi đó đợi tới lúc rời màn. */
export function useUpdateNotice(route: RouteName | null) {
  const toast = useToast();
  const pending = useRef(false);
  /** Thông báo đang hiện tới lúc nào (C7-02: 6 giây khi có nút hành động). */
  const visibleUntil = useRef(0);
  const routeRef = useRef(route);
  routeRef.current = route;

  const show = () => {
    if (HIDDEN_ON.includes(routeRef.current as RouteName)) {
      pending.current = true;
      return;
    }
    pending.current = false;
    visibleUntil.current = Date.now() + 6000;
    toast.show({ id: 'cap-nhat', text: 'Có bản cập nhật', action: { label: 'Cập nhật', onClick: () => appReload.run() } });
  };
  const showRef = useRef(show);
  showRef.current = show;

  useEffect(() => {
    const l = () => showRef.current();
    listeners.add(l);
    if (available) l();
    return () => {
      listeners.delete(l);
    };
  }, []);

  useEffect(() => {
    if (HIDDEN_ON.includes(route as RouteName)) {
      // Vào S3 hoặc S5 khi thông báo còn hiện: ẩn đi và hiện lại khi rời màn.
      if (Date.now() < visibleUntil.current) {
        toast.hide('cap-nhat');
        visibleUntil.current = 0;
        pending.current = true;
      }
      return;
    }
    if (pending.current) showRef.current();
  }, [route]); // eslint-disable-line react-hooks/exhaustive-deps
}
