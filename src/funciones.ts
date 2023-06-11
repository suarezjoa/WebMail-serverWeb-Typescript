import { Request, Response } from 'express';    
import manejador from './ManejadorCuentas';

const cookieParser = require("cookie-parser");

export const marcarCorreoFavorito = async (req: Request, res: Response) => {
    
    let email = req.cookies.email;

  const correoId = req.params.id;

  let todosLosCorreos = manejador.getManejador().get(email)?.bandeja?.getTodosLosCorreos();
  try {
    const correo = todosLosCorreos?.find((correo) => correo.id === correoId)

    if (!correo) {
      return res.status(404).json({ mensaje: 'Correo no encontrado' });
    }
    // Cambia el estado de favorito
    correo.favorito = !correo.favorito;
    await manejador.getManejador().get(email)?.bandeja.agregarFavorito(correo);

  } catch (error) {
    return res.status(500).json({ mensaje: 'Error al marcar el correo como favorito' });
  }
  
};
export const registrarUsuario = async (req: Request, res: Response) => {

    let { email, password, name, apellido} = req.body;
    
    manejador.CrearCuenta(email, password, name, apellido);
    console.log(email,password,name , apellido);
    if(manejador.getManejador().has(email)){
        res.redirect("/login");
    }else{
        res.render("Usuario no creado error 402");
    }
  
};