import express from 'express';
import manejador from '../ManejadorCuentas';

const routerRegistro = express.Router();

routerRegistro.get('/', (_req, res) => {
    res.render("register");
});

routerRegistro.post('/', (req, res) => {

    console.log("estoy aca");
    const { email, password, name } = req.body;
    console.log("estoy aca");
    manejador.CrearCuenta(email, password, name, "apellido");
    console.log(email,password,name , "apellido");
    if(manejador.getManejador().has(email)){
        res.redirect("/login");
    }else{
        res.render("Usuario no creado error 402");
    }
});

export default routerRegistro;
