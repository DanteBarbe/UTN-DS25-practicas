import './styles/contact.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { Footer } from '../Components/Footer'


export const ContactApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='contact-form-section'>
        <form>
            <h2>Envíanos tu mensaje!</h2>
            <div id="nya">
                <div className="form-field">    
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="form-field">   
                    <label htmlFor="apellido">Apellido: </label>
                    <input type="text" id="apellido" name="apellido" required />
                </div>
            </div>
            <div className="form-field" id="campo_form_email">  
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-field">  
                <p htmlFor="mensaje">Escribi tu mensaje: </p>
                <textarea id="mensaje" name="mensaje" required></textarea>
            </div>
            <div className="form-field">
                <button type="submit">Submit</button>
            </div>
        </form>
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default ContactApp





