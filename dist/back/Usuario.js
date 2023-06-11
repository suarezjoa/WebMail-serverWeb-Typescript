"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const GestorContactos_1 = require("./GestorContactos");
const ContenedorDeCorreos_1 = require("./bandejas/ContenedorDeCorreos");
class Usuario {
    constructor(nombre, apellido, Email, contrasenia) {
        this.bandeja = new ContenedorDeCorreos_1.ContenedorDeCorreos();
        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.apellido = apellido;
        this.Email = Email;
        this.contactos = new GestorContactos_1.GestorContactos();
    }
    update() {
        return `Nuevo correo de ${this.bandeja.getEstadonotificacion()}`;
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
    getContrasenia() {
        return this.contrasenia;
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
}
exports.Usuario = Usuario;
