"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const nuevocontacto = express_1.default.Router();
const cookieParser = require("cookie-parser");
nuevocontacto.use(cookieParser());
nuevocontacto.get('/', (_req, res) => {
    res.render("newcontact");
});
nuevocontacto.post('/', (req, res) => {
    var _a;
    const cuentaEmail = req.cookies.email;
    const { name, apellido, email, relacion } = req.body;
    (_a = ManejadorCuentas_1.default.getManejador().get(cuentaEmail)) === null || _a === void 0 ? void 0 : _a.contactos.agregarContacto(name, apellido, email, relacion);
    res.redirect('/contacts'); // Redirecciona a la página de contactos después de eliminar el contacto
});
exports.default = nuevocontacto;
