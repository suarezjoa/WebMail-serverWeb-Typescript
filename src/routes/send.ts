import manejador from '../ManejadorCuentas';
import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  const bandejaDeEnvios = manejador.getManejador().get('andresbriend@anashe.ashe')?.bandeja.getBandejaDeEnvios();
  const correos = bandejaDeEnvios ? bandejaDeEnvios.map(correo =>{
    return {
      destinatario: Array.from(correo.getPara()).join(','),
      asunto: correo.getAsunto(),
      contenido: correo.getContenido(),
      fecha: correo.getFecha(),
      hora: correo.getHora(),
      id: correo.generateId(),
    };
  }) : [];

  res.render('send', { correos: correos });
});

export default router;
