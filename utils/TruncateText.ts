export const truncateText = (text: string): string => {
  const maxLength = 80;

  if (text.length <= maxLength) return text;
  else {
    const truncatedText = text.slice(0, maxLength - 3);

    return truncatedText + "...";
  }
};
