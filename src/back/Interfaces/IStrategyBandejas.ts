import { Correo } from "../Correo/Correo";
import { Filtro } from "../Filtro";

export interface IStrategyBandejas {

    todosLosCorreos: Correo[];
    bandejaDeEnvios: Correo[];
    bandejaDeEntrada: Correo[]; 

  agregarABandeja(correoEnviado: Correo): void;
  mostrarCorreos(): string;
  mostrarCorreosAUX(lista: Correo[]): string;
  mostrarCorreosfiltrados(comoFiltrar: Filtro): string;
  
}