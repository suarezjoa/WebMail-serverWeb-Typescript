import express, { Request, Response } from 'express';
import path from 'path';
import inbox from './routes/inbox';
import login from './routes/login';
import send from './routes/send';
import { Correo } from './back/Correo/Correo';
import manejador from './ManejadorCuentas';

const app = express();
const PORT = 3000;

const cookieParser = require("cookie-parser");
const session = require('express-session');


// Configuración de Express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Configuración de las rutas
app.use("/login", login );
app.use('/inbox', inbox);
app.use('/send', send);
//confuguracoin de no se que, de la seciones ya no tengo idea lo que estoy tocando

declare module 'express-session' {
  interface SessionData {
     email: string ;
     password: string ;
     autorizacion: boolean;
 }
}
  
// Configuración de cookieParse
app.use(cookieParser("nashe es el secreto"));
// Configuración de sesiones
app.use(session({
  secret: "nashe es el secreto",
  resave: true,
  saveUnitialized: true,
  cookie: {
    sameSite: "strict",maxAge: 10 * 60 * 1000, // Duración máxima de la cookie en milisegundos (10 minutos)
  }
}))


// Ruta para enviar correo
app.post('/enviar-correo', (req: Request, res: Response) => {
  const { destinatario, asunto, mensaje } = req.body;
  const currentPage = req.url;

  const NuevoCorreo = new Correo(asunto, mensaje, 'andresbriend@anashe.ashe');
  NuevoCorreo.agregarPara(destinatario);

  manejador.enviarCorreo(NuevoCorreo);

  res.redirect('/inbox');
});

app.get('/changeuser', (req: Request, res: Response) => {
  res.render('changeuser');
});


app.get('/changepass', (req, res) => {
  res.render('changepass');
});

app.get('/changemail', (req, res) => {
  res.render('changemail');
});

app.get('/contacts', (req, res) => {
  res.render('contacts');
});

app.get('/newcontact', (req, res) => {
  res.render('newcontact');
});

app.get('/register', (req, res) => {
  res.render('register');
});

// Configuración del servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
