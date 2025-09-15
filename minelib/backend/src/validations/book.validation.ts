import { z } from 'zod';
export const createBookSchema = z.object({
title: z.string()
 .min(1, 'El título es requerido')
 .max(50, 'El título no puede exceder 50 caracteres')
 .trim(),
 genre: z.string()
 .min(1, 'El genero es requerido')
 .max(50, 'El genero no puede exceder 50 caracteres'),
 authorId: z.number()
 .int('ID de autor inválido')
 .positive('ID de autor debe ser positivo')
});
export const updateBookSchema = createBookSchema.partial();
