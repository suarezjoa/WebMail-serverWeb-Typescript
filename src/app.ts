import express, { Request, Response } from 'express';
import path from 'path';
import inbox from './routes/inbox';
import login from './routes/login';
import { Correo } from './back/Correo/Correo';
import { GestorUsuario } from "./back/GestorUsuarios";

const app = express();

const PORT = 3000;


const manejador: GestorUsuario = new GestorUsuario();

manejador.CrearCuenta("cuentaPrueba1@anashe.ashe","anashe","joa","toyloco");
manejador.CrearCuenta("cuentaPrueba2@anashe.ashe","anashe","andres","estamoslocos");

// Configuración de Express
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Configuración de las rutas
app.use("/", login);
app.use('/inbox', inbox);

// Ruta para enviar correo
app.post('/enviar-correo', (req, res) => {
  const correosemuestra = new Correo("Asunto","contenido","cuentaPrueba1@anashe.ashe");
  const {asunto, contenido, para } = req.body;
  // Crear un nuevo correo utilizando los datos del formulario
  const correo = new Correo(asunto, contenido, 'cuentaPrueba1@anashe.ashe');
  correo.agregarPara(para);
  correosemuestra.agregarPara("cuentaPrueba2@anashe.ashe");
  //Envia y almacena el correo en el destinatario y en el remisor
  manejador.enviarCorreo(correo);
  manejador.enviarCorreo(correosemuestra); //
  // (Aquí deberá agregar su propio código para guardar el correo)
  console.log(manejador.getManejador().get('cuentaPrueba1@anashe.ashe')?.bandeja.getTodosLosCorreos());
  // Redirigir al usuario a una página de confirmación
  res.redirect('/inbox');
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
