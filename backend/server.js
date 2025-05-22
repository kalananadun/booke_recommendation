import express from 'express';
import authRoute from './routes/authRoutes.js';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT;
app.use('/api/auth',authRoute);
app.listen(PORT,()=>{
    console.log(`Listening to the ${PORT}`);
})