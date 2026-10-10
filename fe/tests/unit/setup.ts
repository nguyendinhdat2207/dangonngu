import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { resetUpdateSignal } from '../../src/app/updates';

afterEach(() => {
  cleanup();
  window.history.replaceState(null, '', '/');
  document.documentElement.removeAttribute('data-theme');
  document.body.className = '';
  document.body.style.overflow = '';
  // gỡ speechSynthesis giả nếu có
  delete (window as unknown as Record<string, unknown>).speechSynthesis;
  delete (globalThis as unknown as Record<string, unknown>).SpeechSynthesisUtterance;
  resetUpdateSignal();
});
