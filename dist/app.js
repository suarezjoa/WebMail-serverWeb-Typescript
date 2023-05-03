"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const BandejaDeEntrada_1 = __importDefault(require("./routes/BandejaDeEntrada"));
const app = (0, express_1.default)();
const PORT = 3000;
// Set views directory
app.set('views', path_1.default.join(__dirname, 'views'));
// Set view engine to Pug
app.set('view engine', 'pug');
// Serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Define routes
app.get('/', (req, res) => {
    res.render('index', {});
});
app.use('/BandejaDeEntrada', BandejaDeEntrada_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
