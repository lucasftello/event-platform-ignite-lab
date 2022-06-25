export function firstLetterUppercase(string: string) {
  const formattedString = string[0].toUpperCase() + string.slice(1);

  return formattedString;
}
