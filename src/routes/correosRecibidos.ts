import { Correo } from '../back/Correo/Correo';

const correosRecibidos: Correo[] = [];

function guardarCorreo(correo: Correo) {
  correosRecibidos.push(correo);
}

export { correosRecibidos, guardarCorreo };
