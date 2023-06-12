import { Request, Response } from 'express';    
import manejador from './ManejadorCuentas';

const cookieParser = require("cookie-parser");

export const marcarCorreoFavorito = async (req: Request, res: Response) => {
    
  const email = req.cookies.email;

  const correoId = req.params.id;

  const todosLosCorreos = manejador.getManejador().get(email)?.bandeja?.getTodosLosCorreos();
    const correo = todosLosCorreos?.find((correo) => correo.id === correoId)

    if (!correo) {
      return res.redirect("/favorites")
    }
    // Cambia el estado de favorito
    correo.favorito = !correo.favorito;
    await manejador.getManejador().get(email)?.bandeja.agregarFavorito(correo);
    
    res.redirect("/favorites")
};
export const eliminarContacto = async (req: Request, res: Response) => {
 
    const cuentaEmail = req.cookies.email;
    const emailEliminar = req.params.email; // Obtener el correo electrónico del contacto a eliminar desde los parámetros de la URL
  
    // Lógica para eliminar el contacto con el correo electrónico proporcionado
    const exito = manejador.getManejador().get(cuentaEmail)?.contactos.eliminarContacto(emailEliminar);
  
    if (exito) {
      // Contacto eliminado correctamente
      res.redirect('/contacts'); // Redirigir al listado de contactos o a la página principal
    } else {
      // No se pudo eliminar el contacto
      res.status(500).send('Error al eliminar el contacto');
    }
  
}