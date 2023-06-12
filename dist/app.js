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
const Correo_1 = require("./back/Correo/Correo");
const ManejadorCuentas_1 = __importDefault(require("./ManejadorCuentas"));
const Registro_1 = __importDefault(require("./routes/Registro"));
const favorites_1 = __importDefault(require("./routes/favorites"));
const contacts_1 = __importDefault(require("./routes/contacts"));
const newcontact_1 = __importDefault(require("./routes/newcontact"));
const funciones_1 = require("./funciones");
const app = (0, express_1.default)();
const port = process.env.port || 3000;
const cookieParser = require("cookie-parser");
// Configuración de Express
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Configuración de las rutas
app.use("/login", login_1.default);
app.use('/inbox', inbox_1.default);
app.use('/send', send_1.default);
app.use('/register', Registro_1.default);
app.use('/favorites', favorites_1.default);
app.use('/contacts', contacts_1.default);
app.use('/newcontact', newcontact_1.default);
// Configuración de cookieParse
app.use(cookieParser("nashe es el secreto"));
// Ruta para enviar correo
app.post('/enviar-correo', (req, res) => {
    const { destinatario, asunto, mensaje } = req.body;
    const currentPage = req.url;
    const emisor = req.cookies.email;
    const NuevoCorreo = new Correo_1.Correo(asunto, mensaje, emisor);
    NuevoCorreo.agregarPara(destinatario);
    ManejadorCuentas_1.default.enviarCorreo(NuevoCorreo);
    res.redirect('/inbox');
});
app.post('/correos/${correo.id}/favorito', funciones_1.marcarCorreoFavorito);
app.get('/correos/:id/favorito', funciones_1.marcarCorreoFavorito);
app.post('/eliminar-contacto/:email', funciones_1.eliminarContacto);
app.get('/changeuser', (req, res) => {
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
app.listen(port);
console.log("listen port ${port}");
module.exports = app;
