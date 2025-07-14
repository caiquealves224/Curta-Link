import { nanoid } from 'nanoid';
import { urls, listUrls } from './repository.js';

// Função para validar e corrigir URL
const validateAndFixUrl = (url) => {
  if (!url) {
    throw new Error('URL é obrigatória');
  }
  
  // Remove espaços em branco
  let cleanUrl = url.trim();
  
  // Verifica se já tem protocolo (http:// ou https://)
  if (!cleanUrl.match(/^https?:\/\//)) {
    cleanUrl = 'http://' + cleanUrl;
  }
  
  return cleanUrl;
};

export const generateShortUrl = (url) => {
  // Valida e corrige a URL
  const validatedUrl = validateAndFixUrl(url);
  
  const shortUrl = nanoid(10);

  urls.set(shortUrl, validatedUrl);

  return shortUrl;
}

export const getOriginalUrl = (shortUrl) => {
  const originalUrl = urls.get(shortUrl);

  if (!originalUrl) {
    throw new Error('URL não encontrada');
  }

  return originalUrl;
}

export const listarTodasUrls = () => {
  return listUrls();
}
