import { objectsHasProperties } from "../objectsHasProperties";

test("objectHasProperties", () => {
  ([
    [[], true],
    [[{ notA: 20 }], false],
    [[{ a: 10 }], true],
    [[{ a: 10 }, { notA: 20 }], false],
  ] as const).forEach(([object, expected]) => {
    expect(objectsHasProperties(["a"])(object as any)).toBe(expected);
  });
});
