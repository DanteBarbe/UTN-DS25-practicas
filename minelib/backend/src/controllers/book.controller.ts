import { Request, Response, NextFunction } from 'express';
import {Book} from '../generated/prisma';
import * as bookService from '../services/book.service';

export async function getAllBooks(req: Request, res:
Response, next: NextFunction) {
 try {
 const books = await bookService.getAllBooks();
 res.json({ success: true, data: books });
 } catch (error) {
 next(error);
 }
}

export async function getBookById(req: Request, res:
Response, next: NextFunction) {
 try {
 const { id } = req.params;
 const book = await bookService.getBookById(parseInt(id));
 res.json({
 success: true, data: book
 });
 } catch (error) {
 next(error);
 }
}

export async function removeBookById(req: Request, res:
Response, next: NextFunction) {
 try {
 const { id } = req.params;
 await bookService.removeBookById(parseInt(id));
 res.json({
 success: true,
 message: 'Libro eliminado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}


export async function createBook(
 req: Request,
 res: Response,
 next: NextFunction
) {
 try {
 const book = await bookService.createBook(req.body);
 res.status(201).json({
    success: true,
    data: book,
    message: 'Libro creado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}

export async function updateBook(
 req: Request,
 res: Response,
 next: NextFunction
) {
 try {
 const { id } = req.params;
 const book = await bookService.updateBook(parseInt(id), req.body);
 res.json({
    success: true,
    data: book,
    message: 'Libro actualizado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}
