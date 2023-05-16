"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacto = void 0;
class Contacto {
    constructor(nombre, apellido, Email, relacion) {
        this.nombre = nombre;
        this.relacion = relacion;
        this.apellido = apellido;
        this.email = Email;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getRelacion() {
        return this.relacion;
    }
    setRelacion(relacion) {
        this.relacion = relacion;
    }
}
exports.Contacto = Contacto;
