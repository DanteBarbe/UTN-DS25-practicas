import { useState } from "react";
import { useNavigate } from "react-router-dom" ;
import { setToken } from "../Helpers/auth" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/login.css'

export default function Login () {
 const API_URL = import.meta.env.VITE_API_URL
 const navigate = useNavigate ();
 const [email, setEmail ] = useState ("");
 const [password , setPassword ] = useState ("");
 async function handleSubmit (e) {
 e.preventDefault ();
 try {
 const res = await fetch(`${API_URL}/auth/login` , {
 method: "POST",
 headers: { "Content-Type" : "application/json" },
 body: JSON.stringify ({ email, password })
 });
 if (!res.ok) throw new Error("Error en login" );
 const { data } = await res.json();
 setToken(data.token);
 navigate ("/home" );
 } catch (err) {
 alert("Login fallido" );
 }
 }
 return (
    <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
        <h2 className="mb-4 text-center">Login</h2>

        <div className="mb-3">
            <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            />
        </div>

        <div className="mb-3">
            <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />
        </div>

        <button type="submit" className="btn btn-primary w-100">
            Ingresar
        </button>
        </form>
    </div>
 );
}