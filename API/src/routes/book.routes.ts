import { Router } from 'express';
import * as bookController from '../controllers/book.controller';
const router = Router();

router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookById);

router.post('/', bookController.createBook);

router.put('/:id', bookController.updateBook);

router.delete('/:id', bookController.removeBookById);
export const bookRoutes = router;
