import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ToggleBt  from "./ToggleBt";
import logo from "../../assets/logo.svg";

export default class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      title: "",
      author: "",
      memage: "",
      votes: 0,
    };
  }

  componentDidMount() {
    this.setState({
      category: this.props.category,
      title: this.props.title,
      author: this.props.author,
      memage: this.props.memage,
      votes: this.props.votes,
    });
  }

  render() {
    const cardstyle = {
      width: "40rem",
      backgroundColor: "#303030",
      color: "white",
    };

    const {title, author, memage, votes} = this.state;

    return (
      <>
        <br />
        <Card style={cardstyle}>
          <Card.Header>
            Author: {author} | {title}
          </Card.Header>
          <Card.Body>
            {this.props.memage ? (
              <Card.Img variant="top" src={memage} />
            ) : (
              <Card.Img variant="top" src={logo} />
            )}
          </Card.Body>
          <Card.Footer>
            <ToggleBt votes={votes}/>
          </Card.Footer>
        </Card>
        <br />
      </>
    );
  }
}
