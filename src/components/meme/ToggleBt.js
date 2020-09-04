import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import React, { Component } from "react";
import services from "../../services";

export default class ToggleBt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togVal: false,
      votes: 0,
      currMeme: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ votes: nextProps.votes });
  }

  handleChange(value) {
    if (value) {
      this.setState(
        {
          togVal: !this.state.togVal,
          votes: this.state.votes + 1,
        },
        () => {
          services.meme
            .getOne(this.props.memeKey)
            .then((value) =>
              this.setState({ currMeme: value }, () => {
                var currMeme = this.state.currMeme;
                currMeme.votes = this.state.votes;
                this.setState({ currMeme: currMeme }, () => {
                  const jsonData = (({
                    title,
                    category,
                    author,
                    publish,
                    memage,
                    votes,
                  }) => ({
                    title,
                    category,
                    author,
                    publish,
                    memage,
                    votes,
                  }))(this.state.currMeme);
                  services.meme
                    .update(this.props.memeKey, jsonData).then((value) => console.log(value))
                    .catch((error) => console.err(error));
                });
              })
            )
            .catch((error) => console.err(error));
        }
      );
    } else {
      this.setState({
        togVal: !this.state.togVal,
        votes: this.state.votes - 1,
      });
    }
  }
  render() {
    return (
      <>
        <ToggleButtonGroup type="checkbox" className="mb-2">
          <ToggleButton
            value={this.state.togVal}
            variant="secondary"
            onChange={(e) => {
              e.preventDefault();
              this.handleChange(!this.state.togVal);
            }}
          >
            Upvotes: {this.state.votes}
          </ToggleButton>
        </ToggleButtonGroup>
      </>
    );
  }
}
