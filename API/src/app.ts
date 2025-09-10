import express from 'express';
import { bookRoutes } from './routes/book.routes';
import { handleError } from './middlewares/error.middleware';
import { logRequest } from './middlewares/logger.middleware';
import { authorRoutes } from './routes/author.routes';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logRequest);

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

app.use(handleError);
app.listen(PORT, () => {
 console.log(` Servidor corriendo en el puerto ${PORT}`);
});
