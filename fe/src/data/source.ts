// @spec DATA-05, DATA-10, APP-10
// Nguồn dữ liệu thay được. Chỉ file này gọi fetch tới dữ liệu.
import type { PackId } from './types';

export interface DataSource {
  /** Manifest của một bộ nội dung. null khi bộ không có (ví dụ nguồn chỉ có một bộ). */
  getManifest(pack: PackId): Promise<unknown | null>;
  /** source-index.json của bộ (nếu có), dùng cho tên gốc của ngôn ngữ (S1-02). */
  getSourceIndex(pack: PackId): Promise<unknown | null>;
  /** File ngôn ngữ theo tên file ghi trong manifest. */
  getLanguageFile(pack: PackId, file: string): Promise<unknown>;
  /** File unit theo tên file ghi trong manifest. */
  getUnitFile(pack: PackId, file: string): Promise<unknown>;
}

export class DataLoadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DataLoadError';
  }
}

const SAFE_FILE = /^[A-Za-z0-9._-]+\.json$/;

function checkFile(file: string): string {
  // Tên file lấy từ manifest; chỉ chấp nhận tên file đơn giản để không đọc ra ngoài thư mục bộ.
  if (!SAFE_FILE.test(file)) throw new DataLoadError(`Tên file không hợp lệ: ${file}`);
  return file;
}

/** Đọc từ một base URL (mặc định ./data, là fe/public/data trong bản build). */
export class StaticFileSource implements DataSource {
  /** Các URL đã tải thành công, để nạp lại vào bộ nhớ ngoại tuyến khi service worker vừa nhận quản lý trang (APP-10). */
  private readonly loaded = new Set<string>();

  constructor(
    private readonly baseUrl: string,
    private readonly fetchImpl: typeof fetch = (...args) => fetch(...args),
  ) {}

  /** Tải lại các file đã tải, qua service worker, để mở lại được khi ngoại tuyến. Lỗi bỏ qua. */
  async warm(): Promise<void> {
    await Promise.all([...this.loaded].map((u) => this.fetchImpl(u).catch(() => undefined)));
  }

  private url(pack: PackId, file: string) {
    return `${this.baseUrl.replace(/\/$/, '')}/${pack}/${checkFile(file)}`;
  }

  private async get(pack: PackId, file: string, optional: boolean): Promise<unknown | null> {
    let res: Response;
    try {
      res = await this.fetchImpl(this.url(pack, file));
    } catch (e) {
      throw new DataLoadError(`Không tải được ${pack}/${file}: ${(e as Error).message}`);
    }
    if (!res.ok) {
      if (optional && res.status === 404) return null;
      throw new DataLoadError(`Không tải được ${pack}/${file}: HTTP ${res.status}`);
    }
    this.loaded.add(this.url(pack, file));
    try {
      return await res.json();
    } catch {
      if (optional) return null;
      throw new DataLoadError(`${pack}/${file} không phải JSON`);
    }
  }

  getManifest(pack: PackId) {
    return this.get(pack, 'manifest.json', true);
  }
  getSourceIndex(pack: PackId) {
    return this.get(pack, 'source-index.json', true);
  }
  getLanguageFile(pack: PackId, file: string) {
    return this.get(pack, file, false);
  }
  getUnitFile(pack: PackId, file: string) {
    return this.get(pack, file, false);
  }
}

/** Đọc tập con trong fe/fixtures/data, đóng gói cùng mã (không gọi mạng). Dùng cho test tự động. */
export class FixtureSource implements DataSource {
  private static readonly files = import.meta.glob('../../fixtures/data/**/*.json', { import: 'default' });

  private async get(pack: PackId, file: string, optional: boolean): Promise<unknown | null> {
    const key = `../../fixtures/data/${pack}/${checkFile(file)}`;
    const loader = FixtureSource.files[key];
    if (!loader) {
      if (optional) return null;
      throw new DataLoadError(`Fixture không có ${pack}/${file}`);
    }
    // Trả bản sao để người dùng dữ liệu không sửa được fixture dùng chung.
    return structuredClone(await loader());
  }

  getManifest(pack: PackId) {
    return this.get(pack, 'manifest.json', true);
  }
  getSourceIndex(pack: PackId) {
    return this.get(pack, 'source-index.json', true);
  }
  getLanguageFile(pack: PackId, file: string) {
    return this.get(pack, file, false);
  }
  getUnitFile(pack: PackId, file: string) {
    return this.get(pack, file, false);
  }
}

/** Chọn nguồn theo biến môi trường lúc build: VITE_DATA_SOURCE=fixture|static, VITE_DATA_BASE_URL. */
export function createDataSource(): DataSource {
  const kind = import.meta.env.VITE_DATA_SOURCE ?? 'static';
  if (kind === 'fixture') return new FixtureSource();
  return new StaticFileSource(import.meta.env.VITE_DATA_BASE_URL || './data');
}
