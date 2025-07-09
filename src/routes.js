import { Router } from 'express';
import { encurtar, redirecionar } from './controller.js';

const router = Router();

router.post('/shorten', encurtar);
router.get('/:shortUrl', redirecionar);

export default router;
