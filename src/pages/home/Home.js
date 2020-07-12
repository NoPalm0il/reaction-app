import React from "react";
import Meme from "../../components/meme/MemeComponent";
import "./Home.css";
import logo from "../../assets/logo.svg";

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
        {this.state.ids.map((meme) => (
          <Meme id={meme.id} memage={logo} />
        ))}
      </div>
    );
  }
}
