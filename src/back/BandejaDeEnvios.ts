import {  IFiltros } from './Interfaces/IFiltros';
import {IAccionesBandeja} from "./Interfaces/IAccionesBandeja"
import {  Correo } from './Correo';
import { Observable, of } from 'rxjs';
import { Usuario } from "./Usuario";
import express  from "express"; // esModules

export default class BandejaDeEnvios implements IAccionesBandeja, IFiltros {
  private correosEnviados: Correo[] = [];

  public filtroPorAsunto(asunto: string): Observable<Correo[]> {
    const correosFiltrados = this.correosEnviados.filter((correo) => correo.getAsunto() === asunto);
    return of(correosFiltrados);
  }

  public getCorreosEnviados(): Correo[] {
    return this.correosEnviados;
  }

  public agregarABandeja(correoEnviado: Correo): void {
    this.correosEnviados.push(correoEnviado);
  }

  public mostrarCorreos(): string {
    let imprimir = '';
    for (const c of this.correosEnviados) {
      imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.imprimirEmisor()}`;
    }
    return imprimir;
  }

  public mostrarCorreosfiltrados(filtro: { getPredicado(): (correo: Correo) => boolean }): string {
    const correosListaFiltrada = this.correosEnviados.filter(filtro.getPredicado());
    return this.mostrarCorreosAUX(correosListaFiltrada);
  }

  public filtroPorContenido(contenido: string): Observable<Correo[]> {
    const correosFiltrados = this.correosEnviados.filter((correo) => correo.getContenido() === contenido);
    return of(correosFiltrados);
  }


  public filtroPorEmisor(usuario: Usuario): Observable<Correo[]> {
    return of(this.correosEnviados.filter((correo) => correo.getEmisor() === usuario));
}

  public mostrarCorreosAUX(lista: Correo[]): string {
    let imprimir = '';
    for (const c of lista) {
      imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.imprimirEmisor()}`;
    }
    return imprimir;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  
}
