import express from 'express';
import UserRoutes from './routes/UserRoutes';
import ProductoRoutes from './routes/ProductoRoutes'
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 3000;

app.use('/api/usuario', UserRoutes);
app.use('/api/producto', ProductoRoutes);

app.listen(PORT, ()=>{
    console.log(`corriendo en el puerto ${PORT}`)
})