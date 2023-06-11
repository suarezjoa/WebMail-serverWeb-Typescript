import { Request, Response } from 'express';    
import manejador from './ManejadorCuentas';

const cookieParser = require("cookie-parser");

export const marcarCorreoFavorito = async (req: Request, res: Response) => {
    
  const email = req.cookies.email;

  const correoId = req.params.id;

  const todosLosCorreos = manejador.getManejador().get(email)?.bandeja?.getTodosLosCorreos();
    const correo = todosLosCorreos?.find((correo) => correo.id === correoId)

    if (!correo) {
      return res.status(404).json({ mensaje: 'Correo no encontrado' });
    }
    // Cambia el estado de favorito
    correo.favorito = !correo.favorito;
    await manejador.getManejador().get(email)?.bandeja.agregarFavorito(correo);
};
export const registrarUsuario = async (req: Request, res: Response) => {

    const { email, password, name, apellido} = req.body;
    
    manejador.CrearCuenta(email, password, name, apellido);

    if(manejador.getManejador().has(email)){
        res.redirect("/login");
    }else{
        res.render("Usuario no creado error 402");
    }
  
};