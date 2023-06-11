import manejador from '../ManejadorCuentas';
import express from 'express';

const contactosrouter = express.Router();

const cookieParser = require("cookie-parser");

contactosrouter.use(cookieParser());

contactosrouter.get('/', (req, res) => {
  const cuentaEmail = req.cookies.email;

  const contactosDeUsuario = manejador.getManejador().get(cuentaEmail)?.contactos.getContactos();

  const contactos = contactosDeUsuario
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