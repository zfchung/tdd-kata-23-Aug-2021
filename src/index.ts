export function add(input: string): number {
  if (input) {
    return input
      .split(",")
      .map(Number)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  } else return 0;
}
