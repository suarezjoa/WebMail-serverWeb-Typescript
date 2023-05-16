"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorUsuario = void 0;
const Usuario_1 = require("./Usuario");
class GestorUsuario {
    constructor() {
        this.manejador = new Map;
    }
    // Esta funcion hara que solo nos devuelva un manejador para la aplicación de singleton
    static getInstance() {
        if (!GestorUsuario.instance) {
            GestorUsuario.instance = new GestorUsuario();
        }
        return GestorUsuario.instance;
    }
    CrearCuenta(email, contrasenia, nombre, apellido) {
        var crearCuenta = new Usuario_1.Usuario(nombre, apellido, email, contrasenia);
        this.manejador.set(email, crearCuenta);
    }
    EliminarCuenta(email, contrasenia, nombre, apellido) {
        this.manejador.delete(email);
    }
    enviarCorreo(Nuevocorreo) {
        const usuariosDestinatarios = Nuevocorreo.getPara();
        for (const usuario of usuariosDestinatarios) {
            const usuReceptorAgregar = this.manejador.get(usuario);
            usuReceptorAgregar === null || usuReceptorAgregar === void 0 ? void 0 : usuReceptorAgregar.bandeja.CorreoRecibido(Nuevocorreo);
        }
        const usuarioRemitente = this.manejador.get(Nuevocorreo.getEmisor());
        usuarioRemitente === null || usuarioRemitente === void 0 ? void 0 : usuarioRemitente.bandeja.CorreoEnviado(Nuevocorreo);
    }
    getManejador() {
        return this.manejador;
    }
}
exports.GestorUsuario = GestorUsuario;
