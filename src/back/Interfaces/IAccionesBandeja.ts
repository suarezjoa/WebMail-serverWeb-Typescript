import { Correo } from "../Correo";
import { Filtro } from "../Filtro";

export interface IAccionesBandeja {
  agregarABandeja(correoEnviado: Correo): void;
  mostrarCorreos(): string;
  mostrarCorreosAUX(lista: Correo[]): string;
  mostrarCorreosfiltrados(comoFiltrar: Filtro): string;
}