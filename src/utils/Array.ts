export const range = (n: number, step = 1) =>
  Array(n)
    .fill(0)
    .map((_, i) => i * step);
