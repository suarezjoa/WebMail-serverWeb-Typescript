
import { GestorUsuario } from "./back/GestorUsuarios";

    const manejador = new GestorUsuario();

    manejador.CrearCuenta("admin@mail.com","ad1","administrador","soy el administrador")

export default manejador;
