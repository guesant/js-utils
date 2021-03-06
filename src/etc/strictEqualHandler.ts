import { IStrictEqualHandler } from "../types/IStrictEqualHandler";
import { strictEqual } from "./strictEqual";

/**
 * [[strictEqualHandler]] works like [[strictEqual]],
 * but you can specify a `handler` function.
 *
 * It's useful when you wanna compare a specific object prop.
 *
 * ```typescript
 * expect(
 *  strictEqualHandler(
 *    { lookingForThis: true },
 *    { lookingForThis: true, ignore: { this: { prop: true } } },
 *    (i) => i.lookingForThis
 *  )
 * ).toBe(true);
 * ```
 *
 * @param a first value to compare
 * @param b second value to compare
 * @param handler function that extracts the required value from `a` and `b`
 */

export const strictEqualHandler = <T = any, R = any>(
  a: T,
  b: T,
  handler: IStrictEqualHandler<T, R> = (i) => (i as unknown) as R
) => strictEqual(handler(a), handler(b));
