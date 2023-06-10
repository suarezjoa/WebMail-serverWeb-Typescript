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
contactosrouter.post('/eliminar-contacto/:email', (req, res) => {
  let cuentaEmail = req.cookies.email;
  let emailEliminar = req.params.email; // Obtener el correo electrónico del contacto a eliminar desde los parámetros de la URL

  // Lógica para eliminar el contacto con el correo electrónico proporcionado
  let exito = manejador.getManejador().get(cuentaEmail)?.contactos.eliminarContacto(emailEliminar);

  if (exito) {
    // Contacto eliminado correctamente
    res.redirect('/'); // Redirigir al listado de contactos o a la página principal
  } else {
    // No se pudo eliminar el contacto
    res.status(500).send('Error al eliminar el contacto');
  }
});

  
export default contactosrouter;