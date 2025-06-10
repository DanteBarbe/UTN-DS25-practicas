import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/gridexample.css';

function GridExample({ books, handleBookClick, md = 3 }) {
  return (
    <Row xs={1} md={md} className="g-4">
      {books.map((book, idx) => (
        <Col key={idx}>
          <Card onClick={() => handleBookClick && handleBookClick(book.genre)}>
            <Card.Img variant="top" src={book.image} alt={book.title} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
              {book.genre && (
                <Card.Text>
                  Género: {book.genre}
                </Card.Text>
              )}
              {book.description && (
                <Card.Text>
                  {book.description}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default GridExample;