import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./About.css";

//the about page where it has some information about the students and the website itself
//it contains a couple of demostrative paragraphs as well as the link to the IPT website
//it also shows two cards belonging to the authors of the website with their respective picture, name and student number
class About extends Component {
  render() {
    return (

      
      <div className="About">
        <div class="jumbotron-fluid" style={{paddingTop:"15px", paddingBottom:"15px", marginRight:"500px", marginLeft:"500px", alignItems:"center"}}>
          <h1 class="display-4">Contact Us!</h1>
          <p class="lead">
            If you have any difficulties acessing or enjoying our website
            please feel free to contact us! We will answer to your questions as quickly as we can.
          </p>
          <hr class="my-4" />
          <p>
            You can also access our University's website if you want direct access to where we study/work
          </p>
          <a class="btn btn-primary btn-lg" href="www.ipt.pt" role="button">
            Website
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
