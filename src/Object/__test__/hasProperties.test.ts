import { hasProperties } from "../hasProperties";

test("hasProperties", () => {
  expect(hasProperties(["a", "b", "c"])({})).toBe(false);
  expect(hasProperties(["a", "b", "c"])({ a: 10, b: 20, c: 30 })).toBe(true);
});
