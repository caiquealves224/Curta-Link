import { generateShortUrl } from './service.js';

export const encurtar = async (req, res) => {
  const { url } = req.body;
  // Logic to shorten the URL
  // For example, you could generate a random string and save it in a database
  
  const shortUrl = generateShortUrl();
  
  return res.status(201).json({
    originalUrl: url,
    shortUrl: shortUrl
  });
}

export const redirecionar = (req, res) => {
  const { shortUrl } = req.params;
  // Logic to find the original URL from the short URL
  // const originalUrl = findOriginalUrl(shortUrl);
  // if (originalUrl) {
  //   res.redirect(originalUrl);
  // } else {
  //   res.status(404).json({ mensagem: 'URL não encontrada.' });
  // }

  res.status(404).json({ mensagem: 'URL não encontrada.' });
}
