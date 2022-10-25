export const range = (n: number, step = 1) =>
  Array(n)
    .fill(0)
    .map((_, i) => i * step);

export const diff = <T>(
  before: T[],
  after: T[],
  compareFn: (a: T, b: T) => boolean
): {
  added: T[];
  removed: T[];
} => {
  const doesNotHave = (element: T, arr: T[]) =>
    !arr.find((el) => compareFn(el, element));
  const addedElements = after.filter((newEl) => doesNotHave(newEl, before));
  const removedElements = before.filter((oldEl) => doesNotHave(oldEl, after));
  return {
    added: addedElements,
    removed: removedElements,
  };
};
