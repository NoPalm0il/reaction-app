import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import services from "../../services";
import AuthContext from "../../configs/authContext";

export default class ToggleBt extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      togVal: false,
      currMeme: {
        votes: -1,
      },
      votes: -1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currMeme: nextProps.currMeme }, () => {
      if (this.context.user)
        services.user
          .isLiked(this.state.currMeme.id, {
            username: this.context.user.username,
          })
          .then((data) => this.setState({ togVal: data.isLiked }))
          .catch((err) => console.error(err.message));
      this.setState({ votes: this.state.currMeme.votes });
    });
  }

  handleChange(value) {
    if (!this.context.user) return;

    if (value) {
      this.setState(
        {
          togVal: !this.state.togVal,
          votes: this.state.votes + 1,
        },
        () => {
          services.meme
            .incVotes(this.state.currMeme.id, {
              username: this.context.user.username,
            })
            .catch((err) => console.error(err.message));
        }
      );
    } else {
      this.setState(
        {
          togVal: !this.state.togVal,
          votes: this.state.votes - 1,
        },
        () => {
          services.meme
            .decVotes(this.state.currMeme.id, {
              username: this.context.user.username,
            })
            .catch((err) => console.error(err.message));
        }
      );
    }
  }

  render() {
    return (
      <Button
        active={this.state.togVal}
        variant={this.state.togVal ? "primary" : "secondary"}
        onClick={(e) => {
          e.preventDefault();
          this.handleChange(!this.state.togVal);
        }}
      >
        <span role="img" aria-label="upvote">👍</span>Upvotes: {this.state.votes}
      </Button>
    );
  }
}
