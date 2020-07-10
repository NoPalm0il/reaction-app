import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import AuthContext from "../../configs/authContext";

export default class NavbarComponent extends React.Component {
  static contextType = AuthContext;

  render() {
    const { user, logout } = this.context;

    return (
      <Navbar expand="sm" variant="dark" style={{ backgroundColor: "#303030" }}>
        <Container>
          <Nav>
            <Nav.Link
              style={{ fontSize: "20px", paddingRight: "50px" }}
              as={NavLink}
              exact
              to="/"
            >
              <img alt="React.ion" src="../../../logo192.png" height="35px" width="35px"></img>{" "}
              React.ion
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} exact to="/about">
              About
            </Nav.Link>
            {user ? (
              <NavDropdown title={user.username} alignRight>
                <NavDropdown.Item onClick={() => logout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
