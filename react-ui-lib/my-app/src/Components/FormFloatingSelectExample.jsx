import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function FormFloatingSelectExample() {
  return (
    <FloatingLabel controlId="floatingSelect" label="Tema favorito">
      <Form.Select aria-label="Floating label select example">
        <option></option>
        <option value="terror">Terror</option>
        <option value="ciencia_ficcion">Ciencia Ficción</option>
        <option value="segunda_guerra_mundial">Segunda guerra mundial</option>
        <option value="novela_literaria">Novela literaria</option>
      </Form.Select>
    </FloatingLabel>
  );
}

export default FormFloatingSelectExample;