"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const routerRegistro = express_1.default.Router();
routerRegistro.get('/', (_req, res) => {
    res.render("register");
});
routerRegistro.post("/", (req, res) => {
    const { email, password, name, apellido } = req.body;
    ManejadorCuentas_1.default.CrearCuenta(email, password, name, apellido);
    if (ManejadorCuentas_1.default.getManejador().has(email)) {
        res.redirect("/login");
    }
    else {
        res.render("Usuario no creado error 402");
    }
});
exports.default = routerRegistro;
