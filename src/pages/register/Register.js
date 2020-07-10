import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import services from "../../services";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    services.user.register(this.state).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="Register">
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter username"
              value={username}
              onChange={(evt) => this.setState({ username: evt.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(evt) => this.setState({ email: evt.target.value })}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(evt) => this.setState({ password: evt.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Become a Memer
          </Button>
        </Form>
      </div>
    );
  }
}
