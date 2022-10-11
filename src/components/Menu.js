import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/assets/images/logo_original.png"}
              width="125"
              height="64"
              className="d-inline-block align-top"
            />{' '}
            Teestube-Teatime
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <NavDropdown title="Tea Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Black Tea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Green Tea
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fruit Tea</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Chai Tea
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;