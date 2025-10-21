import prisma from '../config/prisma';
import { Book } from '../types/book.types';

export async function getAllBooks(): Promise<Book[]> {
 const books = await prisma.book.findMany({
  include: { author: true },
  orderBy: { id: 'asc' },
 });
 return books;
}

export async function getBookById(id: number): Promise<Book> {
  const book = await prisma.book.findUnique({ where: { id }, include: { author: true } });
  if (!book) {
    const error = new Error('Book not found.');
    (error as any).statusCode = 404;
    throw error;
  }
  return book;
}

export async function createBook (data: { title: string; genre: string; authorId : number; }): Promise<Book> {
 const authorExists = await prisma.author.findUnique ({   where: { id: data.authorId } });
 if (!authorExists ) {
 const error = new Error('El autor no existe' ) as any;
 error.statusCode = 404;
 throw error;
 }
 return prisma.book.create({ data, include: { author: true } });
}

export async function removeBookById(id: number): Promise<void> {
  try {
    await prisma.book.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Book not found.');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
  
export async function updateBook(id: number, data: Partial<Book>): Promise<Book> {
  if (data.authorId) {
    const authorExists = await prisma.author.findUnique({ where: { id: data.authorId } });
    if (!authorExists) {
      const error = new Error('El autor no existe') as any;
      error.statusCode = 404;
      throw error;
    }
  }
  try {
    return await prisma.book.update ({ where: { id }, data, include: { author: true } });
  } catch (e: any){
    if (e.code === 'P2025'){
      const error = new Error('Libro no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}