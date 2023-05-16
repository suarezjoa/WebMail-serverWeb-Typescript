import express, { Request, Response } from 'express';
import path from 'path';
import inbox from './routes/inbox';
import login from './routes/login';
import send from './routes/send';
import message from './routes/message'
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
app.use('/message', message);

// Ruta para enviar correo
app.post('/enviar-correo', (req: Request, res: Response) => {
  const { destinatario, asunto, mensaje} = req.body;

  const NuevoCorreo = new Correo(asunto, mensaje, 'cuentaPrueba1@anashe.ashe'); // Crear instancia de la clase Correo

  NuevoCorreo.agregarPara(destinatario); // Agregar destinatario al correo
 
  manejador.enviarCorreo(NuevoCorreo)
  res.redirect('/inbox'); // Redirigir a la página del inbox
});

// Configuración del servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


/*app.get('/', (req: Request, res: Response) => {
  res.render('login');
});


app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === 'admin@gmail.com' && password === 'admin') {
    res.render('inbox');
  } else {
    res.render('login', { error: 'Los datos ingresados no son correctos' });
  }
});*/
