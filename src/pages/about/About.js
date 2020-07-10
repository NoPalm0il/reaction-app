import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <CardDeck style={{ backgroundColor: "#202020", padding: "100px" }}>
          <Card
            style={{
              marginLeft: "520px",
              marginRight: "64px",
              height: "500px",
            }}
          >
            <Card.Img
              variant="top"
              src="../../../murteira.jpeg"
              style={{
                width: "280px",
                height: "380px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Tiago Murteira
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                aluno nº21087
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>

          <Card
            style={{
              marginLeft: "64px",
              marginRight: "520px",
              height: "500px",
            }}
          >
            <Card.Img
              variant="top"
              src="../../../ramos.jpg"
              style={{
                width: "280px",
                height: "380px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                João Ramos
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                aluno nº21397
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default About;
