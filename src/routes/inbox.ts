import express, { Router } from 'express';
import { GestorUsuario } from '../back/GestorUsuarios';

const manejador: GestorUsuario = new GestorUsuario();

const router = express.Router();

router.get('/', (_req, res) => {
  const correos = manejador.getManejador().get('cuentaPrueba2@anashe.ashe')?.bandeja.getTodosLosCorreos();
  res.render('inbox', { correos }); 
});

export default router;