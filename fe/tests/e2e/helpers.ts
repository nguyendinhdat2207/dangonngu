import type { Page } from '@playwright/test';

export const settings = (extra: Record<string, unknown> = {}) => ({
  schema: 1,
  lang: 'en',
  packByLang: { en: 'global' },
  theme: 'system',
  voiceByLang: {},
  rate: 1,
  weeklyGoal: 5,
  guideSeen: true,
  ...extra,
});

/** Ghi localStorage trước khi app chạy. */
export async function seed(page: Page, values: Record<string, unknown>) {
  await page.addInitScript((v) => {
    if (sessionStorage.getItem('__seeded')) return;
    sessionStorage.setItem('__seeded', '1');
    for (const [k, val] of Object.entries(v)) localStorage.setItem(k, typeof val === 'string' ? val : JSON.stringify(val));
  }, values);
}

export async function revealAndKnow(page: Page) {
  await page.getByRole('button', { name: 'Chạm để hiện câu gốc' }).click();
  await page.getByRole('button', { name: /Tôi nhớ/ }).click();
}

export async function answerCorrect(page: Page) {
  await page.locator('.choice[data-correct="true"]').click();
}
