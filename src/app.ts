import express, { Request, Response } from 'express';
import path from 'path';
import inbox from './routes/inbox';
import login from './routes/login';
import send from './routes/send';
import { Correo } from './back/Correo/Correo';
import manejador from './ManejadorCuentas';

const app = express();
const PORT = 3000;

// Configuración de Express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Configuración de las rutas
app.use("/", login);
app.use('/inbox', inbox);
app.use('/send', send);

// Ruta para enviar correo
app.post('/enviar-correo', (req: Request, res: Response) => {
  const { destinatario, asunto, mensaje } = req.body;
  const currentPage = req.url;

  const NuevoCorreo = new Correo(asunto, mensaje, 'andresbriend@anashe.ashe');
  NuevoCorreo.agregarPara(destinatario);

  manejador.enviarCorreo(NuevoCorreo);

  if (currentPage.includes('/contacts')) {
    res.redirect('/contacts'); // Redirigir a la página de contactos si se envía desde la página de contactos
  } else {
    res.redirect('/inbox'); // De lo contrario, redirigir a la página del inbox
  }
});


// Configuración del servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
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

app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === 'admin@gmail.com' && password === 'admin') {
    res.render('inbox');
  } else {
    res.render('login', { error: 'Los datos ingresados no son correctos' });
  }
});
