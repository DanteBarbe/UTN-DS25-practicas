import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { bookRoutes } from './routes/book.routes';
import { authRoutes } from './routes/auth.routes';
import { userRoutes } from './routes/user.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { authorRoutes } from './routes/author.routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'https://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(logRequest);

app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', userRoutes);

app.use(handleError);

app.listen(PORT, () => {
 console.log(` Servidor corriendo en el puerto ${PORT}`);
});
