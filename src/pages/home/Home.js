import React from "react";
import Meme from "../../components/meme/Meme";
import "./Home.css";
import logo from "../../assets/logo.svg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Meme id={0} memage={logo} />
        <Meme id={1} memage={logo} />
        <Meme id={2} memage={logo} />
        <Meme id={3} memage={logo} />
      </div>
    );
  }
}
