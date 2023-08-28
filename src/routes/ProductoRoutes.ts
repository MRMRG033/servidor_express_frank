import express from 'express';
import * as ProductosMetodos from "../services/ProductoServices";
const router = express.Router();

router.get('/',(_req, res)=>{
    const listaProductos = ProductosMetodos.getProductos()
    res.send(listaProductos)
})

router.get('/:id', (req, res)=>{
    const producto = ProductosMetodos.getProductoById(+req.params.id)
    res.send(producto)
})

router.post('/',(req,res)=>{
    const {name, published, precio, imagen, descripcion, cepa, inventario} = req.body
    const newProducto = ProductosMetodos.createProducto({
        name, 
        published, 
        precio, 
        imagen, 
        descripcion, 
        cepa, 
        inventario})
    res.json(newProducto)
})

router.delete('/:id',(_req, res)=>{
    res.send("eliminar el producto seleccionado")
})

router.put('/:id',(_req, res)=>{
    res.send("actualizar el producto seleccionado")
})

export default router;