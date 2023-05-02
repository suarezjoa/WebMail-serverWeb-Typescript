import { Usuario } from "../Usuario";


export interface IBusquedas {
    obtenerUsuario(email: string): Usuario;
    datosDeUsuario(email: string): string;
  }