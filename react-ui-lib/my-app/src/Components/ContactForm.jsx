import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './styles/contactform.css'

function ContactForm() {
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
      <FloatingLabel className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </FloatingLabel>
    </>
  );
}

export default ContactForm;