import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Form>
          <Form.Group controlId="formGroupEmail" bsSize="large">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword" bsSize="large">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
