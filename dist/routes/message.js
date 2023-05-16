"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Correo_1 = require("../back/Correo/Correo"); // Asegúrate de importar la clase Correo
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    var _a;
    const correos = (_a = ManejadorCuentas_1.default.getManejador().get('cuentaPrueba1@anashe.ashe')) === null || _a === void 0 ? void 0 : _a.bandeja.getTodosLosCorreos().map(correo => {
        // Crea objetos Correo en lugar de usar correosRecibidos directamente
        const correoObj = new Correo_1.Correo(correo.getAsunto(), correo.getContenido(), correo.getEmisor());
        return {
            remitente: correoObj.getEmisor(),
            asunto: correoObj.getAsunto(),
            fecha: correoObj.getFecha(),
            hora: correoObj.getHora(),
            contenido: correoObj.getContenido()
        };
    });
    res.render('message', { correos: correos });
});
exports.default = router;
