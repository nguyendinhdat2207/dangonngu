// @spec APP-10
import { createRoot } from 'react-dom/client';
import './foundation/tokens.css';
import './foundation/base.css';
import './foundation/fonts';
import { App } from './app/App';
import { defaultDeps } from './app/state';
import { registerServiceWorker } from './app/updates';
import { StaticFileSource } from './data';

const deps = defaultDeps();

// Chỉ đăng ký service worker ở bản build; khi phát triển và khi test thì không.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  registerServiceWorker(navigator.serviceWorker, {
    onFirstControl: () => {
      if (deps.source instanceof StaticFileSource) void deps.source.warm();
    },
  });
}

createRoot(document.getElementById('root')!).render(<App deps={deps} />);
