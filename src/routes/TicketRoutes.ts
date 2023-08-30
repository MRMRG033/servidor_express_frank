import express from "express";
import * as TicketsMetodos from '../services/ticketServices';
const router = express.Router();

router.post('/', async (req, res) => {
    const { userId, productos } = req.body;
    const createdAt = new Date(); // Puedes usar la fecha actual para createdAt

    try {
        const newTicketEntry = {
            userId,
            createdAt,
            productos,
        };

        const newTicket = await TicketsMetodos.createTicket(newTicketEntry);
        res.send(newTicket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "error" });
    }
});

export default router;
