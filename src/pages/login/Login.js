import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import services from "../../services";
import AuthContext from "../../configs/authContext";

export default class Login extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = { email: "admin@admin.adm", password: "admin" };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    services.user
      .login(this.state)
      .then((data) => {
        this.context.login({ email: this.state.email, ...data });
        this.props.history.push("/");
      })
      .catch((err) => {});
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="Login">
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(evt) => this.setState({ email: evt.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(evt) => this.setState({ password: evt.target.value })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
