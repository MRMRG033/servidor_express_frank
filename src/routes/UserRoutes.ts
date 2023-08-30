import express from 'express';
import * as UserMetodos from '../services/userServices';
const router = express.Router();

router.get('/', async (_req, res) => {
    res.send('Listado de usuarios');
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try{
        const usuarioByID = await UserMetodos.getUserById(+userId)
        res.send(usuarioByID)
    }catch(error){
        console.log(error);
        res.status(500).json({error: "hola"})
    }
});

router.post('/', async (_req, res)=>{
    res.send("usuario creado")
})


router.put('/:id', async(req, res)=>{
    const { name, email, password } = req.body;
    try{
        const actualizarUser = UserMetodos.putUser(+req.params.id, { name, email, password })
        res.send(actualizarUser)
    }catch(error){
        console.log(error)
        res.status(500).json({error: ""})
    }
})

export default router;