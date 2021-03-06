import { Notation } from "notation";

/**
 * Checks if an given object has all the required properties.
 *
 * ```typescript
 * expect(hasProperties(["a", "b", "c"])({ a: 10, b: 20, c: 30 })).toBe(true);
 * ```
 *
 * @param propsArray array of the properties to be checked.
 */

export const hasProperties = <T = any>(
  propsArray: readonly (string | number | symbol)[]
) => (object: T) => {
  const notated = Notation.create(object);
  return propsArray.every((j) => notated.has(j));
};
