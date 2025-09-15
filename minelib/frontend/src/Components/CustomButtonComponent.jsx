import Button from 'react-bootstrap/Button';

function CustomButtonComponent() {
  return (
    <>
      <Button as="input" type="submit" value="Enviar" />
    </>
  );
}

export default CustomButtonComponent;