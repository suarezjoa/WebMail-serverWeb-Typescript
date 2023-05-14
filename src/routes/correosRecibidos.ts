interface Correo {
  destinatario: string;
  asunto: string;
  mensaje: string;
}

const correosRecibidos: Correo[] = [];

function guardarCorreo(correo: Correo) {
  correosRecibidos.push(correo);
}

export { correosRecibidos, guardarCorreo };

