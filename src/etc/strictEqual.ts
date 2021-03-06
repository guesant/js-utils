import equal from "deep-equal";

/**
 * Checks if two values are strict equal.
 * Thanks to the `deep-equal` npm package.
 *
 * ```typescript
 * strictEqual([10,20,30], [10, 20, 30]); // true
 * ```
 *
 * @param a first value to compare
 * @param b second value to compare
 */

export const strictEqual = <A = any, B = A>(a: A, b: B) =>
  equal(a, b, { strict: true });
