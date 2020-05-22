import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavbarComponent extends React.Component {
  render() {
    //const { user, logout } = this.context;
    return (
      <Navbar
        variant="dark"
        expand="lg"
        style={{ "background-color": "#303030" }}
      >
        <Container>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/">
              Home
            </Nav.Link>
            {/*user && (
                <>
                  <Nav.Link as={NavLink} to="/book/list">
                    Lesson 4-Books
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/book/favorites">
                    Lesson 8-Favorites
                  </Nav.Link>
                </>
              )*/}
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Sign Up
            </Nav.Link>
            {/*user ? (
                <NavDropdown title={user.username} alignRight>
                  <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )*/}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
