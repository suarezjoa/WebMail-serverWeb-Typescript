"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // esModules
const Correo_1 = require("../back/Correo");
const Usuario_1 = require("../back/Usuario");
const BandejaDeEnvios_1 = __importDefault(require("../back/BandejaDeEnvios"));
const correo = new Correo_1.Correo('Asunto del correo', 'Contenido del correo', new Usuario_1.Usuario('Juan', 'Pérez', 'juanperez@example.com', new BandejaDeEnvios_1.default));
const router = express_1.default.Router();
const CorreoReci = [
    {
        id: 1,
        from: 'alice@example.com',
        subject: 'Hello from Alice',
        body: 'Hi there, how are you doing?'
    },
    {
        id: 2,
        from: 'bob@example.com',
        subject: 'Meeting tomorrow',
        body: 'Hey, just wanted to remind you about our meeting tomorrow at 10am.'
    },
    {
        id: 3,
        from: 'charlie@example.com',
        subject: 'Update on project',
        body: 'Here\'s the latest update on the project we\'re working on.'
    }
];
router.get('/', (req, res) => {
    res.render('BandejaDeEntradaPug', { correo });
});
router.post('/', (req, res) => { });
exports.default = router;
