import { getUserById } from './user.service';
import prisma from '../config/prisma';

jest.mock('../config/prisma', () => ({
    user: {
    findUnique: jest.fn()
    }
}));

describe('UserService - getUserById', () => {
    test('debe retornar un usuario cuando existe', async () => {
        
    const mockUser = { id: 1, email: "prueba123@hotmail.com", username: "dantebarbe", name: "dante", lastname: "barbe" };
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

    const result = await getUserById(1);

    expect(result).toEqual(mockUser);
    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    test('debe lanzar error 404 cuando no existe', async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(getUserById(999)).rejects.toThrow('User not found.');
    });
});
