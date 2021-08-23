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
  it("should return addition of 2 numbers", () => {
    expect(add("1,2")).toEqual(3);
    expect(add("1,11")).toEqual(12);
    expect(add("14,125")).toEqual(139);
  });
  it("should handle addition of unknown amount of numbers", () => {
    expect(add("1,1,1,1,1,1,1,1,1,1")).toEqual(10);
    expect(add("11,11,11,11,11,11")).toEqual(66);
    expect(add("111,112,999")).toEqual(1222);
  });
});
