"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorContactos = void 0;
class GestorContactos {
    constructor(propietario) {
        this.contactos = new Map();
        this.propietario = propietario;
    }
    getPropietario() {
        return this.propietario;
    }
    agregar(usuario) {
        this.contactos.set(usuario.getEmail(), usuario);
    }
    eliminar(correo) {
        this.contactos.delete(correo);
    }
    imprimir() {
        let imprimir = "";
        for (const u of this.contactos.values()) {
            imprimir += u.imprimir();
        }
        return imprimir;
    }
    obtenerUsuario(email) {
        return this.contactos.get(email);
    }
    datosDeUsuario(email) {
        const usuario = this.obtenerUsuario(email);
        return `${usuario.getApellido()},${usuario.getNombre()},${usuario.getEmail()}`;
    }
    getContactos() {
        return this.contactos;
    }
}
exports.GestorContactos = GestorContactos;
