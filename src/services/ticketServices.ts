import { PrismaClient, Ticket} from "@prisma/client";
import { NewTicketEntry, productoItem } from "../../types";
const prisma = new PrismaClient();

export const createTicket = async (newTicketEntry: NewTicketEntry): Promise<Ticket> => {
  const { productos, ...ticketData } = newTicketEntry;

  const dataWithProductos = {
    ...ticketData,
    productos: {
      create: productos as productoItem[] // Make sure productos is an array of productoItem objects
    }
  };

  const newTicket = await prisma.ticket.create({
    data: dataWithProductos
  });

  return newTicket;
}

