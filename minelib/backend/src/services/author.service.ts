import prisma from '../config/prisma';
import { Author, CreateAuthorRequest, UpdateAuthorRequest } from '../types/author.types';

export async function getAllAuthors(): Promise<Author[]> {
  const authors = await prisma.author.findMany({
    orderBy: { id: 'asc' },
    include: {
      books: true,
    },
  });
  return authors;
}

export async function getAuthorById(id: number): Promise<Author> {
  const author = await prisma.author.findUnique({
    where: { id },
    include: {
      books: true,
    },
  });
  
  if (!author) {
    const error = new Error('Author not found.');
    (error as any).statusCode = 404;
    throw error;
  }
  return author;
}

export async function createAuthor(data: CreateAuthorRequest): Promise<Author> {
  const { name, lastname } = data;
  
  return prisma.author.create({
    data: { name, lastname },
    include: {
      books: true,
    },
  });
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

export async function updateAuthor(id: number, data: UpdateAuthorRequest): Promise<Author> {
  try {
    return await prisma.author.update({
      where: { id },
      data,
      include: {
        books: true,
      },
    });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Autor no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}