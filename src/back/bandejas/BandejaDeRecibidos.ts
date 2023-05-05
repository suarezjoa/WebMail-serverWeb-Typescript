import {  IFiltros } from '../Interfaces/IFiltros';
import {IAccionesBandeja} from "../Interfaces/IAccionesBandeja"
import {  Correo } from '../Correo';
import { Observable, of } from 'rxjs';
import { Usuario } from "../Usuario";

export default class BandejaDeRecibidos implements IAccionesBandeja, IFiltros {

  private correosRecibidos: Correo[] = [];

  public agregarABandeja(correoEnviado: Correo): void {
    this.correosRecibidos.push(correoEnviado);
  }

  public mostrarCorreos(): string {
    let imprimir: string = "";
    for (const c of this.correosRecibidos) {
      imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
    }
    return imprimir;
  }

  public mostrarCorreosfiltrados(filtro: { getPredicado(): (correo: Correo) => boolean }): string {
    const correosListaFiltrada = this.correosRecibidos.filter(filtro.getPredicado());
    return this.mostrarCorreosAUX(correosListaFiltrada);
  }
  
  public filtroPorAsunto(asunto: string): Observable<Correo[]> {
    const correosFiltrados = this.correosRecibidos.filter((correo) => correo.getAsunto() === asunto);
    return of(correosFiltrados);
  }



  public filtroPorContenido(contenido: string): Observable<Correo[]> {
    const correosFiltrados = this.correosRecibidos.filter((correo) => correo.getContenido() === contenido);
    return of(correosFiltrados);
  }


  public filtroPorEmisor(usuario: string): Observable<Correo[]> {
    return of(this.correosRecibidos.filter((correo) => correo.getEmisor() === usuario));
}

  public mostrarCorreosAUX(lista: Correo[]): string {
    let imprimir: string = "";
    for (const c of lista) {
      imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
    }
    return imprimir;
  }

}
