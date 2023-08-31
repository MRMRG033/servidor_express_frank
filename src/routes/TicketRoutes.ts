import express from "express";
import * as TicketsMetodos from '../services/ticketServices';
import { z } from 'zod'
const router = express.Router();

//*Terminado
router.get('/', async(_req, res)=>{
    try{
        const ticketsData = TicketsMetodos.getTickets()
        res.send(ticketsData)
    }catch(error){
        console.log(error);
        res.status(500).json({error: "error los perdiste"})
    }
})
//*Terminado
router.get('/:idTicket', async (req, res)=>{
    try{
        const ticketById =  TicketsMetodos.getTicketsById(+req.params.idTicket)
        res.send(ticketById)
    }catch(error){
        console.log(error)
        res.status(500).json({error: "error ticket no encontrado"})
    }
})
//*Terminado
router.get('/:idUsuario', async (req, res)=>{
    try{
        const datosTicket = TicketsMetodos.getTicketByIdUser(+req.params.idUsuario)
        res.send(datosTicket)
    }catch(error){
        res.status(500).json({error: "error gay"})
    }
})
//*Terminado
router.post('/', async (req, res) => {

    const {userId, productos} = req.body;
    const createAt = new Date();

    try {
        const newTicketEntrySchema = z.object({
            userId: z.number(),
            createdAt: z.date(),
            productos: z.array(z.string())
        })

        const newTicketEntry = newTicketEntrySchema.parse({
            userId: userId,
            createAt,
            productos: [productos]
        });

        const newTicket = await TicketsMetodos.createTicket(newTicketEntry);
        res.send(newTicket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "error" });
    }
});

export default router;
