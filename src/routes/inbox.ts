import manejador from '../ManejadorCuentas';
import express from 'express';

const router = express.Router();

const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get('/', (req, res) => {

  let cuentaEmail = req.cookies.email;
  console.log(cuentaEmail);
  let bandejaDeEntrada = manejador.getManejador().get(cuentaEmail)?.bandeja.getBandejaDeEntrada();
  let correos = bandejaDeEntrada ? bandejaDeEntrada.map(correo =>{
    return {
      remitente: correo.getEmisor(),
      asunto: correo.getAsunto(),
      contenido: correo.getContenido(),
      fecha: correo.getFecha(),
      hora: correo.getHora(),
      id: correo.generateId(),
    };
  }) : [];

  res.render('inbox', { correos: correos });
});

export default router;

