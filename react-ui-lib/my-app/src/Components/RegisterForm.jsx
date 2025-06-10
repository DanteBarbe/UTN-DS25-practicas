import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './styles/registerform.css'

function RegisterForm() {
  return (
    <>
      <FloatingLabel controlId="floatingName" label="Nombre">
        <Form.Control type="text" placeholder="Nombre" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingLastName" label="Apellido">
        <Form.Control type="text" placeholder="Apelldo" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Correo electrónico"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="nombre@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control type="password" placeholder="Contraseña" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingDate" label="Fecha de nacimiento">
        <Form.Control type="date" placeholder="Fecha de nacimiento" />
      </FloatingLabel>
    </>
  );
}

export default RegisterForm;