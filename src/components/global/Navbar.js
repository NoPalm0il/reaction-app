import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class NavbarComponent extends React.Component {
  render() {
    //const { user, logout } = this.context;

    return (
      <Navbar expand="sm" variant="dark" style={{ backgroundColor: "#303030" }}>
        <Container>
          <Nav>
            <Nav.Link as={NavLink} exact to="/">
              React.ion
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/register"
                style={{ border: "1px solid", borderRadius: "6px" }}
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
