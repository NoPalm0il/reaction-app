import React, { Component } from "react";
import { Card } from "react-bootstrap";
import {ToggleButtonExample} from "./toggleButton";

export default class Meme extends Component {
  render() {
    const cardstyle = {
      width: "40rem",
      backgroundColor: "#303030",
      color: "white",
    };

    return (
      <>
        <br />
        <Card id={this.props.id} style={cardstyle}>
          <Card.Body>
            <Card.Img variant="top" src={this.props.memage} />
          </Card.Body>
          <Card.Footer>
            <ToggleButtonExample />
          </Card.Footer>
        </Card>
        <br />
      </>
    );
  }
}
