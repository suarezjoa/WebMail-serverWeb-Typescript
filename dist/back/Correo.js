"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Correo = void 0;
const CorreoBase_1 = require("./CorreoBase");
class Correo extends CorreoBase_1.CorreoBase {
    constructor(asunto, contenido, remitente) {
        super(asunto, contenido, remitente);
        this.para = new Set();
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
}
exports.Correo = Correo;
