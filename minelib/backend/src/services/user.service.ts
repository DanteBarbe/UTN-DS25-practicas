import prisma from '../config/prisma';
import { User } from '../types/user.types';
import bcrypt from 'bcrypt';
import { CreateUserRequest, UpdateUserRequest, UserData } from '../types/user.types';

export async function getAllUsers(): Promise<UserData[]> {
 const users = await prisma.user.findMany({
  orderBy: { id: 'asc' },
 });
 return users;
}

export async function getUserById(id: number): Promise<UserData> {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    const error = new Error('User not found.');
    (error as any).statusCode = 404;
    throw error;
  }
  return user;
}

export async function createUser(data: CreateUserRequest): Promise<UserData> {
    const exists = await prisma.user.findUnique({ where: { email: data.email } });
    if (exists) {
    const error = new Error('Email ya registrado.');
    (error as any).statusCode = 409;
    throw error;
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
        ...data,
        password: hashedPassword,
    }
  })
    return user;
}

export async function removeUserById(id: number): Promise<void> {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (e: any) {
    if (e.code === 'P2025') {
      const error = new Error('Usuario no encontrado.');
      (error as any).statusCode = 404;
      throw error;
    }
    throw e;
  }
}
  
export async function updateUser(id: number, data: UpdateUserRequest): Promise<UserData> {
  try {
    const updateData: Partial<UpdateUserRequest> = {...data };
    if (data.password) {
        updateData.password = await bcrypt.hash(data.password, 10);
    }else {
        delete (updateData as any). password;
    }

    return await prisma.user.update({ where: { id }, data: updateData });
  } catch (e: any){
    if (e.code === 'P2025'){
      const error = new Error('Usuario no encontrado') as any;
      error.statusCode = 404;
      throw error;
    }
    throw e;
  }
}