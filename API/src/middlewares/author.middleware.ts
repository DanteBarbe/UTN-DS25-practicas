import { z } from 'zod';
export const createAuthorSchema = z.object({
name: z.string()
 .min(1, 'El nombre es requerido')
 .max(50, 'El nombre no puede exceder 50 caracteres')
 .trim(),
lastname: z.string()
 .min(1, 'El apellido es requerido')
 .max(50, 'El apellido no puede exceder 50 caracteres'),
});

export const updateAuthorSchema = createAuthorSchema.partial();
