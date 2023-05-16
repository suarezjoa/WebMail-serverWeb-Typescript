"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GestorUsuarios_1 = require("./back/GestorUsuarios");
// crear manejador de cuentas y 2 cuentas para trabajar
const manejador = new GestorUsuarios_1.GestorUsuario();
manejador.CrearCuenta('cuentaPrueba1@anashe.ashe', 'admin1', 'andres', 'briend');
manejador.CrearCuenta('cuentaPrueba2@anashe.ashe', 'admin2', 'joa', 'suarez');
exports.default = manejador;
