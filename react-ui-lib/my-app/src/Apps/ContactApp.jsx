import './styles/contact.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { Footer } from '../Components/Footer'
import ContactForm from '../Components/ContactForm'
import CustomButtonComponent from '../Components/CustomButtonComponent'


export const ContactApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='contact-form-section'>
        <h2>Envíanos tu mensaje!</h2>
        <ContactForm />
        <CustomButtonComponent />
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default ContactApp





