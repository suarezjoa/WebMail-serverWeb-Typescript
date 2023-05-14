import express, { Router, Request, Response } from 'express';
import { correosRecibidos, guardarCorreo } from './correosRecibidos';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.render('send', { correos: correosRecibidos });
});


export default router;
