import manejador from '../ManejadorCuentas';
import express from 'express';

const contactosrouter = express.Router();

const cookieParser = require("cookie-parser");

contactosrouter.use(cookieParser());

manejador.getManejador().get("andresbriend@anashe.ashe")?.contactos.agregarContacto("vegeta","777","vegetitaaa","eres el mejor youtuber");
manejador.getManejador().get("andresbriend@anashe.ashe")?.contactos.agregarContacto("la dsadas ","de dsadsa","mi dasdsa","dsami dsad");
manejador.getManejador().get("andresbriend@anashe.ashe")?.contactos.agregarContacto("wili ","no se","anashee","wijeta");

contactosrouter.get('/', (req, res) => {

  let cuentaEmail = req.cookies.email;

  let contactosDeUsuario = manejador.getManejador().get(cuentaEmail)?.contactos.getContactos();

  

  let contactos = contactosDeUsuario ? Array.from(contactosDeUsuario.values()).map(contactos => {
    return {
        nombre: contactos.getNombre(),
        apellido: contactos.getApellido(),
        email: contactos.getEmail(),
        relacion: contactos.getRelacion(),
    };
  }) : [];

  console.log(contactos);

  res.render('contacts', { contactos: contactos });
});

contactosrouter.post('/eliminar-contacto', (req, res) => {
    let cuentaEmail = req.cookies.email;
    let email = req.body.email;
  
    manejador.getManejador().get(cuentaEmail)?.contactos.EliminarContacto(email);
  
    res.redirect('/contacts'); // Redirecciona a la página de contactos después de eliminar el contacto
  });


  
export default contactosrouter;