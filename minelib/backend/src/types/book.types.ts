export interface Book {
 id: number;
 image: string | null;
 title: string;
 authorId: number;
 description: string | null;
 genre: string;
 createdAt: Date;
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
 authorId?: number
}