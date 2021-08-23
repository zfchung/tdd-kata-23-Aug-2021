import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 when input is an empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("should return 0 when no input provided", () => {
    expect(add()).toEqual(0);
  });
  it("should return summation of 1 number", () => {
    expect(add("1")).toEqual(1);
    expect(add("10")).toEqual(10);
    expect(add("23")).toEqual(23);
  });
  it("should return summation of 2 numbers", () => {
    expect(add("1,2")).toEqual(3);
    expect(add("10,2")).toEqual(12);
    expect(add("11,99")).toEqual(110);
  });
  it("should return the sum of unknown amount of numbers", () => {
    expect(add("1,1,1,1,1,1,1,1,1,1")).toEqual(10);
    expect(add("11,23,555")).toEqual(589);
    expect(add("2,2,2,2,2,2,2,2,2,2,2,2")).toEqual(24);
  });
  it("should recognize '\n' and ',' as a valid delimiter", () => {
    expect(add("1\n2,3")).toEqual(6);
    expect(add("11\n222,9")).toEqual(242);
  });
  it("should support different delimiter", () => {
    expect(add("//;\n1;2;3")).toEqual(6);
    expect(add("//@\n1@2@3")).toEqual(6);
    expect(add("//$\n1$2$3")).toEqual(6);
  });
  it("should throw an exception 'negative not allowed' with a negative number", () => {
    expect(() => add("1,2,-3")).toThrow("negative not allowed: -3");
    expect(() => add("//,\n-10,2,3")).toThrow("negative not allowed: -10");
    expect(() => add("//;\n1;-2;3")).toThrow("negative not allowed: -2");
    expect(() => add("//;\n-1;-2;-3")).toThrow(
      "negative not allowed: -1,-2,-3"
    );
  });
});
