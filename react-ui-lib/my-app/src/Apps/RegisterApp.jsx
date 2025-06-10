import './styles/register.css'
import { Header } from '../Components/Header'
import { Menu } from '../Components/Menu'
import { Footer } from '../Components/Footer'
import RegisterForm from '../Components/RegisterForm'
import FormFloatingSelectExample from '../Components/FormFloatingSelectExample'
import HorizontalExample from '../Components/HorizontalExample'
import CustomButtonComponent from '../Components/CustomButtonComponent'


export const RegisterApp = () => {
  return (
    <>
    <Header/>
    <main>
    <Menu/>
    <section className='register-form-section'>
        <h2>Formulario de registración</h2>
        <RegisterForm />
        <HorizontalExample />
        <FormFloatingSelectExample />
        <CustomButtonComponent />
    </section>
    </main>
    <Footer/>
    </>
  )
}
export default RegisterApp





