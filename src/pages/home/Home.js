//the homepage, which contains the navbar, the list of memes, the sidebar of categories and the right sided advertisement
//the homepage is where the user can interact with the application in itself as well as, where he can enjoy the memes

import React from "react";
import Meme from "../../components/meme/MemeComponent";
import Sidebar from "../../components/global/Sidebar";
import ScrollTopArrow from "../../components/global/ScrollTopArrow";
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

  render() {
    const { memes } = this.state;
    return (
      <div className="Home">
        {/*the sidebar containing all the categories that the user can explore*/}
        <Sidebar className="sidenav" />

        {/*the central list of memes posted by all the users enrolled in React.ion*/}
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

        {/*the exemplary advertisement (on the right side of the homepage)*/}
        <div class="advert">
          <img
            alt="advert"
            src="https://miro.medium.com/max/360/1*ibN0ptxrg6LkZ5DZbKv2YA.png"
            float="right"
          ></img>
        </div>

        {/*the button that allows the user to scroll all the way up to the beginning of the page*/}
        <ScrollTopArrow />
      </div>
    );
  }
}
