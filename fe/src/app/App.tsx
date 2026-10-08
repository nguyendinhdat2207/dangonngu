// @spec APP-01, APP-03, APP-04, APP-05, APP-07, APP-08, APP-09
import { useEffect, useState, type ReactNode } from 'react';
import { SheetProvider } from '../components/C6-sheet/SheetHost';
import { ToastProvider } from '../components/C7-thong-bao/ToastHost';
import { TabBar } from '../components/C5-thanh-tab/TabBar';
import { dueItemIds } from '../data';
import { FULLSCREEN_ROUTES, navigate, useRoute, type Route } from './router';
import { AppProvider, useApp, type AppDeps } from './state';
import { TopBar } from './TopBar';
import { LoadError, Skeleton } from './States';
import { S1ChonNgonNgu } from '../pages/S1-chon-ngon-ngu/S1ChonNgonNgu';
import { T1Hoc } from '../pages/T1-hoc/T1Hoc';
import { S3PhienHoc } from '../pages/S3-phien-hoc/S3PhienHoc';
import { Placeholder } from '../pages/Placeholder';
import './app.css';

export function App({ deps }: { deps?: AppDeps }) {
  return (
    <AppProvider deps={deps}>
      <ToastProvider>
        <SheetProvider>
          <Shell />
        </SheetProvider>
      </ToastProvider>
    </AppProvider>
  );
}

function useOnline() {
  const [online, setOnline] = useState(() => (typeof navigator === 'undefined' ? true : navigator.onLine !== false));
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);
  return online;
}

function Banners() {
  const { storageBlocked } = useApp();
  const online = useOnline();
  return (
    <>
      {!online && (
        <p className="banner t-sm" role="status">
          Đang ngoại tuyến. Tiến độ vẫn được lưu trên máy.
        </p>
      )}
      {storageBlocked && (
        <p className="banner banner--warn t-sm" role="alert">
          Trình duyệt đang chặn lưu dữ liệu, tiến độ sẽ mất khi đóng app.
        </p>
      )}
    </>
  );
}

function Shell() {
  const route = useRoute();
  const app = useApp();
  const { catalog, language, pack, settings, data, progress, deps } = app;
  const ready = catalog.status === 'ready';
  const hasLanguage = Boolean(language && pack);

  // APP-04, APP-05: route không hợp lệ hoặc chưa chọn ngôn ngữ.
  useEffect(() => {
    if (!ready) return;
    if (!hasLanguage && route.name !== 'chon-ngon-ngu') navigate('chon-ngon-ngu', undefined, { replace: true });
    else if (hasLanguage && route.name === null) navigate('hoc', undefined, { replace: true });
  }, [ready, hasLanguage, route.name]);

  const fullscreen = route.name !== null && FULLSCREEN_ROUTES.includes(route.name);
  useEffect(() => {
    document.body.classList.toggle('has-tabbar', !fullscreen);
  }, [fullscreen]);

  if (catalog.status === 'loading') {
    return (
      <div className="boot">
        <Skeleton shape={settings.lang ? 'card' : 'list'} />
      </div>
    );
  }
  if (catalog.status === 'error') {
    return (
      <div className="boot">
        <LoadError onRetry={app.retryCatalog} />
      </div>
    );
  }

  if (route.name === 'chon-ngon-ngu' || !hasLanguage) {
    return (
      <div className="fullscreen">
        <Banners />
        <S1ChonNgonNgu />
      </div>
    );
  }

  const content = (() => {
    if (!data || data.status === 'loading') return <Skeleton shape={route.name === 'thu-vien' ? 'list' : 'card'} />;
    if (data.status === 'error') return <LoadError onRetry={app.retryData} />;
    return <Page route={route} />;
  })();

  if (fullscreen) {
    return (
      <div className="fullscreen">
        <Banners />
        {content}
      </div>
    );
  }

  const reviewCount = data?.status === 'ready' ? dueItemIds(progress, deps.now(), (id) => data.value.byId.has(id)).length : 0;
  return (
    <div className="shell">
      <TabBar current={route.name} reviewCount={reviewCount} brand />
      <div className="shell__main">
        <TopBar />
        <Banners />
        <main className="shell__content">{content}</main>
      </div>
    </div>
  );
}

function Page({ route }: { route: Route }): ReactNode {
  switch (route.name) {
    case 'hoc':
      return <T1Hoc />;
    case 'phien-hoc':
      return <S3PhienHoc params={route.params} />;
    case 'luyen-tap':
      return <Placeholder title="Luyện tập" />;
    case 'thu-vien':
      return <Placeholder title="Thư viện" />;
    case 'tien-bo':
      return <Placeholder title="Tiến bộ" />;
    case 'cai-dat':
      return <Placeholder title="Cài đặt" />;
    case 'kiem-tra':
      return <Placeholder title="Kiểm tra nhanh" fullscreen />;
    default:
      return null;
  }
}
