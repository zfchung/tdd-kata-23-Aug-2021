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
  it("should perform addition on numbers separated by both commas and new line '\n'", () => {
    expect(add("1\n2,3")).toEqual(6);
    expect(add("11111\n2222,3")).toEqual(13336);
    expect(add("11111\n2222\n3")).toEqual(13336);
  });
  it("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toEqual(3);
    expect(add("//;\n11;2")).toEqual(13);
    expect(add("//@\n11@2@3")).toEqual(16);
  });
  it("should throw exception 'negative not allowed: <negative numbers>' when there is negative number", () => {
    expect(() => add("1,2,-3")).toThrow("negative not allowed: -3");
    expect(() => add("-1,-2,-3")).toThrow("negative not allowed: -1,-2,-3");
    expect(() => add("-1111,1,3")).toThrow("negative not allowed: -1111");
  });
});
