import { hasProperties } from "../hasProperties";

test("hasProperties", () => {
  expect(hasProperties(["a"])([])).toBe(true);
  expect(hasProperties(["a"])({})).toBe(false);
  expect(hasProperties(["a"])([{ a: 10 }])).toBe(true);
  expect(hasProperties(["a", "b", "c"])({ a: 10, b: 20, c: 30 })).toBe(true);
});
