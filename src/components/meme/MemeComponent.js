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
    this.setState({
      id: this.props.memeKey,
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

    const { title, author, memage } = this.state;

    return (
      <>
        <br />
        <Card style={cardstyle}>
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={memage} />
            <div style={{ float: "right", fontSize: "15px" }}>
            meme by: {author}
          </div>
          </Card.Body>
          <Card.Footer>
            <ToggleBt memeKey={this.props.memeKey} currMeme={this.state} />
          </Card.Footer>
        </Card>
        <br />
      </>
    );
  }
}
