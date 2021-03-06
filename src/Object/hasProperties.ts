import { Notation } from "notation";
import { ensureArray } from "../etc/ensureArray";

/**
 * Checks if an given object or an array of objects has all the required properties.
 *
 * ```typescript
 * expect(hasProperties(["a"])([])).toBe(true);
 * expect(hasProperties(["a"])({})).toBe(false);
 * expect(hasProperties(["a"])([{a: 10}])).toBe(true);
 * expect(hasProperties(["a", "b", "c"])({ a: 10, b: 20, c: 30 })).toBe(true);
 * ```
 *
 * @param propsArray array of the properties to be checked.
 */

export const hasProperties = <T = any>(
  propsArray: readonly (string | number | symbol)[]
) => (object: T | T[]) =>
  ensureArray(object).every((object) => {
    const notated = Notation.create(object);
    return propsArray.every((j) => notated.has(j));
  });
