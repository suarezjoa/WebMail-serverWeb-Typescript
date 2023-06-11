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
    console.log(cuentaEmail);
    const bandejaDeFAv = (_a = ManejadorCuentas_1.default.getManejador().get(cuentaEmail)) === null || _a === void 0 ? void 0 : _a.bandeja.getBandejaDeFavoritos();
    const correos = bandejaDeFAv ? bandejaDeFAv.map(correo => {
        return {
            remitente: correo.getEmisor(),
            destinatario: Array.from(correo.getPara()).join(','),
            asunto: correo.getAsunto(),
            contenido: correo.getContenido(),
            fecha: correo.getFecha(),
            hora: correo.getHora(),
            id: correo.generateId(),
        };
    }) : [];
    res.render('favorites', { correos: correos });
});
exports.default = router;
