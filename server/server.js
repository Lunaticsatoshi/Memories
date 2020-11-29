import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//Database
import connectDB from './config/db.js';

//Routes
import AuthRoutes from './routes/auth.js';
import UserRoutes from './routes/userRoutes.js';
import MemoryRoutes from './routes/memoryRoutes.js';

const app = express();

dotenv.config({path: './config/.env'});

app.use(express.json());
app.use(cors());

//Routes
app.use('/api/v1', AuthRoutes);
app.use('/api/v1', UserRoutes);
app.use('/api/v1', MemoryRoutes);

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})