// @spec APP-04
// Điều hướng bằng hash (QD-02). Bảng route là nguồn chân lý ở APP-04.
import { useEffect, useState } from 'react';

export type RouteName = 'chon-ngon-ngu' | 'hoc' | 'luyen-tap' | 'thu-vien' | 'tien-bo' | 'cai-dat' | 'phien-hoc' | 'kiem-tra';

export const ROUTES: RouteName[] = ['chon-ngon-ngu', 'hoc', 'luyen-tap', 'thu-vien', 'tien-bo', 'cai-dat', 'phien-hoc', 'kiem-tra'];
export const TAB_ROUTES: RouteName[] = ['hoc', 'luyen-tap', 'thu-vien', 'tien-bo'];
export const FULLSCREEN_ROUTES: RouteName[] = ['chon-ngon-ngu', 'phien-hoc', 'kiem-tra'];

export interface Route {
  name: RouteName | null;
  params: Record<string, string>;
  raw: string;
}

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '');
  const [pathPart, query = ''] = raw.split('?');
  const seg = pathPart.replace(/^\//, '').replace(/\/$/, '');
  const name = (ROUTES as string[]).includes(seg) ? (seg as RouteName) : null;
  const params: Record<string, string> = {};
  new URLSearchParams(query).forEach((v, k) => (params[k] = v));
  return { name, params, raw };
}

export function href(name: RouteName, params?: Record<string, string | number | undefined>): string {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params ?? {})) if (v !== undefined && v !== '') q.set(k, String(v));
  const qs = q.toString();
  return `#/${name}${qs ? `?${qs}` : ''}`;
}

export function navigate(name: RouteName, params?: Record<string, string | number | undefined>, opts?: { replace?: boolean }) {
  const target = href(name, params);
  if (opts?.replace) {
    const url = new URL(window.location.href);
    url.hash = target;
    window.history.replaceState(window.history.state, '', url);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } else if (window.location.hash !== target) {
    window.location.hash = target;
  } else {
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
}

/** Màn chính gần nhất đã mở (để "về màn trước"). */
let lastMain: { name: RouteName; params: Record<string, string> } = { name: 'hoc', params: {} };
export const lastMainRoute = () => lastMain;

/**
 * Chặn rời route (S3-07: Back của trình duyệt giữa phiên mở sheet xác nhận).
 * Trả về false để giữ nguyên route hiện tại.
 */
type LeaveGuard = (to: Route) => boolean;
let leaveGuard: LeaveGuard | null = null;
export function setLeaveGuard(g: LeaveGuard | null) {
  leaveGuard = g;
}

let acceptedHref = typeof window !== 'undefined' ? window.location.href : '';

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  useEffect(() => {
    acceptedHref = window.location.href;
    const on = () => {
      if (window.location.href === acceptedHref) {
        setRoute((r) => (r.raw === parseHash(window.location.hash).raw ? r : parseHash(window.location.hash)));
        return;
      }
      const to = parseHash(window.location.hash);
      if (leaveGuard && !leaveGuard(to)) {
        // Trả URL về route hiện tại, không đổi màn.
        window.history.pushState(null, '', acceptedHref);
        return;
      }
      acceptedHref = window.location.href;
      setRoute(to);
    };
    window.addEventListener('hashchange', on);
    window.addEventListener('popstate', on);
    return () => {
      window.removeEventListener('hashchange', on);
      window.removeEventListener('popstate', on);
    };
  }, []);
  useEffect(() => {
    if (route.name && !FULLSCREEN_ROUTES.includes(route.name)) lastMain = { name: route.name, params: route.params };
  }, [route]);
  return route;
}
