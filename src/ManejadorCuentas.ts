import { GestorUsuario } from "./back/GestorUsuarios";
// crear manejador de cuentas y 2 cuentas para trabajar
const manejador = new GestorUsuario();

manejador.CrearCuenta('cuentaPrueba1@anashe.ashe','admin1','andres','briend');

manejador.CrearCuenta('cuentaPrueba2@anashe.ashe','admin2','joa','suarez');

export default manejador;
