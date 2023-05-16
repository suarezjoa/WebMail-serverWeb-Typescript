"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Correo = void 0;
const CorreoBase_1 = require("./CorreoBase");
class Correo extends CorreoBase_1.CorreoBase {
    constructor(asunto, contenido, remitente) {
        super(asunto, contenido, remitente);
        this.para = new Set();
<<<<<<< HEAD
=======
        this.fecha = new Date();
        this.hora = this.getFormattedHour();
>>>>>>> 94a34ee0aecc7569703dd04dcc20243a6f770da5
    }
    agregarPara(destinatario) {
        this.para.add(destinatario);
    }
    cantidadReceptor() {
        return this.para.size;
    }
    getPara() {
        return this.para;
    }
    setPara(contactoAEnviar) {
        this.para.add(contactoAEnviar);
    }
<<<<<<< HEAD
=======
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
>>>>>>> 94a34ee0aecc7569703dd04dcc20243a6f770da5
}
exports.Correo = Correo;
