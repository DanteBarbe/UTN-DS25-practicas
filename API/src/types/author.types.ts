import { Book } from '../generated/prisma'
export interface Author {
 id: number;
 name: string;
 lastname: string
 books: Book[];
}

export interface CreateAuthorRequest {
 name: string;
 lastname: string
 books?: Book[];
}

export interface UpdateAuthorRequest {
 name?: string;
 lastname?: string;
}