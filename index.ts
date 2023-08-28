import express from 'express';
import UserRoutes from './routes/UserRoutes';
const app = express();
const port = 3000;

app.use('/', UserRoutes);

app.listen(port, ()=>{
    console.log(`corriendo en el puerto ${port}`)
})