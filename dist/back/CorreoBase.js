"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoBase = void 0;
class CorreoBase {
    constructor(asunto, contenido, emisor) {
        this.asunto = asunto;
        this.contenido = contenido;
        this.emisor = emisor;
    }
    getAsunto() {
        return this.asunto;
    }
    setAsunto(asunto) {
        this.asunto = asunto;
    }
    getContenido() {
        return this.contenido;
    }
    setContenido(contenido) {
        this.contenido = contenido;
    }
    getEmisor() {
        return this.emisor;
    }
    setEmisor(emisor) {
        this.emisor = emisor;
    }
    imprimirEmisor() {
        return `${this.emisor.getApellido()} ${this.emisor.getNombre()} ${this.emisor.getEmail()}`;
    }
}
exports.CorreoBase = CorreoBase;
