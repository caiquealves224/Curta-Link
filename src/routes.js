import { Router } from 'express';

const router = Router();

router.post('/shorten', (req, res) => {
  // Logic to shorten the URL
  // res.send('URL shortened');
});

router.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params;
  // Logic to redirect to the original URL
  // res.redirect(`https://example.com/${shortUrl}`);
});

export default router;
