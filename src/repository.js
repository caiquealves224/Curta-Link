export const urls = new Map();

export const listUrls = () => {
  return Array.from(urls.entries()).map(([urlId, originalUrl]) => ({
    urlId,
    originalUrl
  }));
}