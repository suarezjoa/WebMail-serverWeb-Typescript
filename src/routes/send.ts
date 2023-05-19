import express, { Router } from 'express';
import manejador from '../ManejadorCuentas';

const router = express.Router();

router.get('/', (_req, res) => {

  const correos = manejador.getManejador().get('andresbriend@anashe.ashe')?.bandeja.getBandejaDeEnvios().map(correo => {
    return {
      destinatario: Array.from(correo.getPara()).join(','),
      asunto: correo.getAsunto(),
      mensaje: correo.getContenido(),
      fecha: correo.getFecha(),
      hora: correo.getHora(),
      id: correo.generateId(),
    };
  });

  res.render('send', {correos: correos });
});

router.get('/message/:id', (req, res) => {
  const correoId = req.params.id;
  const correo = manejador.getManejador().get('andresbriend@anashe.ashe')?.bandeja.getBandejaDeEnvios().find(correo => correo.generateId() === correoId);

  if (!correo) {
    // Manejar correo no encontrado
    return res.status(404).send('Correo no encontrado');
  }

  const correoInfo = {
    remitente: correo.getEmisor(),
    asunto: correo.getAsunto(),
    fecha: correo.getFecha(),
    hora: correo.getHora(),
    contenido: correo.getContenido()
  };

  res.render('message', { correo: correoInfo });
});


export default router;