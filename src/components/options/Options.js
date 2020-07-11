import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Options extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: "150px" }}>
          <Row style={{ marginRight: "50px", marginTop: "30px" }}>
            <Col as={NavLink} exact to="/" style={{ textAlign: "left", textDecoration:"none", color:"white" }}>
              Home
            </Col>
          </Row>
          <Row style={{ marginRight: "50px", marginTop: "30px" }}>
            <Col as={NavLink} exact to="/hot" style={{ textAlign: "left", textDecoration:"none", color:"white" }}>Hot</Col>
          </Row>
          <Row style={{ marginRight: "50px", marginTop: "30px" }}>
            <Col as={NavLink} exact to="/categories" style={{ textAlign: "left", textDecoration:"none", color:"white" }}>Categories</Col>
          </Row>
          <Row style={{ marginRight: "50px", marginTop: "30px" }}>
            <Col as={NavLink} exact to="/privacy" style={{ textAlign: "left", textDecoration:"none", color:"white" }}>Privacy</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Options;
