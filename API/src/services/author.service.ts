import prisma from '../config/prisma';
import { Author } from '../generated/prisma';

export async function getAllAuthors(): Promise<Author[]> {
 const authors = await prisma.author.findMany({
  orderBy: { id: 'asc' },
 });
 return authors;
}

export async function getAuthorById(id: number): Promise<Author> {
  const author = await prisma.author.findUnique({ where: { id } });
  if (!author) {
    const error = new Error('Author not found.');
    (error as any).statusCode = 404;
    throw error;
  }
  return author;
}

export async function createAuthor(data: { name: string; lastname: string; }): Promise<Author> {
    return prisma.author.create({ data });
}

export async function removeAuthorById(id: number): Promise<void> {
  try {
    await prisma.author.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Autor no encontrado.');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
  
export async function updateAuthor(id: number, data: Partial<Author>): Promise<Author> {
  try {
    return await prisma.author.update ({ where: { id }, data });
  } catch (e: any){
    if (e.code === 'P2025'){
      const error = new Error('Autor no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}