// timing: 40mins

export function add(input: string): number {
  if (input) {
    if (input.substring(0, 2) === "//") {
      return customDelimiter(input);
    } else {
      return standardDelimiter(input);
    }
  } else return 0;
}

function standardDelimiter(input: string) {
  const delimiter = /\n|,/;
  return stringCalculator(input, delimiter);
}

function customDelimiter(input: string) {
  const delimiter = input.charAt(2);
  const numberedInput = input.split("\n")[1];
  return stringCalculator(numberedInput, delimiter);
}

function stringCalculator(input: string, delimiter: RegExp | string) {
  const numberGroup: number[] = input.split(delimiter).map(Number);
  const hasNegative: boolean = checkNegative(numberGroup);
  if (hasNegative) {
    const negativeNumberGroup: string = numberGroup
      .filter((value) => value < 0)
      .join(",");
    throw "negative not allowed: " + negativeNumberGroup;
  } else {
    return calculateSum(numberGroup);
  }
}

function checkNegative(numberGroup: number[]): boolean {
  return numberGroup.some((value) => value < 0);
}

function calculateSum(numberGroup: number[]) {
  const result = numberGroup.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return result;
}
