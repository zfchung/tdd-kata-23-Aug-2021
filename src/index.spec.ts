import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 for empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("should return addition of 1 number", () => {
    expect(add("1")).toEqual(1);
    expect(add("1")).toEqual(1);
    expect(add("139")).toEqual(139);
  });
});
