import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Advertise extends Component {
  render() {
    return (
      <Card style={{backgroundColor:"#151515", marginLeft:"50px", marginTop:"150px"}}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Advertise;
