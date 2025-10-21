import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/gridexample.css';

function Book({ books = [], genre, md = 3 }) {
  let librosFiltrados = [];

  if (books.length > 0) {
    librosFiltrados = books;
  } else if (genre) {
    librosFiltrados = [];
  }

  return (
    <Row xs={1} md={md} className="g-4 mt-3">
      {librosFiltrados.map((book) => (
        <Col key={book.id}>
          <Card>
            <Card.Img
              variant="top"
              src={book.image ? book.image : 'https://via.placeholder.com/150'}
              alt={book.title}
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.author 
                  ? `${book.author.name} ${book.author.lastname}` 
                  : 'Autor desconocido'}</Card.Subtitle>
              {book.description && <Card.Text>{book.description}</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Book;
