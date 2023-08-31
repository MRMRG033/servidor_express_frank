import { PrismaClient} from "@prisma/client";
import { NewTicketEntry, Ticket, productoItem } from "../../types";

const prisma = new PrismaClient();

export const getTickets = async (): Promise<Ticket[]> =>{
  const listaTickets = await prisma.ticket.findMany()
  return listaTickets
}

export const getTicketsById = async (idTicket: number): Promise<Ticket[] | null> =>{
  const listaTicket = await prisma.ticket.findMany({
    where:  {
      id: idTicket
    }
  })
  return listaTicket
}
export const getTicketByIdUser = async ( idUsuario: number): Promise<Ticket[]| null>=>{
  const ticketsUsuario = await prisma.ticket.findMany({
    where:  {
      userId: idUsuario
    }
  })
  return ticketsUsuario;
}
export const createTicket = async (newTicketEntry: NewTicketEntry): Promise<Ticket> => {
  const {productos, ...ticketData } = newTicketEntry;

  const productosData: productoItem[] = productos as productoItem[];

  const dataWithProductos = {
    ...ticketData,
    productos: {
      create: productosData
    }
  };
  const newTicket = await prisma.ticket.create({
    data: dataWithProductos
  });
  return newTicket;
}