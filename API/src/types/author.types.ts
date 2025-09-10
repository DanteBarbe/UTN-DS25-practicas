import { Book } from '../generated/prisma'
export interface Author {
 id: number;
 name: string;
 books: Book[];
}

export interface CreateAuthorRequest {
 name: string;
 books?: Book[];
}

export interface UpdateAuthorRequest {
 name?: string;
}