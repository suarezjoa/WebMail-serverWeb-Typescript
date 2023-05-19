import express, { Router } from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.render('inbox');
});

export default router;
