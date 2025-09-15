import './styles/contact.css'
import ContactForm from '../Components/ContactForm'
import CustomButtonComponent from '../Components/CustomButtonComponent'


export const ContactApp = () => {
  return (
    <>
    <section className='contact-form-section'>
        <h2>Envíanos tu mensaje!</h2>
        <ContactForm />
        <CustomButtonComponent />
    </section>
    </>
  )
}
export default ContactApp





