import './styles/register.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { Footer } from '../Components/Footer'


export const RegisterApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='register-form-section'>
        <form>
            <h2>Formulario de registración</h2>
            <div className="form-field">    
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="nombre" name="nombre" required/>
            </div>
            <div className="form-field">   
                <label htmlFor="apellido">Apellido: </label>
                <input type="text" id="apellido" name="apellido" required/>
            </div>
            <div className="form-field">
                <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento: </label>
                <input type="date" id="fecha_de_nacimiento" name="fecha_de_nacimiento" required/>
            </div>
            <div className="form-field">  
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-field">
                <label htmlFor="contrasena">Contraseña: </label>
                <input type="password" id="contrasena" name="contrasena" required/>
            </div>
            <div className="form-field">
                <label>Sexo: </label>
                <input type="radio" id="sexo_masculino" name="sexo" value="masculino"/> Masculino
                <input type="radio" id="sexo_femenino" name="sexo" value="femenino"/> Femenino
            </div>
            <div className="form-field">
                <label htmlFor="temas_favoritos">Temas favoritos:</label>
                <select id="temas_favoritos" name="temas_favoritos" multiple>
                    <option value="terror">Terror</option>
                    <option value="ciencia_ficcion">Ciencia Ficción</option>
                    <option value="segunda_guerra_mundial">Segunda guerra mundial</option>
                    <option value="novela_literaria">Novela literaria</option>
                </select>
            </div>
            <div className="form-field">
                <button type="submit">SUBMIT</button>
            </div>

        </form>
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default RegisterApp





