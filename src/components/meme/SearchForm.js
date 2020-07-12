import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class SearchFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.text);
  }

  render() {
    return (
      <Form onSubmit={(evt) => this.handleSubmit(evt)}>
        <Row>
          <Col style={{ padding: 0 }}>
            <Form.Group>
              <Form.Control value={this.state.text} onChange={(evt) => this.setState({ text: evt.target.value })} />
            </Form.Group>
          </Col>
          <Col xs={2} style={{ padding: 0 }}>
            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}