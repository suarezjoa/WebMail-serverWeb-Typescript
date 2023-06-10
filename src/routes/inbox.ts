import manejador from '../ManejadorCuentas';
import express from 'express';

const router = express.Router();

const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get('/', (req, res) => {

  let cuentaEmail = req.cookies.email;

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

router.post('/marcar-favorito', (req, res) => {

  const correoId = req.body.correoId;
  const cuentaEmail = req.cookies.email;
  
  // Obtener el correo de la bandeja de entrada según el correoId y cuentaEmail
  const bandejaDeEntrada = manejador.getManejador().get(cuentaEmail)?.bandeja.getBandejaDeEntrada();
  const correo = bandejaDeEntrada?.find(correo => correo.generateId() === correoId);
  
  if (correo) {
    // Marcar el correo como favorito
    correo.setFavorito();
    console.log("se marco parece")
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default router;

