"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/login', (_req, res) => {
    res.render('login');
});
router.post('/login'), (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@gmail.com' && password === 'admin') {
        res.redirect('/inbox');
    }
    else {
        res.render('login', { error: 'Los datos ingresados no son correctos' });
    }
};
exports.default = router;
