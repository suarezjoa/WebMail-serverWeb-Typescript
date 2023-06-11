"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarContacto = exports.registrarUsuario = exports.marcarCorreoFavorito = void 0;
const ManejadorCuentas_1 = __importDefault(require("./ManejadorCuentas"));
const cookieParser = require("cookie-parser");
const marcarCorreoFavorito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const email = req.cookies.email;
    const correoId = req.params.id;
    const todosLosCorreos = (_b = (_a = ManejadorCuentas_1.default.getManejador().get(email)) === null || _a === void 0 ? void 0 : _a.bandeja) === null || _b === void 0 ? void 0 : _b.getTodosLosCorreos();
    const correo = todosLosCorreos === null || todosLosCorreos === void 0 ? void 0 : todosLosCorreos.find((correo) => correo.id === correoId);
    if (!correo) {
        return res.status(404).json({ mensaje: 'Correo no encontrado' });
    }
    // Cambia el estado de favorito
    correo.favorito = !correo.favorito;
    yield ((_c = ManejadorCuentas_1.default.getManejador().get(email)) === null || _c === void 0 ? void 0 : _c.bandeja.agregarFavorito(correo));
});
exports.marcarCorreoFavorito = marcarCorreoFavorito;
const registrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, apellido } = req.body;
    ManejadorCuentas_1.default.CrearCuenta(email, password, name, apellido);
    if (ManejadorCuentas_1.default.getManejador().has(email)) {
        res.redirect("/login");
    }
    else {
        res.render("Usuario no creado error 402");
    }
});
exports.registrarUsuario = registrarUsuario;
const eliminarContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const cuentaEmail = req.cookies.email;
    const emailEliminar = req.params.email; // Obtener el correo electrónico del contacto a eliminar desde los parámetros de la URL
    // Lógica para eliminar el contacto con el correo electrónico proporcionado
    const exito = (_d = ManejadorCuentas_1.default.getManejador().get(cuentaEmail)) === null || _d === void 0 ? void 0 : _d.contactos.eliminarContacto(emailEliminar);
    if (exito) {
        // Contacto eliminado correctamente
        res.redirect('/contacts'); // Redirigir al listado de contactos o a la página principal
    }
    else {
        // No se pudo eliminar el contacto
        res.status(500).send('Error al eliminar el contacto');
    }
});
exports.eliminarContacto = eliminarContacto;
