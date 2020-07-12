import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div class="jumbotron" style={{paddingTop:"15px", paddingBottom:"15px", marginRight:"500px", marginLeft:"100px", alignItems:"center"}}>
          <h1 class="display-4">Contact Us!</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a class="btn btn-primary btn-lg" href="/privacy" role="button">
            Privacy
          </a>
        </div>
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
