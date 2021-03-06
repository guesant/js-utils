import { isUniform } from "../isUniform";

test("isUniform", () => {
  expect(isUniform([], true)).toBe(false);
  expect(isUniform([], false)).toBe(true);
  expect(isUniform(["y", "y"])).toBe(true);
  expect(isUniform(["y", "n"])).toBe(false);
});
