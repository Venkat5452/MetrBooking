import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
//x0e5GSKDeyVrNQcr0gJ7pOmP Secret_key
//rzp_test_Rg7Lgz7NgVAUCu key_ID
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" sticky="top">
      <Container className="text-primary">
        <Navbar.Brand href="/">
          <img
            src="https://www.ltmetro.com/wp-content/uploads/2020/06/sticky_logo-1-1-1.png"
            width="200"
            height="85"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="/">Home</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/About">About</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/Login">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;