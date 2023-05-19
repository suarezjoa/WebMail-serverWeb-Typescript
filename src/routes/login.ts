import express from 'express';
const router = express.Router();

router.get('/login', (_req, res) => {
    res.render ('login');
});

export default router;