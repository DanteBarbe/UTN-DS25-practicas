import { getAuthorById } from './author.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
    author: {
    findUnique: jest.fn()
    }
}));

describe('AuthorService - getAuthorById', () => {
    test('debe retornar un autor cuando existe', async () => {
        
    const mockAuthor = { id: 1, name: "Gabriel", lastname: "García Márquez" };
    (prisma.author.findUnique as jest.Mock).mockResolvedValue(mockAuthor);

    const result = await getAuthorById(1);

    expect(result).toEqual(mockAuthor);
    expect(prisma.author.findUnique).toHaveBeenCalledWith({ where: { id: 1 }, include: { books: true } });
    });

    test('debe lanzar error 404 cuando no existe', async () => {
    (prisma.author.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(getAuthorById(999)).rejects.toThrow('Author not found.');
    });
});
