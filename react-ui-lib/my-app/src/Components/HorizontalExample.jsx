import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles/horizontalexample.css';

function HorizontalExample() {
  return (
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Sexo
          </Form.Label>
            <Form.Check
              type="radio"
              label="Masculino"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Femenino"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
        </Form.Group>
      </fieldset>
  );
}

export default HorizontalExample;