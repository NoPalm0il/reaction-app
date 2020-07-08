import React, { Component } from "react";
import "./About.css";
import Card from "react-bootstrap/Card";

class About extends Component {
  render() {
    return (
        <Card
          style={{ width: "18rem", justifyContent: "center", marginLeft:"auto",
                marginRight:"auto" }}
        >
          <Card.Img variant="top" src="../../../murteira.jpeg" />
          <Card.Body>
            <Card.Title>Tiago Murteira</Card.Title>
            <Card.Text>
              Tiago Murteira, conhecido como "Pai Grande" na região geográfica
              onde habita, é um estudante de Engenharia Informática
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
    );
  }
}

export default About;
