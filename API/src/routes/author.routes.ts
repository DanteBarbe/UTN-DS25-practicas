import { Router } from 'express';
import * as authorController from '../controllers/author.controller';
import { validate } from '../middlewares/validation.middleware'
import { createAuthorSchema, updateAuthorSchema } from '../middlewares/author.middleware';
const router = Router();

router.get('/', authorController.getAllAuthors);

router.get('/:id', authorController.getAuthorById);

router.post('/', validate(createAuthorSchema),authorController.createAuthor);

router.put('/:id', validate(updateAuthorSchema), authorController.updateAuthor);

router.delete('/:id', authorController.removeAuthorById);
export const authorRoutes = router;
