import express, { Router, Request, Response } from 'express';
import { Correo } from '../back/Correo/Correo'; // Asegúrate de importar la clase Correo
import manejador from '../ManejadorCuentas';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const correos = manejador.getManejador().get('cuentaPrueba1@anashe.ashe')?.bandeja.getTodosLosCorreos().map(correo => {
    // Crea objetos Correo en lugar de usar correosRecibidos directamente
    const correoObj = new Correo(
      correo.getAsunto(),
      correo.getContenido(),
      correo.getEmisor()
    );

    return {
      remitente: correoObj.getEmisor(),
      asunto: correoObj.getAsunto(),
      fecha: correoObj.getFecha(),
      hora: correoObj.getHora(),
      contenido: correoObj.getContenido(),
      id: correoObj.generateId()
    };
  });
  res.render('message', {correos: correos });
});

export default router;
