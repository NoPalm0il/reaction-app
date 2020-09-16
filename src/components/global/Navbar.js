import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AuthContext from "../../configs/authContext";

export default class NavbarComponent extends React.Component {
  static contextType = AuthContext;

  render() {
    const { user, logout } = this.context;

    return (
      <Navbar expand="sm" variant="dark" style={{ backgroundColor: "#303030"}}>
        <Container>
          <Nav>
            <Nav.Link
              style={{ fontSize: "10", paddingRight: "50", color: "white" }}
              as={NavLink}
              exact
              to="/"
            >
              <img
                alt="React.ion"
                src="../../../logo192.png"
                width="20"
                height="20"
                className="d-inline-block align-top"
              ></img>{" "}
              React.ion
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} exact to="/about">
              About
            </Nav.Link>
            {user ? (
              <>
                <Nav.Item>
                  <Nav.Link as={NavLink} to="/crmeme">
                    Add Meme
                  </Nav.Link>
                </Nav.Item>
                <Nav.Link as={NavLink} to="/profile">
                  {user.username}
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/"
                  onClick={() => logout()}
                  style={{
                    color: "white",
                    border: "1px solid",
                    borderRadius: "6px",
                    backgroundColor: "#2F8AD7",
                  }}
                >
                  Logout
                </Nav.Link>
              </>
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
                    style={{
                      color: "white",
                      border: "1px solid",
                      borderRadius: "6px",
                      backgroundColor: "#2F8AD7",
                    }}
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
