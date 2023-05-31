import express from 'express';
import manejador, {loginHandler} from '../ManejadorCuentas';


const router = express.Router();

router.get('/', (req, res) => {
    res.render ('login');
    if (req.session!.autorizacion){
        res.render('inbox', {nombre: req.session!.email});
    }else{
        res.render ('ta rota');
    }
    
});

router.post('/', loginHandler)


export default router;