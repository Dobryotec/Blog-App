export const addHttps = (url: string): string => {
  return url.replace(/^http:\/\//i, "https://");
};
