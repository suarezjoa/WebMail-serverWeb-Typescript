import express from 'express';
import manejador from '../ManejadorCuentas';

const nuevocontacto = express.Router();

const cookieParser = require("cookie-parser");

nuevocontacto.use(cookieParser());

nuevocontacto.get('/', (_req, res) => {
    res.render("newcontact");
});

nuevocontacto.post('/', (req, res) => {

    let cuentaEmail = req.cookies.email;

    let { name, apellido, email, relacion } = req.body;

    manejador.getManejador().get(cuentaEmail)?.contactos.agregarContacto(name, apellido, email, relacion);


    res.redirect('/contacts'); // Redirecciona a la página de contactos después de eliminar el contacto
  });

export default nuevocontacto;
