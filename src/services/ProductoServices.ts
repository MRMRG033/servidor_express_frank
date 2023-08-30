import { Producto, NewProductoEntry } from '../../types'
import {PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


//*terminado
export const getProductos = async (): Promise<Producto[]> => {
    return await prisma.producto.findMany()
};

//*terminado
export const getProductoById = async (id: number): Promise<Producto | null> =>{
    const productoById = await prisma.producto.findUnique({
        where: {
            id: id
        }
    })
    return productoById;
}

//*terminado
export const createProducto = async (newProductoEntry: NewProductoEntry): Promise<Producto> => {
    const newProducto = await prisma.producto.create({
      data: newProductoEntry,
    });
    return newProducto;
};

//terminado
export const deleteProducto = async (id: number): Promise<Producto | null> =>{
    const deleteProducto = await prisma.producto.delete({
        where: {
            id: id
        }
    });
    return deleteProducto;
}
//*testear
export const putProducto = async (id: number, putProductoEntry: NewProductoEntry): Promise<Producto | null> =>{
    const actualizarProducto = await prisma.producto.update({
        where:  {
            id: id
        },
        data: putProductoEntry
    })
    return actualizarProducto;
}