import { strictEqual } from "../strictEqual";

test("strictEqual", () => {
  expect(strictEqual("", "")).toBe(true);
  expect(strictEqual("", null)).toBe(false);
  expect(strictEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(strictEqual([3, 2, 1], [1, 2, 3])).toBe(false);
});
