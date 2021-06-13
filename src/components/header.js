import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

function Header(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/" activeClassName="selected active">Home</NavLink>
            </li>
            {
              (props.isLoggedIn)
                ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">dashboard</NavLink>
                </li>
                :
                ''
            }
            {
              (!props.isLoggedIn)
                ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">login</NavLink>
                </li>
                :
                ''
            }
            {
              (!props.isLoggedIn)
                ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">register</NavLink>
                </li>
                :
                ''
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}

export default connect(mapStateToProps)(Header);