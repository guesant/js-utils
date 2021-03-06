import { ensureArray } from "../ensureArray";

test("ensureArray", () => {
  expect(ensureArray("texto")).toEqual(["texto"]);
  expect(ensureArray(["texto"])).toEqual(["texto"]);
});
