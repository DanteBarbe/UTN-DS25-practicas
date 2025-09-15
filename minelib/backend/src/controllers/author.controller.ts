import { Request, Response, NextFunction } from 'express';
import {Author} from '../generated/prisma';
import * as authorService from '../services/author.service';

export async function getAllAuthors(req: Request, res:
Response, next: NextFunction) {
 try {
 const authors = await authorService.getAllAuthors();
 res.json({ success: true, data: authors });
 } catch (error) {
 next(error);
 }
}

export async function getAuthorById(req: Request, res:
Response, next: NextFunction) {
 try {
 const { id } = req.params;
 const author = await authorService.getAuthorById(parseInt(id));
 res.json({
 success: true, data: author
 });
 } catch (error) {
 next(error);
 }
}

export async function removeAuthorById(req: Request, res:
Response, next: NextFunction) {
 try {
 const { id } = req.params;
 await authorService.removeAuthorById(parseInt(id));
 res.json({
 success: true,
 message: 'Autor eliminado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}


export async function createAuthor(
 req: Request,
 res: Response,
 next: NextFunction
) {
 try {
    const author = await authorService.createAuthor( req.body );
 res.status(201).json({
    success: true,
    data: author,
    message: 'Autor creado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}

export async function updateAuthor(
 req: Request,
 res: Response,
 next: NextFunction
) {
 try {
 const { id } = req.params;
 const author = await authorService.updateAuthor(parseInt(id), req.body);
 res.json({
    success: true,
    data: author,
    message: 'Autor actualizado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}
