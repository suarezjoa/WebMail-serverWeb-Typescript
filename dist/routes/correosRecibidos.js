"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardarCorreo = exports.correosRecibidos = void 0;
const correosRecibidos = [];
exports.correosRecibidos = correosRecibidos;
function guardarCorreo(correo) {
    correosRecibidos.push(correo);
}
exports.guardarCorreo = guardarCorreo;
