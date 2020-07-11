import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Advertise extends Component {
  render() {
    return (
      <Card style={{backgroundColor:"#151515", marginLeft:"50px", marginTop:"150px"}}>
        <Card.Body>
          <Card.Title>Advert</Card.Title>
          <Card.Text>
            Here we can put any type of ad of our choice, even with images. The main goal is to give the impression of real as much as possible
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Advertise;
