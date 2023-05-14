import express, { Router } from 'express';
import { correosRecibidos } from './correosRecibidos';


const router = express.Router();

router.get('/', (_req, res) => {
    res.render('inbox', { correos: correosRecibidos }); 
  });


  export default router;