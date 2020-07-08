import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./About.css";

class About extends Component {
  render() {
    return (
      <CardDeck style={{backgroundColor:"#202020", padding:"100px"}}>
        <Card
          style={{
            marginLeft: "320px",
            marginRight: "50px",
          }}
        >
          <Card.Img
            variant="top"
            src="../../../murteira.jpeg"
            style={{ width: "auto", height: "auto" }}
          />
          <Card.Body>
            <Card.Title>Tiago Murteira</Card.Title>
            <Card.Text>
              aluno nº21087
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>

        <Card
          style={{
            marginLeft: "50px",
            marginRight: "320px",
          }}
        >
          <Card.Img
            variant="top"
            src="../../../murteira.jpeg"
            style={{ width: "auto", height: "auto" }}
          />
          <Card.Body>
            <Card.Title>João Ramos</Card.Title>
            <Card.Text>
              Colocar a fotografia do Ramos
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          </Card.Footer>
        </Card>
      </CardDeck>
    );
  }
}

export default About;
