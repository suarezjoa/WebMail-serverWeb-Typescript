import express from 'express';
import manejador from '../ManejadorCuentas';
import { Usuario } from '../back/Usuario';
import session from 'express-session';

const routerLogin = express.Router();

routerLogin.get('/', (req, res) => {
  if (!req.cookies || !req.cookies.email) {
    return res.render('login');
  }

  const { email } = req.cookies;

  if (manejador.getManejador().has(email)) {
    const cuentaUsuario: Usuario | undefined = manejador.getManejador().get(email);
    res.locals.email = email; // Guardar el email en la variable local
    res.locals.cuentaUsuario = cuentaUsuario; // Guardar la cuenta de usuario en la variable local
    res.redirect('/inbox');
  } else {
    res.render('login', { error: 'Usuario no válido' });
  }
});

routerLogin.post('/', (req, res) => {
  const { email, password } = req.body;
  if (manejador.getManejador().has(email) && manejador.getManejador().get(email)?.getContrasenia() === password) {
    res.cookie('email', email, {
      httpOnly: true,
    });

    res.redirect('/login');
  } else {
    res.render('login', { error: 'Los datos ingresados no son correctos' });
  }
});

export default routerLogin;


