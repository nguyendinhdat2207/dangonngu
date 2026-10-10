// Màn tạm cho khu vực chưa làm trong đợt này. Sẽ thay bằng trang thật ở đợt sau.
import { href } from '../app/router';

export function Placeholder({ title, fullscreen }: { title: string; fullscreen?: boolean }) {
  return (
    <section className="placeholder">
      <h1 className="t-lg">{title}</h1>
      <p className="t-body muted">Màn này đang được làm ở đợt sau.</p>
      {fullscreen && <a href={href('hoc')}>Về Học</a>}
    </section>
  );
}
