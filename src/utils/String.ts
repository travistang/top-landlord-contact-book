export const caseInsensitiveMatch = (text: string, searchString: string) => {
  return text.search(new RegExp(searchString, "i")) >= 0;
}