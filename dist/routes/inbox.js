"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    var _a;
    const correos = (_a = ManejadorCuentas_1.default.getManejador().get('cuentaPrueba1@anashe.ashe')) === null || _a === void 0 ? void 0 : _a.bandeja.getBandejaDeEntrada().map(correo => {
        return {
            destinatario: Array.from(correo.getPara()).join(','),
            asunto: correo.getAsunto(),
            mensaje: correo.getContenido(),
            fecha: correo.getFecha(),
            hora: correo.getHora(),
        };
    });
    res.render('inbox', { correos });
});
exports.default = router;
