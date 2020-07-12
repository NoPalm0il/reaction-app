import React from "react";
import Meme from "../../components/meme/Meme";
import "./Home.css";
import logo from "../../assets/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import Advertise from "../../components/advertise/Advertise";
import Options from "../../components/options/Options";
import Button from 'react-bootstrap/Button'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: Array(9).fill(0),
    };
  }
  render() {
    return (
      <div className="Home">
        <Container>
          <Row>
            <Col>
              <Options />
            </Col>
            <Col xs={7}>
              <Button variant="outline-light" style={{margin:"50px", marginTop:"90px", fontSize:"20px"}}>+</Button>
              {this.state.ids.map((meme) => (
                <Meme id={meme} memage={logo} />
              ))}
            </Col>
            <Col>
              <Advertise />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
