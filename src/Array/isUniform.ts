import { ICompareFunction } from "../types/ICompareFunction";

export const isUniform = <T = any>(
  arr: T[],
  strict = true,
  compareFunction: ICompareFunction<T> = (a, b) => a === b
) => {
  if (strict && arr.length === 0) return false;
  const base = arr[0];
  return arr.every((i) => compareFunction(base, i));
};
