import { useState } from "react";
import { useNavigate } from "react-router-dom" ;
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../Validations/loginSchema";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/login.css'
import { useForm } from "react-hook-form";
import { useAuth } from "../Contexts/AuthContext";

export default function Login () {

 const navigate = useNavigate ();
 const { login } = useAuth();
 const [serverError, setServerError] = useState('');

 const { register, handleSubmit, formState: { errors, isSubmitting },
setError } = useForm({
    resolver: yupResolver(loginSchema)
});

 async function onSubmit (data) {
    setServerError('');

    const result = await login(data.email, data.password);

    if (result.success) {
        navigate('/');
    } else {
        setServerError(result.error);
    }
 }

 return (
    <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="mb-4 text-center">Login</h2>

        <div className="mb-3">
            <input
             {...register('email')}
             placeholder="Email"
             className={errors.email ? 'input-error' : 'form-control'}
            />
            {errors.email && <span className="field-error"> {errors.email.message}</span>}
        </div>

        <div className="mb-3">
            <input
             {...register('password')}
             type="password"
             placeholder="Contraseña"
             className={errors.password ? 'input-error' : 'form.control'}
            />
            {errors.password && <span className="field-error">{errors.password.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Ingresando...' : 'Ingresar'}
        </button>
        </form>
    </div>
 );
}