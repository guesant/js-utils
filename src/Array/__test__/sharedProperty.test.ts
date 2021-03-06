import { sharedProperty } from "../sharedProperty";

test("sharedProperty", () => {
  expect(sharedProperty([])("width", 0)).toBe(0);
  expect(sharedProperty([{ width: 10 }, { width: 20 }])("width", 0)).toBe(0);
  expect(sharedProperty([{ width: 10 }, { width: 10 }])("width", 0)).toBe(10);
});
