import React from "react";
import Meme from "../../components/meme/Meme";
import "./Home.css";
import logo from "../../assets/logo.svg";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: Array(9).fill(Math.random() * 100),
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
