import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import React, { Component } from "react";

export default class ToggleBt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togVal: false,
    };
  }

  //TODO: work on this toggle and http post to change vote
  handleChange(value) {
    if (value) this.setState({ votes: this.state.votes + 1, togVal: !this.state.togVal });
    else this.setState({ votes: this.state.votes - 1, togVal: !this.state.togVal });
    console.log(value);
  }

  render() {
    const { togVal } = this.state;
    return (
      <>
        <ButtonGroup toggle>
          <ToggleButton
            type="radio"
            variant="secondary"
            name="radio"
            value={togVal}
            checked={togVal}
            onChange={(e) => {
              e.preventDefault();
              this.handleChange(e.currentTarget.value);
            }}
          >
            Upvote: {this.props.votes}
          </ToggleButton>
        </ButtonGroup>
      </>
    );
  }
}
