import { Router } from 'express';
import { encurtar, redirecionar, listarUrls } from './controller.js';

const router = Router();

router.post('/shorten', encurtar);
router.get('/urls', listarUrls);
router.get('/:shortUrl', redirecionar);

export default router;
