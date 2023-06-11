"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const express_1 = __importDefault(require("express"));
const contactosrouter = express_1.default.Router();
const cookieParser = require("cookie-parser");
contactosrouter.use(cookieParser());
contactosrouter.get('/', (req, res) => {
    var _a;
    const cuentaEmail = req.cookies.email;
    const contactosDeUsuario = (_a = ManejadorCuentas_1.default.getManejador().get(cuentaEmail)) === null || _a === void 0 ? void 0 : _a.contactos.getContactos();
    const contactos = contactosDeUsuario
        ? Array.from(contactosDeUsuario.values()).map((contacto) => {
            return {
                nombre: contacto.getNombre(),
                apellido: contacto.getApellido(),
                email: contacto.getEmail(),
                relacion: contacto.getRelacion(),
            };
        })
        : [];
    res.render('contacts', { contactos: contactos }); // Pasar 'contactos' al renderizar la plantilla
});
exports.default = contactosrouter;
