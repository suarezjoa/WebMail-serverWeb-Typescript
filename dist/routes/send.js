"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ManejadorCuentas_1 = __importDefault(require("../ManejadorCuentas"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.get('/', (req, res) => {
    var _a;
    const cuentaEmail = req.cookies.email;
    const bandejaDeEnvios = (_a = ManejadorCuentas_1.default.getManejador().get(cuentaEmail)) === null || _a === void 0 ? void 0 : _a.bandeja.getBandejaDeEnvios();
    const correos = bandejaDeEnvios ? bandejaDeEnvios.map(correo => {
        return {
            destinatario: Array.from(correo.getPara()).join(','),
            asunto: correo.getAsunto(),
            contenido: correo.getContenido(),
            fecha: correo.getFecha(),
            hora: correo.getHora(),
            id: correo.generateId(),
        };
    }) : [];
    res.render('send', { correos: correos });
});
exports.default = router;
