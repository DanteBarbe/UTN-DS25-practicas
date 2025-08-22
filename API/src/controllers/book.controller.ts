import { Request, Response, NextFunction } from 'express';
import { CreateBookRequest, UpdateBookRequest,
BookResponse, BooksListResponse } from '../types/book.types';
import {Book} from '../generated/prisma';
import * as bookService from '../services/book.service';

export async function getAllBooks(req: Request, res:
Response<BooksListResponse>, next: NextFunction) {
 try {
 const books = await bookService.getAllBooks();
 res.json({
 books,
 total: books.length
 });
 } catch (error) {
 next(error);
 }
}

export async function getBookById(req: Request, res:
Response<BookResponse>, next: NextFunction) {
 try {
 const { id } = req.params;
 const book = await bookService.getBookById(parseInt(id));
 res.json({
 book,
 message: 'Libro encontrado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}

export async function removeBookById(req: Request, res:
Response<BookResponse>, next: NextFunction) {
 try {
 const { id } = req.params;
 const book = await bookService.removeBookById(parseInt(id));
 res.json({
 book,
 message: 'Libro eliminado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}


export async function createBook(
 req: Request<{}, BookResponse, CreateBookRequest>,
 res: Response<BookResponse>,
 next: NextFunction
) {
 try {
 const newBook = await bookService.createBook(req.body);
 res.status(201).json({
 book: newBook,
 message: 'Libro creado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}
export async function updateBook(
 req: Request<{ id: string }, BookResponse , UpdateBookRequest >,
 res: Response<BookResponse>,
 next: NextFunction
) {
 try {
 const { id } = req.params;
 const updatedBook = await
bookService.updateBook(parseInt(id), req.body);
 res.json({
 book: updatedBook,
 message: 'Libro actualizado exitosamente'
 });
 } catch (error) {
 next(error);
 }
}
