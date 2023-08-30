import express from 'express';
import * as ProductosMetodos from "../services/ProductoServices";
const router = express.Router();

router.get('/',async (_req, res)=>{
    try{
        const listaProductos = await ProductosMetodos.getProductos()
        res.send(listaProductos)
    }catch(error){
        console.log(error)
        res.status(500).json({error: "No se encontro ni una monda"})
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const producto = await ProductosMetodos.getProductoById(+req.params.id);
        return res.send(producto);
    }catch(error){
        console.log(error)
        return res.status(500).json({error: "Producto no encontrado"})
    }
});

router.post('/', async (req,res)=>{
    const {name, published, precio, imagen, descripcion, cepa, inventario} = req.body
    try{
        const newProducto = await ProductosMetodos.createProducto({   name, published, precio, imagen, descripcion, cepa, inventario  });
        res.json(newProducto)
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'Error al crear el producto'})
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const producto = await ProductosMetodos.deleteProducto(+req.params.id)
        return res.send(producto)
    }catch(error){
        console.log(error)
        return res.status(500).json({error:"este usuario no existe"})
    }
});

router.put('/:id',async (req, res)=>{
    const {name, published, precio, imagen, descripcion, cepa, inventario} = req.body
    try{
        const actualizarProducto = await ProductosMetodos.putProducto(+req.params.id, {   name, published, precio, imagen, descripcion, cepa, inventario  });
        res.send(actualizarProducto)
    }catch(error){
        console.log(error)
        res.status(500).json({error: "Puede que el producto que estas intentando actualizar no exista"})
    }
});
router.put('/inventario/:id', (_req, res)=>{
    
    res.send("actualizar el invenario del producto")
})
export default router;