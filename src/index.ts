// 1 hour
export function add(input?: string): number {
  if (input) {
    if (input.substring(0, 2) == "//") {
      return customDelimiter(input);
    } else {
      return fixedDelimiter(input);
    }
  } else return 0;
}

function calculation(input: string, delimiter: RegExp | string): number {
  const numbers: number[] = input.split(delimiter).map(Number);
  const hasNegative: boolean = numbers.some((value) => value < 0);
  if (hasNegative) {
    let negativeNumbers = numbers.filter((value) => value < 0).join(",");
    throw "negative not allowed: " + negativeNumbers;
  }
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

function fixedDelimiter(input: string): number {
  const delimiter: RegExp = /\n|,/;
  return calculation(input, delimiter);
}

function customDelimiter(input: string): number {
  const delimiter: string = input.charAt(2);
  const splitString: string = input.split("\n")[1];
  return calculation(splitString, delimiter);
}
