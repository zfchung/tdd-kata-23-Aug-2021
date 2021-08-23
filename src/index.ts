export function add(input: string): number {
  if (input) {
    const delimiter = /\n|,/;
    return input
      .split(delimiter)
      .map(Number)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  } else return 0;
}
