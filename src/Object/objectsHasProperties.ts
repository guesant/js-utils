import { hasProperties } from "./hasProperties";

/**
 * Works like [[hasProperties]], but checks all items of an object array.
 *
 * ```typescript
 * expect(hasProperties(["a"])([{a: 10}])).toBe(true);
 * expect(hasProperties(["a"])([{a: 10}, {notA:20}])).toBe(false);
 * ```
 *
 * @param propsArray array of the properties to be checked.
 */

export const objectsHasProperties = <T = any>(
  propsArray: readonly (string | number | symbol)[]
) => (objects: T[]) => {
  const checkHasProperties = hasProperties(propsArray);
  return objects.every((i) => checkHasProperties(i));
};
