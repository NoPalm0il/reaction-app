import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import services from "../../services";
import AuthContext from "../../configs/authContext";

export default class Login extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = { username: "admin", password: "admin" };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    services.user
      .login(this.state)
      .then((data) => {
        this.context.login({ username: this.state.username, ...data });
        this.props.history.push("/");
      })
      .catch((err) => {});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="Login">
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type=""
              placeholder="Your username"
              value={username}
              onChange={(evt) => this.setState({ username: evt.target.value })}
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
