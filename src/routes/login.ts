import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.render ('login');
});

router.post('/', (req, res) => {
    const { email, password } = req.body;
  
    if (email === 'admin@gmail.com' && password === 'admin') {
      res.render('inbox');
    } else {
      res.render('login', { error: 'Los datos ingresados no son correctos' });
    }
  });

export default router;