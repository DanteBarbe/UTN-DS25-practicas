export interface Book {
 id: number;
 image?: string;
 title: string;
 author: string;
 description?: string;
 genre: string;
}
export interface CreateBookRequest {
 title: string;
 image?: string;
 author: string;
 description?: string;
 genre: string;
}
export interface UpdateBookRequest {
 image?: string;
 title?: string;
 author?: string;
 description?: string;
 genre?: string;
}
export interface BookResponse {
 book: Book;
 message: string;
}
export interface BooksListResponse {
 books: Book[];
 total: number;
}