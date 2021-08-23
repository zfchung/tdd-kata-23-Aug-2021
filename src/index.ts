export function add(input: string): number {
  if (input) {
    if (input.substring(0, 2) === "//") {
      return customDelimiter(input);
    } else {
      const delimiter = /\n|,/;
      return input
        .split(delimiter)
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    }
  } else return 0;
}
function customDelimiter(input: string) {
  const delimiter = input.charAt(2);
  const numberedInput = input.split("\n")[1];
  return numberedInput
    .split(delimiter)
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
