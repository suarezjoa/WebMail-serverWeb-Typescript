"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContenedorDeCorreos = void 0;
const rxjs_1 = require("rxjs");
class ContenedorDeCorreos {
    constructor() {
        this.todosLosCorreos = [];
        this.bandejaDeEnvios = [];
        this.bandejaDeEntrada = [];
        this.ObservadorCuenta = null;
        this.Estadonotificacion = "asd";
    }
    agregarObservador(observer) {
        this.ObservadorCuenta = observer;
    }
    getEstadonotificacion() {
        return this.Estadonotificacion;
    }
    setEstadonotificacion(nuevoEstado) {
        this.Estadonotificacion = nuevoEstado;
        this.notificarObsrvadores();
    }
    notificarObsrvadores() {
        if (this.ObservadorCuenta == null) {
            return null;
        }
        else {
            this.ObservadorCuenta.update(``);
        }
    }
    agregarABandeja(correo) {
        this.todosLosCorreos.push(correo);
    }
    CorreoEnviado(correo) {
        this.agregarABandeja(correo);
        this.bandejaDeEnvios.push(correo);
    }
    CorreoRecibido(correo) {
        this.agregarABandeja(correo);
        this.bandejaDeEntrada.push(correo);
        this.setEstadonotificacion(correo.getEmisor());
    }
    getTodosLosCorreos() {
        return this.todosLosCorreos;
    }
    getBandejaDeEntrada() {
        return this.bandejaDeEntrada;
    }
    getBandejaDeEnvios() {
        return this.bandejaDeEnvios;
    }
    mostrarCorreos() {
        let imprimir = "";
        for (const c of this.todosLosCorreos) {
            imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
        }
        return imprimir;
    }
    mostrarCorreosEnviados() {
        let imprimir = "";
        for (const c of this.bandejaDeEnvios) {
            const destinatarios = Array.from(c.getPara()).join("-");
            imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${destinatarios}`;
        }
        return imprimir;
    }
    mostrarCorreosRecividos() {
        let imprimir = "";
        for (const c of this.bandejaDeEntrada) {
            imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
        }
        return imprimir;
    }
    mostrarCorreosfiltrados(filtro) {
        const correosListaFiltrada = this.todosLosCorreos.filter(filtro.getPredicado());
        return this.mostrarCorreosAUX(correosListaFiltrada);
    }
    filtroPorAsunto(asunto) {
        const correosFiltrados = this.todosLosCorreos.filter((correo) => correo.getAsunto() === asunto);
        return (0, rxjs_1.of)(correosFiltrados);
    }
    filtroPorContenido(contenido) {
        const correosFiltrados = this.todosLosCorreos.filter((correo) => correo.getContenido() === contenido);
        return (0, rxjs_1.of)(correosFiltrados);
    }
    filtroPorEmisor(usuario) {
        return (0, rxjs_1.of)(this.todosLosCorreos.filter((correo) => correo.getEmisor() === usuario));
    }
    mostrarCorreosAUX(lista) {
        let imprimir = "";
        for (const c of lista) {
            imprimir += `A-${c.getAsunto()} C-${c.getContenido()} E-${c.getEmisor()}`;
        }
        return imprimir;
    }
}
exports.ContenedorDeCorreos = ContenedorDeCorreos;
