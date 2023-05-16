"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filtro = void 0;
class Filtro {
    constructor(nombreFiltro, predicado) {
        this.nombreFiltro = nombreFiltro;
        this.predicado = predicado || (() => true);
    }
    getNombreFiltro() {
        return this.nombreFiltro;
    }
    setNombreFiltro(nombreFiltro) {
        this.nombreFiltro = nombreFiltro;
    }
    getPredicado() {
        return this.predicado;
    }
    setPredicado(predicado) {
        this.predicado = predicado;
    }
    generarFiltroPorContenido(contenido) {
        const filtroPorContenido = (correo) => correo.getContenido() === contenido;
        this.setPredicado(filtroPorContenido);
        return filtroPorContenido;
    }
    generarFiltroPorEmisor(emisor) {
        const filtroPorEmisor = (correo) => correo.getEmisor() === emisor;
        this.setPredicado(filtroPorEmisor);
        return filtroPorEmisor;
    }
    generarFiltroPorAsunto(asunto) {
        const filtroPorAsunto = (correo) => correo.getAsunto() === asunto;
        this.setPredicado(filtroPorAsunto);
        return filtroPorAsunto;
    }
    generarFiltroPorAsuntoYEmisor(asunto, emisor) {
        const filtroPorAsunto = this.generarFiltroPorAsunto(asunto);
        const filtroPorEmisor = this.generarFiltroPorEmisor(emisor);
        const union = (correo) => filtroPorAsunto(correo) && filtroPorEmisor(correo);
        this.setPredicado(union);
        return union;
    }
    generarFiltroPorContenidoYEmisor(contenido, emisor) {
        const filtroPorContenido = this.generarFiltroPorContenido(contenido);
        const filtroPorEmisor = this.generarFiltroPorEmisor(emisor);
        const union = (correo) => filtroPorContenido(correo) && filtroPorEmisor(correo);
        this.setPredicado(union);
        return union;
    }
}
exports.Filtro = Filtro;
