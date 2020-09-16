import React from "react";
import Meme from "../../components/meme/MemeComponent";
import Sidebar from "../../components/global/Sidebar";
import "./Categories.css";
import services from "../../services";
import { ListGroup } from "react-bootstrap";
import ScrollTopArrow from "../../components/global/ScrollTopArrow";


export default class Hot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: undefined,
    };
  }

  componentDidMount() {
    services.meme
      .getCategoryMemes("Hot")
      .then((value) => this.setState({ memes: value.reverse() }, console.log(this.state.memes)))
      .catch((err) => this.setState({ error: err }));
  }
  componentDidUpdate() {}

  render() {
    const { memes } = this.state;
    return (
      <div className="Home">
        
        <Sidebar className="sidenav"/>

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

        <ScrollTopArrow />

      </div>
    );
  }
}
