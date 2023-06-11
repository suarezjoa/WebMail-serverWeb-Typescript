"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const routerLogin = express_1.default.Router();
routerLogin.get('/', (req, res) => {
    if (!req.cookies || !req.cookies.email) {
        return res.render('login');
    }
    else {
        return res.render('inbox');
    }
});
routerLogin.post('/', (req, res) => {
    var _a;
    const { email, password } = req.body;
    if (ManejadorCuentas_1.default.getManejador().has(email) && ((_a = ManejadorCuentas_1.default.getManejador().get(email)) === null || _a === void 0 ? void 0 : _a.getContrasenia()) === password) {
        res.cookie('email', email, {
            httpOnly: true
        });
        res.redirect('/inbox');
    }
    else {
        res.render('login', { error: 'Los datos ingresados no son correctos' });
    }
});
exports.default = routerLogin;
