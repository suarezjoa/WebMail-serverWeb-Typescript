import express from 'express';
import manejador from '../ManejadorCuentas';

const routerLogin = express.Router();

routerLogin.get('/', (req, res) => {
  if (!req.cookies || !req.cookies.email) {
    return res.render('login');
  }
  else{
    return res.render('inbox');
  }
});

routerLogin.post('/', (req, res) => {
  const { email, password } = req.body;
  if (manejador.getManejador().has(email) && manejador.getManejador().get(email)?.getContrasenia() === password) {
    res.cookie('email', email, {
      httpOnly: true
    });
    res.redirect('/inbox');
  } else {
    res.clearCookie('email');
    res.render('login', { error: 'Los datos ingresados no son correctos' });
  }
});

export default routerLogin;