import { Ticket } from "@prisma/client"
export type UserRol = 'normal' | 'super' | 'admin'

export interface UserProfile{
    id: number
    name: string
    email: string
    password: string
    tickets?: Ticket[]
}

export interface Producto {
    id: number
    name: string
    published: boolean
    precio: number
    imagen: string | null
    descripcion: string
    cepa: string
    inventario: number
    ticket?: Ticket[]
}

export interface Ticket{
    id: number
    createdAt: date
    userId: number
    productos?: productoItem[]
}

export type productoItem = {
    name: string;
    cepa: string;
    precio: number;
    descripcion: string;
    inventario: number;
}

export type UserProfileWithTickets = UserProfile & {
    tickets: Ticket[]
}
export type UserProfileWithoutTicket = Omit<UserProfile, 'tickets'>
export type NewProductoEntry = Omit<Producto, 'id' | 'ticket'>
export type NewTicketEntry =  Pick<Ticket, 'createdAt' | "userId" | "productos" >