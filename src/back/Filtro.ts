import { Correo } from "./Correo";

export class Filtro {
  private nombreFiltro: string;
  private predicado: (correo: Correo) => boolean;

  constructor(nombreFiltro: string, predicado?: (correo: Correo) => boolean) {
    this.nombreFiltro = nombreFiltro;
    this.predicado = predicado || (() => true);
  }

  getNombreFiltro(): string {
    return this.nombreFiltro;
  }

  setNombreFiltro(nombreFiltro: string): void {
    this.nombreFiltro = nombreFiltro;
  }

  getPredicado(): (correo: Correo) => boolean {
    return this.predicado;
  }

  setPredicado(predicado: (correo: Correo) => boolean): void {
    this.predicado = predicado;
  }

  generarFiltroPorContenido(contenido: string): (correo: Correo) => boolean {
    const filtroPorContenido = (correo: Correo) => correo.getContenido() === contenido;
    this.setPredicado(filtroPorContenido);
    return filtroPorContenido;
  }

  generarFiltroPorEmisor(emisor: string): (correo: Correo) => boolean {
    const filtroPorEmisor = (correo: Correo) => correo.getEmisor().getEmail() === emisor;
    this.setPredicado(filtroPorEmisor);
    return filtroPorEmisor;
  }

  generarFiltroPorAsunto(asunto: string): (correo: Correo) => boolean {
    const filtroPorAsunto = (correo: Correo) => correo.getAsunto() === asunto;
    this.setPredicado(filtroPorAsunto);
    return filtroPorAsunto;
  }

  generarFiltroPorAsuntoYEmisor(asunto: string, emisor: string): (correo: Correo) => boolean {
    const filtroPorAsunto = this.generarFiltroPorAsunto(asunto);
    const filtroPorEmisor = this.generarFiltroPorEmisor(emisor);
    const union = (correo: Correo) => filtroPorAsunto(correo) && filtroPorEmisor(correo);
    this.setPredicado(union);
    return union;
  }

  generarFiltroPorContenidoYEmisor(contenido: string, emisor: string): (correo: Correo) => boolean {
    const filtroPorContenido = this.generarFiltroPorContenido(contenido);
    const filtroPorEmisor = this.generarFiltroPorEmisor(emisor);
    const union = (correo: Correo) => filtroPorContenido(correo) && filtroPorEmisor(correo);
    this.setPredicado(union);
    return union;
  }
}
