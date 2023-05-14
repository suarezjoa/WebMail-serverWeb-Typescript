import express from 'express';
const router = express.Router();

router.get('/login', (_req, res) => {
    res.render ('login');
});

router.post('/login'), (req: express.Request, res: express.Response) => {
    const {email, password} = req.body;

    if (email === 'admin@gmail.com' && password === 'admin') {
        res.redirect('/inbox');
      } else {
        res.render('login', { error: 'Los datos ingresados no son correctos' });
      }
}

export default router;