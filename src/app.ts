import express, { Request, Response } from 'express';
import path from 'path';
import inbox from './routes/inbox';
import login from './routes/login';
import send from './routes/send';
import { Correo } from './back/Correo/Correo';
import manejador from './ManejadorCuentas';
import resgistro from "./routes/Registro";
import favoritos from "./routes/favorites";
import contacts from "./routes/contacts"
import newcontact from "./routes/newcontact"
import {marcarCorreoFavorito} from "./funciones"

const app = express();
const PORT = 3000;

const cookieParser = require("cookie-parser");


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
app.use('/register', resgistro)
app.use('/favorites', favoritos);
app.use('/contacts', contacts);
app.use('/newcontact', newcontact);
  
// Configuración de cookieParse
app.use(cookieParser("nashe es el secreto"));


// Ruta para enviar correo
app.post('/enviar-correo', (req: Request, res: Response) => {
  
  const { destinatario, asunto, mensaje } = req.body;
  
  const currentPage = req.url;

  const emisor = req.cookies.email;

  const NuevoCorreo = new Correo(asunto, mensaje, emisor);

  NuevoCorreo.agregarPara(destinatario);

  manejador.enviarCorreo(NuevoCorreo);

  res.redirect('/inbox');
});

/*app.post('/correos/${correo.id}/favorito', marcarCorreoFavorito);

app.get('/correos/:id/favorito', marcarCorreoFavorito);

app.post('/eliminar-contacto/:email', (req, res) => {
  const cuentaEmail = req.cookies.email;
  const emailEliminar = req.params.email; // Obtener el correo electrónico del contacto a eliminar desde los parámetros de la URL

  // Lógica para eliminar el contacto con el correo electrónico proporcionado
  const exito = manejador.getManejador().get(cuentaEmail)?.contactos.eliminarContacto(emailEliminar);

  if (exito) {
    // Contacto eliminado correctamente
    res.redirect('/'); // Redirigir al listado de contactos o a la página principal
  } else {
    // No se pudo eliminar el contacto
    res.status(500).send('Error al eliminar el contacto');
  }
});*/


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
// Configuración del servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
