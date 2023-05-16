"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const inbox_1 = __importDefault(require("./routes/inbox"));
const login_1 = __importDefault(require("./routes/login"));
const send_1 = __importDefault(require("./routes/send"));
const message_1 = __importDefault(require("./routes/message"));
const Correo_1 = require("./back/Correo/Correo");
const ManejadorCuentas_1 = __importDefault(require("./ManejadorCuentas"));
const app = (0, express_1.default)();
const PORT = 3000;
// Configuración de Express
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
// Configuración de las rutas
app.use("/", login_1.default);
app.use('/inbox', inbox_1.default);
app.use('/send', send_1.default);
app.use('/message', message_1.default);
// Ruta para enviar correo
app.post('/enviar-correo', (req, res) => {
    const { destinatario, asunto, mensaje } = req.body;
    const NuevoCorreo = new Correo_1.Correo(asunto, mensaje, 'cuentaPrueba1@anashe.ashe'); // Crear instancia de la clase Correo
    NuevoCorreo.agregarPara(destinatario); // Agregar destinatario al correo
    // Guardar el correo en el inbox
    ManejadorCuentas_1.default.enviarCorreo(NuevoCorreo);
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
