import express, { Router } from 'express';
import manejador from '../ManejadorCuentas';

const router = express.Router();

router.get('/', (_req, res) => {
  const correos = manejador.getManejador().get('andresbriend@anashe.ashe')?.bandeja.getBandejaDeEntrada().map(correo => {
    return {
      destinatario: Array.from(correo.getPara()).join(','),
      asunto: correo.getAsunto(),
      contenido: correo.getContenido(),
      fecha: correo.getFecha(),
      hora: correo.getHora(),
      id: correo.generateId(),
    };  
  });

  res.render('inbox', { correos: correos });
});

export default router;
