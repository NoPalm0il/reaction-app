//the main component of the meme, where all its info is showed
//a meme has an id, a category, a title, an author, a memage (which is the image of the meme), and the total votes (upvotes)

import React, { Component } from "react";
import { Card, Button, Table, Form } from "react-bootstrap";
import ToggleBt from "./ToggleBt";
import services from "../../services";
import AuthContext from "../../configs/authContext";

export default class Meme extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      category: "",
      title: "",
      author: "",
      memage: "",
      votes: 0,
      comments: [{ author: "", comment: "" }],
      sendComment: "",
      showCommentSection: false,
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
      comments: this.props.comments,
    });
  }

  handleToggleComments(e) {
    e.preventDefault();

    this.setState({ showCommentSection: !this.state.showCommentSection });
  }

  handleSubmitComment(evt) {
    evt.preventDefault();

    if (!this.context.user) return;
    if(this.state.sendComment === "")
      return;

    services.meme
      .addComment(this.state.id, {
        author: this.context.user.username,
        comment: this.state.sendComment,
      })
      .then(() => this.setState({ comments: this.props.comments }))
      .catch((err) => console.error(err));
    
      window.location.reload(false);
  }

  render() {
    const cardstyle = {
      width: "40rem",
      backgroundColor: "#303030",
      color: "white",
    };

    const { title, author, memage, comments } = this.state;

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
            <Button
              active={this.state.showCommentSection}
              onClick={(e) => this.handleToggleComments(e)}
            >
              Comments
            </Button>
          </Card.Footer>
          <Card.Footer>
            {!this.state.comments ? (
              this.state.showCommentSection ? (
                <Form onSubmit={(evt) => this.handleSubmitComment(evt)}>
                  <Form.Control
                    value={this.state.sendComment}
                    onChange={(evt) =>
                      this.setState({ sendComment: evt.target.value })
                    }
                  />
                  <Button variant="primary" type="submit">
                    Place Comment
                  </Button>
                </Form>
              ) : (
                <p style={{ fontSize: "20px" }}>0 comments</p>
              )
            ) : !this.state.showCommentSection ? (
              <p style={{ fontSize: "20px" }}>
                {this.state.comments.lastIndexOf() + 1} comments
              </p>
            ) : (
              <>
                <Table variant="dark">
                  {comments.map((cmt) => (
                    <tr>
                      <td>{cmt.author}</td>
                      <td>{cmt.comment}</td>
                    </tr>
                  ))}
                </Table>
                <Form onSubmit={(evt) => this.handleSubmitComment(evt)}>
                  <Form.Control
                    value={this.state.sendComment}
                    onChange={(evt) =>
                      this.setState({ sendComment: evt.target.value })
                    }
                  />
                  <Button variant="primary" type="submit">
                    Place Comment
                  </Button>
                </Form>
              </>
            )}
          </Card.Footer>
        </Card>
        <br />
      </>
    );
  }
}
