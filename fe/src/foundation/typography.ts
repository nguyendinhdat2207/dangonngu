// @spec FND-06
export type SentenceSize = 't-2xl' | 't-xl' | 't-lg';

/** Cỡ câu ngôn ngữ đích theo số ký tự: dưới 40 → 2xl; 40 đến 90 → xl; trên 90 → lg. */
export function sentenceSize(text: string): SentenceSize {
  const n = [...text].length;
  if (n < 40) return 't-2xl';
  if (n <= 90) return 't-xl';
  return 't-lg';
}
