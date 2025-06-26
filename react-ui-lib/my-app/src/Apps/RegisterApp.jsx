import './styles/register.css'
import Layout from '../Components/Layout'
import RegisterForm from '../Components/RegisterForm'
import FormFloatingSelectExample from '../Components/FormFloatingSelectExample'
import HorizontalExample from '../Components/HorizontalExample'
import CustomButtonComponent from '../Components/CustomButtonComponent'


export const RegisterApp = () => {
  return (
    <>
    <Layout>
    <section className='register-form-section'>
        <h2>Formulario de registración</h2>
        <RegisterForm />
        <HorizontalExample />
        <FormFloatingSelectExample />
        <CustomButtonComponent />
    </section>
    </Layout>
    </>
  )
}
export default RegisterApp





