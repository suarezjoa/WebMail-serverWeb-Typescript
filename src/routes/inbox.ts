import manejador from '../ManejadorCuentas';
import express from 'express';

const router = express.Router();

const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get('/', (req, res) => {

  const cuentaEmail = req.cookies.email;

  const bandejaDeEntrada = manejador.getManejador().get(cuentaEmail)?.bandeja.getBandejaDeEntrada();

  const correos = bandejaDeEntrada ? bandejaDeEntrada.map(correo =>{
    return {
      destinatario: Array.from(correo.getPara()).join(','),
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

