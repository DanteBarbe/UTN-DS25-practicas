import './styles/contact.css'
import Layout from '../Components/Layout'
import ContactForm from '../Components/ContactForm'
import CustomButtonComponent from '../Components/CustomButtonComponent'


export const ContactApp = () => {
  return (
    <>
    <Layout>
    <section className='contact-form-section'>
        <h2>Envíanos tu mensaje!</h2>
        <ContactForm />
        <CustomButtonComponent />
    </section>
    </Layout>
    </>
  )
}
export default ContactApp





