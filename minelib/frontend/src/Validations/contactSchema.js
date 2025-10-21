import * as yup from 'yup';
export const contactSchema = yup.object().shape({
 name: yup
 .string()
 .required('El nombre es requerido')
 .min(5, 'El nombre debe tener al menos 5 caracteres')
 .max(50, 'El nombre no puede tener más de 50 caracteres'),
 lastName: yup
 .string()
 .required('El apellido es requerido')
 .min(5, 'El apellido debe tener al menos 5 caracteres')
 .max(50, 'El apellido no puede tener más de 50 caracteres'),
 email: yup
 .string()
 .required('El email es requerido')
 .email('Debe ser un email válido'),
 message: yup
 .string()
 .required('El mensaje es requerido')
 .min(10, 'El mensaje debe tener al menos 10 caracteres')
 .max(500, 'El mensaje no puede tener más de 500 caracteres')
});