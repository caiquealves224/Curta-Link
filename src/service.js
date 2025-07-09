import { nanoid } from 'nanoid';

export const generateShortUrl = (url) => {
  return nanoid(6);
}