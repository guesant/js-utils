/**
 * Ensure that the given value is an array, otherwise array them.
 *
 * ```typescript
 * expect(ensureArray(12)).toEqual([12]);
 * expect(ensureArray([12])).toEqual([12]);
 * ```
 *
 * @param item value to be cast into array
 */

export const ensureArray = <T>(item: T | T[]) =>
  Array.isArray(item) ? item : [item];
