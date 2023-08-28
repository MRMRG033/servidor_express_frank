import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Listado de usuarios');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Detalles del usuario con ID ${userId}`);
});



export default router;