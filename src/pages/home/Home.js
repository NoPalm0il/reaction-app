import React from "react";
import Meme from "../../components/meme/Meme";
import "./Home.css";
import logo from "../../assets/logo.svg";
import { Container, Row, Col } from "react-bootstrap";

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
            <Col>1 of 3</Col>
            <Col xs={7}>
              {this.state.ids.map((meme) => (
                <Meme id={meme} memage={logo} />
              ))}
            </Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
