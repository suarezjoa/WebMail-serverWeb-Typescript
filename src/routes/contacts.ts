import manejador from '../ManejadorCuentas';
import express from 'express';

const contactosrouter = express.Router();

const cookieParser = require("cookie-parser");

contactosrouter.use(cookieParser());

contactosrouter.get('/', (req, res) => {
  let cuentaEmail = req.cookies.email;

  let contactosDeUsuario = manejador.getManejador().get(cuentaEmail)?.contactos.getContactos();

  let contactos = contactosDeUsuario
    ? Array.from(contactosDeUsuario.values()).map((contacto) => {
        return {
          nombre: contacto.getNombre(),
          apellido: contacto.getApellido(),
          email: contacto.getEmail(),
          relacion: contacto.getRelacion(),
        };
      })
    : [];

  res.render('contacts', { contactos: contactos }); // Pasar 'contactos' al renderizar la plantilla
});

  
export default contactosrouter;