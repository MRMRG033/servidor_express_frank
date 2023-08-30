import { UserProfile, UserProfileWithTickets, UserProfileWithoutTicket } from "../../types";
import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();

//*Terminado
export const getUsers = async (): Promise<UserProfileWithoutTicket[]> =>{
    return await prisma.user.findMany()
}

//*Terminado
export const getUserTicketsList = async (id: number): Promise<UserProfileWithTickets | null> =>{
    try{
        const userWithTickets =  await prisma.user.findUnique({
            where:  {
                id: id
            },
            include: {
                tickets: true
            }
        })
        return userWithTickets;
    }catch(error){
        return null
    }
}

//*Terminado
export const getUserById = async (id: number): Promise<UserProfile | null > =>{
    return await prisma.user.findUnique({
        where: {
            id: id
        }
    })
}

//*Terminado
export const deleteUser = async (id: number): Promise<UserProfile | null> =>{
    return await prisma.user.delete({
        where:  {
            id: id
        }
    })
}
//*Terminado
export const putUser = async (id:number, actualizacion: Prisma.UserUpdateInput): Promise<UserProfileWithoutTicket | null>=>{
    const actualizarUsuario = await prisma.user.update({
        where: {
            id: id
        },
        data: actualizacion

    })
    return actualizarUsuario;
}