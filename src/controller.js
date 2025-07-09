import { generateShortUrl } from './service.js';
import { urls } from './repository.js';

export const encurtar = async (req, res) => {
  try {
    const { url } = req.body;
    
    const shortUrl = generateShortUrl(url);
    
    return res.status(201).json({
      originalUrl: url,
      shortUrl: process.env.APP_URL + ':' + process.env.APP_PORT + '/' + shortUrl
    });
  } catch (error) {
    return res.status(400).json({ 
      error: error.message 
    });
  }
}

export const redirecionar = (req, res) => {
  const { shortUrl } = req.params;

  const originalUrl = urls.get(shortUrl);

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ mensagem: 'URL não encontrada.' });
  }
}

export const listarUrls = (req, res) => {
  try {
    const urlsArray = Array.from(urls.entries()).map(([shortUrl, originalUrl]) => ({
      shortUrl,
      originalUrl,
      shortUrlComplete: process.env.APP_URL + ':' + process.env.APP_PORT + '/' + shortUrl
    }));

    return res.status(200).json({
      total: urlsArray.length,
      urls: urlsArray
    });
  } catch (error) {
    return res.status(500).json({ 
      error: 'Erro ao listar URLs' 
    });
  }
}
