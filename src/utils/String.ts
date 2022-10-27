export const caseInsensitiveMatch = (text: string, searchString: string) => {
  return text.search(new RegExp(searchString, "i")) >= 0;
};

export const capitalize = (str: string) => {
  if (!str) return "";
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const prettifyString = (str: string) => {
  return capitalize(str.replaceAll("-", " "));
};
