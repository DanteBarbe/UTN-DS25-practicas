export interface User {
    id: number,
    name: string,
    lastname: string,
    username: string
    email: string,
    password: string,
    role: 'USER' | 'ADMIN'
}

export interface UserData extends Omit<User, 'password'> {}

export interface CreateUserRequest {
    name: string;
    lastname: string;
    email: string;
    password: string;
    username: string;
    role: 'USER' | 'ADMIN';
}


export interface UpdateUserRequest {
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    username?: string;
}