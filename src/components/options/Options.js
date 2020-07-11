import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Options extends Component {
  render() {
    return (
      <div>
        <Container style={{marginTop:"150px"}}>
          <Row style={{ marginRight:"50px", marginTop:"30px" }}>
            <Col style={{ textAlign:"left" }} >Home</Col>
          </Row>
          <Row style={{ marginRight:"50px", marginTop:"30px" }}>
            <Col style={{ textAlign:"left" }}>Hot</Col>
          </Row>
          <Row style={{ marginRight:"50px", marginTop:"30px" }}>
            <Col style={{ textAlign:"left" }}>Categories</Col>
          </Row>
          <Row style={{ marginRight:"50px", marginTop:"30px" }}>
            <Col style={{ textAlign:"left" }}>Privacy</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Options;
