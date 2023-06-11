"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorContactos = void 0;
const Contacto_1 = require("./Contacto");
class GestorContactos {
    constructor() {
        this.ListaContactos = new Map();
    }
    agregarContacto(nombre, apellido, email, relacion) {
        var crearContacto = new Contacto_1.Contacto(nombre, apellido, email, relacion);
        this.ListaContactos.set(email, crearContacto);
    }
    eliminarContacto(email) {
        this.ListaContactos.delete(email);
    }
    obtenerContacto(email) {
        if (!this.ListaContactos.get(email)) {
            return undefined;
        }
        return this.ListaContactos.get(email);
    }
    datosDeContacto(email) {
        const contactoSelec = this.obtenerContacto(email);
        if (!contactoSelec) {
            return undefined;
        }
        return `${contactoSelec.getApellido()},${contactoSelec.getNombre()},${contactoSelec.getEmail()},${contactoSelec.getRelacion()}`;
    }
    getContactos() {
        return this.ListaContactos;
    }
}
exports.GestorContactos = GestorContactos;
