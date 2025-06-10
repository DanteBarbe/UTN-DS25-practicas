import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './styles/contactform.css'

function ContactForm() {
  return (
    <Form>
      <FloatingLabel controlId="floatingName" label="Nombre" className="mb-3">
        <Form.Control type="text" placeholder="Nombre" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingLastName" label="Apellido" className="mb-3">
        <Form.Control type="text" placeholder="Apellido" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Correo electrónico" className="mb-3">
        <Form.Control type="email" placeholder="nombre@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Mensaje" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Escribe tu mensaje aquí"
        />
      </FloatingLabel>
    </Form>
  );
}

export default ContactForm;