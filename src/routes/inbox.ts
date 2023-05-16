import express, { Router } from 'express';

import manejador from '../ManejadorCuentas';

const router = express.Router();

router.get('/', (_req, res) => {

  const correos = manejador.getManejador().get('cuentaPrueba1@anashe.ashe')?.bandeja.getBandejaDeEntrada().map(correo => {
    return {
      destinatario: Array.from(correo.getPara()).join(','),
      asunto: correo.getAsunto(),
      mensaje: correo.getContenido(),
      fecha: correo.getFecha(),
      hora: correo.getHora(),
    };
  });
  res.render('inbox', { correos });
});

export default router;
