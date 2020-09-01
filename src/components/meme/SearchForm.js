import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";


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
    return <div></div>;
  }
}
