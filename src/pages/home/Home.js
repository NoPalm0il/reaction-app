import React from "react";
import Meme from "../../components/meme/MemeComponent";
import "./Home.css";
import services from "../../services";
import { ListGroup } from "react-bootstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: undefined,
    };
  }

  componentDidMount() {
    services.meme
      .getAll()
      .then((value) => this.setState({ memes: value.reverse() }))
      .catch((err) => this.setState({ error: err }));
  }

  componentDidUpdate() {}

  render() {
    const { memes } = this.state;
    return (
      <div className="Home">
        <div class="sidenav">
          <a href="#about">
            <span role="img" aria-label="hot">
              🔥
            </span>
            Hot
          </a>
          <a href="#services">
            <span role="img" aria-label="funny">
              😂
            </span>
            Funny
          </a>
          <a href="#clients">
            <span role="img" aria-label="gaming">
              🎮
            </span>
            Gaming
          </a>
          <a href="#contact">
            <span role="img" aria-label="sports">
              ⚽️
            </span>
            Sports
          </a>
          <a href="#about">
            <span role="img" aria-label="cool">
              🕶
            </span>
            Cool
          </a>
          <a href="#services">
            <span role="img" aria-label="tech">
              🖥
            </span>
            Tech
          </a>
          <a href="#clients">
            <span role="img" aria-label="cars">
              🏎
            </span>
            Cars
          </a>
          <a href="#contact">
            <span role="img" aria-label="politics">
              ⚖️
            </span>
            Politics
          </a>
        </div>

        <ListGroup>
          {memes.map(({ _id, category, title, author, memage, votes }) => (
            <Meme
              key={_id}
              memeKey={_id}
              category={category}
              title={title}
              author={author}
              memage={memage}
              votes={votes}
            />
          ))}
        </ListGroup>
        <div class="advert">
          <img
          alt="advert"
            src="https://miro.medium.com/max/360/1*ibN0ptxrg6LkZ5DZbKv2YA.png"
            float="right"
          ></img>
        </div>
      </div>
    );
  }
}
