import { Request, Response, NextFunction } from 'express';
import { UserData } from '../types/user.types';
import * as userService from '../services/user.service';

export async function getAllUsers(req: Request, res: Response<UserData[]>, next: NextFunction) {
 try {
 const users = await userService.getAllUsers();
 res.json(users);
 } catch (error) { next(error); }
}
export async function getUserById(req: Request<{ id: string }>, res: Response<UserData>, next:
NextFunction) {
 try {
 const { id } = req.params;
 const user = await userService.getUserById(parseInt(id));
 res.json( user );
 } catch (error) { next(error); }
}

export async function createUser(req: Request, res: Response, next: NextFunction) {
 try {
 const user = await userService.createUser(req.body);
 res.status(201).json({ data: user, success: true });
 } catch (error) { next(error); }
}

export async function updateUser(req: Request, res:
Response, next: NextFunction) {
 try {
 const { id } = req.params;
 const updatedUser = await userService.updateUser(parseInt(id), req.body);
 res.json({ data: updatedUser, success: true });
 } catch (error) { next(error); }
}

export async function removeUserById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
 try {
 const { id } = req.params;
 await userService.removeUserById(parseInt(id));
 res.json({ success: true, message: 'User deleted successfully' });
 } catch (error) { next(error); }
}
