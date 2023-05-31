import { GestorUsuario } from "./back/GestorUsuarios";
import { Request, Response } from 'express';


// crear manejador de cuentas y 2 cuentas para trabajar

const manejador = new GestorUsuario();
manejador.CrearCuenta('andresbriend@anashe.ashe','admin1','andres','briend');

manejador.CrearCuenta('joaquinsuarez@anashe.ashe','admin2','joa','suarez');


export function loginHandler(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log("estamos dentro de la función");
    console.log(email);

    if (email === manejador.getManejador().get(email)?.getEmail() && password === manejador.getManejador().get(email)?.getContrasenia()) {
      console.log("estoy dentro del iF?");
      console.log(email);
      req.session.email = "algo"; // Almacena el correo electrónico en la sesión
      req.session.password = "otra cosa"; // Almacena la contraseña en la sesión
      req.session.autorizacion = true; 
      console.log("estamos dentro del if");
      res.render('inbox');
    } else {
      res.render('login', { error: 'Los datos ingresados no son correctos' });
    }
  }  
export default manejador;
