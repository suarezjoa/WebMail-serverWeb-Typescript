"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class BandejaDeEnvios {
    constructor() {
        this.correosEnviados = [];
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
    filtroPorAsunto(asunto) {
        const correosFiltrados = this.correosEnviados.filter((correo) => correo.getAsunto() === asunto);
        return (0, rxjs_1.of)(correosFiltrados);
    }
    agregarABandeja(correoEnviado) {
        this.correosEnviados.push(correoEnviado);
    }
    mostrarCorreos() {
        let imprimir = '';
        for (const c of this.correosEnviados) {
            imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.imprimirEmisor()}`;
        }
        return imprimir;
    }
    mostrarCorreosfiltrados(filtro) {
        const correosListaFiltrada = this.correosEnviados.filter(filtro.getPredicado());
        return this.mostrarCorreosAUX(correosListaFiltrada);
    }
    filtroPorContenido(contenido) {
        const correosFiltrados = this.correosEnviados.filter((correo) => correo.getContenido() === contenido);
        return (0, rxjs_1.of)(correosFiltrados);
    }
    filtroPorEmisor(usuario) {
        return (0, rxjs_1.of)(this.correosEnviados.filter((correo) => correo.getEmisor() === usuario));
    }
    mostrarCorreosAUX(lista) {
        let imprimir = '';
        for (const c of lista) {
            imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.imprimirEmisor()}`;
        }
        return imprimir;
    }
}
exports.default = BandejaDeEnvios;
