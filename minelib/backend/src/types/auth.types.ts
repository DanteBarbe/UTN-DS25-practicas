import { User } from './user.types';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserWithoutPassword extends Omit<User, 'password'> {}

export interface LoginResponse {
  data: {
    user: UserWithoutPassword;
    token: string;
  }, 
  success: boolean;
}