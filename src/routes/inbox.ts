import express, { Router } from 'express';
import manejador from '../ManejadorCuentas';

const router = express.Router();

router.get('/', (_req, res) => {
  const correos = manejador.getManejador().get('andresbriend@anashe.ashe')?.bandeja.getBandejaDeEntrada().map(correo => {
  });
  res.render('inbox', { correos: correos });
});

export default router;
