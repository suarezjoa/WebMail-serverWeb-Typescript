"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoBase = void 0;
<<<<<<< HEAD
const crypto_1 = require("crypto");
=======
>>>>>>> 94a34ee0aecc7569703dd04dcc20243a6f770da5
class CorreoBase {
    constructor(asunto, contenido, emisor) {
        this.asunto = asunto;
        this.contenido = contenido;
        this.emisor = emisor;
<<<<<<< HEAD
        this.fecha = new Date();
        this.hora = this.getFormattedHour();
        this.id = this.generateId();
=======
>>>>>>> 94a34ee0aecc7569703dd04dcc20243a6f770da5
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
<<<<<<< HEAD
    getId() {
        return this.id;
    }
    getFormattedHour() {
        const options = { hour: '2-digit', minute: '2-digit' };
        return this.fecha.toLocaleTimeString([], options);
    }
    getFecha() {
        const day = this.fecha.getDate().toString().padStart(2, '0');
        const month = (this.fecha.getMonth() + 1).toString().padStart(2, '0');
        const year = this.fecha.getFullYear();
        return `${day}/${month}/${year}`;
    }
    getHora() {
        return this.hora;
    }
    generateId() {
        const dataToHash = this.asunto + this.contenido + this.emisor + this.fecha.toISOString();
        const hash = (0, crypto_1.createHash)('sha256');
        hash.update(dataToHash);
        return hash.digest('hex');
    }
=======
>>>>>>> 94a34ee0aecc7569703dd04dcc20243a6f770da5
}
exports.CorreoBase = CorreoBase;
