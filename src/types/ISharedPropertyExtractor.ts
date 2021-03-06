export type ISharedPropertyExtractor<T, R> =
  | string
  | number
  | ((object: T) => R);
