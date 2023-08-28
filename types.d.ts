export type UserRol = 'normal' | 'super' | 'admin'

export interface UserProfile{
    id: number
    name: String
    email: String
    password: String
    tickets: []
}

export interface Producto {
    id: number
    name: string
    published: boolean
    precio: number
    imagen: string
    descripcion: string
    cepa: string
    inventario: number
}


export interface Ticket{
    id: number
    createdAt: string
    userId: number
    ticketLista: []
}

export type NewProductoEntry = Omit<Producto, 'id'>