import { strictEqualHandler } from "../strictEqualHandler";

test("strictEqualHandler", () => {
  expect(
    strictEqualHandler(
      { some: { deep: { prop: true } } },
      { some: { deep: { prop: true } } }
    )
  ).toBe(true);

  expect(
    strictEqualHandler(
      { some: { deep: { prop: true } } },
      { some: { deep: { prop: true } } },
      (i) => i.some.deep.prop
    )
  ).toBe(true);

  expect(
    strictEqualHandler(
      { some: { deep: { prop: true } } },
      { some: { deep: { prop: true } }, ignore: { this: { prop: true } } }
    )
  ).toBe(false);

  expect(
    strictEqualHandler(
      { some: { deep: { prop: true } } },
      { some: { deep: { prop: true } }, ignore: { this: { prop: true } } },
      (i) => i.some.deep.prop
    )
  ).toBe(true);
});
