import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Header} from './Header';
import {Menu} from './Menu';
import {Footer} from './Footer';

function Layout({ children }) {
  return (
    <Container fluid>
      <Row>
          <div className="layout-header">
            <Header />
          </div>
      </Row>
      <Row>
        <Col xs={12} md={2}>
          <div className="layout-menu">
            <Menu />
          </div>
        </Col>
        <Col xs={12} md={10}>
          <div className="layout-content">
            {children}
          </div>
        </Col>
      </Row>
      <Row>
          <div className="layout-footer">
            <Footer />
          </div>
      </Row>
    </Container>
  );
}

export default Layout;
