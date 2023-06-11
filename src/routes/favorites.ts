import manejador from '../ManejadorCuentas';
import express from 'express';

const router = express.Router();

const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get('/', (req, res) => {

  const cuentaEmail = req.cookies.email;
  console.log(cuentaEmail);
  const bandejaDeFAv = manejador.getManejador().get(cuentaEmail)?.bandeja.getBandejaDeFavoritos();
  const correos = bandejaDeFAv ? bandejaDeFAv.map(correo =>{
    return {
      remitente: correo.getEmisor(),
      destinatario: Array.from(correo.getPara()).join(','),
      asunto: correo.getAsunto(),
      contenido: correo.getContenido(),
      fecha: correo.getFecha(),
      hora: correo.getHora(),
      id: correo.generateId(),
    };
  }) : [];

  res.render('favorites', { correos: correos });
});


export default router;