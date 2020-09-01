import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import React, { Component } from "react";

export default class ToggleBt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      togVal: false,
      votes: 0,
    };
  }

  componentDidMount() {
    this.setState({ votes: this.props.votes });
  }

  //TODO: work on this toggle and http post to change vote
  handleChange(value) {
    if (value) this.setState({ togVal: !this.state.togVal, votes: this.state.votes + 1 });
    else this.setState({ togVal: !this.state.togVal, votes: this.state.votes - 1 });
    this.forceUpdate();
    console.log(value);
  }

  render() {
    const { togVal, votes } = this.state;
    return (
      <>
        <ToggleButtonGroup type="checkbox"  className="mb-2">
          <ToggleButton
            value={togVal}
            variant="secondary"
            onChange={(e) => {
              e.preventDefault();
              this.handleChange(!togVal);
            }}
          >
            Upvotes: {votes}
          </ToggleButton>
        </ToggleButtonGroup>
      </>
    );
  }
}
