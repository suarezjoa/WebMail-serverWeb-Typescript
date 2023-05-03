import express  from "express"; // esModules
import { Correo } from '../back/Correo';
import { Usuario } from '../back/Usuario';
import BandejaDeEnvios from "../back/BandejaDeEnvios";

const usuarioDestino = new Usuario('Destino', 'perez', 'Destinatario@gmail.com', new BandejaDeEnvios);
const usuarioColorado = new Usuario('Colorado', 'perez', 'Coloradop@gmail.com', new BandejaDeEnvios);
let correosEnViados = new BandejaDeEnvios();
const correo = new Correo('Asunto del correo', 'Contenido del correo', usuarioColorado);
correo.agregarPara(usuarioColorado);
correosEnViados.agregarABandeja(correo);

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) =>{
    res.render('BandejaDeEntradaPug', { correo });
})

router.post('/', (req, res) =>{})

export default router;