import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ToggleBt from "./ToggleBt";

export default class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      category: "",
      title: "",
      author: "",
      memage: "",
      votes: 0,
    };
  }

  componentDidMount() {
    this.setState((state, props) => ({
      id: props.memeKey,
      category: props.category,
      title: props.title,
      author: props.author,
      memage: props.memage,
      votes: props.votes,
    }));
  }

  render() {
    const cardstyle = {
      width: "40rem",
      backgroundColor: "#303030",
      color: "white",
    };

    const { title, author, memage } = this.state;

    return (
      <>
        <br />
        <Card style={cardstyle}>
          <Card.Header>
            Author: {author} | {title}
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={memage} />
          </Card.Body>
          <Card.Footer>
            <ToggleBt currMeme={this.state}/>
          </Card.Footer>
        </Card>
        <br />
      </>
    );
  }
}
