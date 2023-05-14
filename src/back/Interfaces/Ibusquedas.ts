import { Usuario } from "../Usuario";
import { Contacto } from "../Contacto";

export interface IBusquedas {
    obtenerContacto(email: string): Contacto | undefined ;
    datosDeContacto(email: string): string | undefined ;
  }