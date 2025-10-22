import { getBookById } from './book.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
    book: {
    findUnique: jest.fn()
    }
}));

describe('BookService - getBookById', () => {
    test('debe retornar un libro cuando existe', async () => {
        
    const mockBook = { id: 1, title: "Cien años de soledad", description: "La historia de la familia Buendía en el pueblo ficticio de Macondo..." };
    (prisma.book.findUnique as jest.Mock).mockResolvedValue(mockBook);

    const result = await getBookById(1);

    expect(result).toEqual(mockBook);
    expect(prisma.book.findUnique).toHaveBeenCalledWith({ where: { id: 1 }, include: { author: true } });
    });

    test('debe lanzar error 404 cuando no existe', async () => {
    (prisma.book.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(getBookById(999)).rejects.toThrow('Book not found.');
    });
});
