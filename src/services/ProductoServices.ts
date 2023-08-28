import { Producto, NewProductoEntry } from '../../types'
import productos from './productos.json'

export const getProductos = (): Producto[] => productos;

export const getProductoById = (id: number): Producto | undefined =>{
    const producto = productos.find(p => p.id === id)
    if(producto !== null){
        return producto
    }
    return undefined
}
export const createProducto = (newProductoEntry : NewProductoEntry): Producto=>{
    const newProducto = {
        id: Math.max(...productos.map(p=> p.id))+1,
        ...newProductoEntry
    }
    productos.push(newProducto)
    return newProducto
}

export const deleteProcuto = (id: number): Producto | undefined=>{
    const index = productos.findIndex(p=> p.id === id);
    if(index !== -1){
        console.log(`producto eliminado `)
        return productos.splice(index, 1)[0]
    }
    return undefined    
}