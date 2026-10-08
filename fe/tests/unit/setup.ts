import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
  window.history.replaceState(null, '', '/');
  document.documentElement.removeAttribute('data-theme');
  document.body.className = '';
  document.body.style.overflow = '';
});
