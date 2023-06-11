import express from 'express';
import {registrarUsuario} from "../funciones"


const routerRegistro = express.Router();

routerRegistro.get('/', (_req, res) => {
    res.render("register");
});

routerRegistro.post("/", registrarUsuario);

export default routerRegistro;
