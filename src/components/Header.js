
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
function Header() {
  return (
    <div>
    <Navbar bg="dark" expand="lg">
      <Container className="text-primary">
        <Navbar.Brand href="#home">
          <img
            src="https://www.ltmetro.com/wp-content/uploads/2020/06/sticky_logo-1-1-1.png"
            width="200"
            height="85"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="/Home">Home</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/Home">About</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/Signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;