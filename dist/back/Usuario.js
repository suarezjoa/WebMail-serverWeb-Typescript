"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nombre, apellido, Email, bandeja) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.Email = Email;
        this.bandeja = bandeja;
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
        return this.Email;
    }
    setEmail(Email) {
        this.Email = Email;
    }
    imprimir() {
        return "[Usuario] " + "datos: " + this.getNombre() + "," + this.getApellido() + "," + this.getEmail();
    }
    enviarCorreo(correoEnviado) {
        const iterador = correoEnviado.getPara()[Symbol.iterator]();
        for (const usuario of iterador) {
            usuario.bandeja.agregarABandeja(correoEnviado);
        }
        this.bandeja.agregarABandeja(correoEnviado);
    }
    mostrarCorreos() {
        return this.bandeja.mostrarCorreos();
    }
    mostrarCorreosfiltrados(filtro) {
        return this.bandeja.mostrarCorreosfiltrados(filtro);
    }
}
exports.Usuario = Usuario;
