/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DATA_SOURCE?: 'fixture' | 'static';
  readonly VITE_DATA_BASE_URL?: string;
  /** Địa chỉ trang học chính cho nút "Quay lại trang học" (APP-12). */
  readonly VITE_HOST_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: string;
