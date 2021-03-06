import { isUniform } from "./isUniform";
import { ISharedPropertyExtractor } from "../types/ISharedPropertyExtractor";

const sharedPropertyExtract = <T, R>(
  extractor: ISharedPropertyExtractor<T, R>
) => (object: T) =>
  typeof extractor === "string" || typeof extractor === "number"
    ? ((object as any)[extractor] as R)
    : extractor(object);

/**
 * Returns an shared value from an object array.
 *
 * ```typescript
 * expect(sharedProperty([])("width", 0)).toBe(0);
 * expect(sharedProperty([{ width: 10 }, { width: 20 }])("width", 0)).toBe(0);
 * expect(sharedProperty([{ width: 10 }, { width: 10 }])("width", 0)).toBe(10);
 * ```
 * @param objects array of objects to be checked
 */

export const sharedProperty = <T = any, R extends any = any>(objects: T[]) => (
  extractor: ISharedPropertyExtractor<T, R>,
  defaultValue: R | null = null
) => {
  const _sharedPropertyExtract = sharedPropertyExtract(extractor);
  const extractedProps = objects.map(_sharedPropertyExtract);
  return extractedProps.length && isUniform(extractedProps)
    ? extractedProps[0]
    : defaultValue;
};
