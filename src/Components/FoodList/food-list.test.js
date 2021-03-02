import { getFinalFilters } from "./food-list.utils";

describe("food list utils", () => {
  test("check if filters return correctly before sending to server", () => {
    expect(getFinalFilters(null)).toBe(null);
    expect(getFinalFilters(undefined)).toBe(null);
    expect(getFinalFilters([])).toBe(null);

    const valid = [{ id: "score", value: "1" }];
    const invalid = [{ id: "score", value: "all" }];
    const invalid1 = [{ id: "productId", value: "" }];
    const half = [
      { id: "score", value: "1" },
      { id: "productId", value: "" },
    ];

    expect(getFinalFilters(valid)).toMatchObject(valid);
    expect(getFinalFilters(invalid)).toBe(null);
    expect(getFinalFilters(invalid1)).toBe(null);
    expect(getFinalFilters(half)).toMatchObject(valid);
  });
});
