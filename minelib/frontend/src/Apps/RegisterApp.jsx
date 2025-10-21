import './styles/register.css'
import RegisterForm from '../Components/RegisterForm'
import FormFloatingSelectExample from '../Components/FormFloatingSelectExample'
import HorizontalExample from '../Components/HorizontalExample'
import CustomButtonComponent from '../Components/CustomButtonComponent'


export const RegisterApp = () => {
  return (
    <>
    <section className='register-form-section'>
        <h2>Formulario de registro</h2>
        <RegisterForm />
        <HorizontalExample />
        <FormFloatingSelectExample />
        <CustomButtonComponent />
    </section>
    </>
  )
}
export default RegisterApp





