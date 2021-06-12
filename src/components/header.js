import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

  
export default function Header(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/" activeClassName="selected active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">register</NavLink>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

