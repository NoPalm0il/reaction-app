import React, { Component } from "react";
import Meme from "../../components/meme/MemeComponent";
import "./Profile.css";
import services from "../../services";
import { ListGroup } from "react-bootstrap";
import AuthContext from "../../configs/authContext";


class Profile extends Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: undefined,
    };
  }

  componentDidMount() {
    services.meme
      .getQuery(this.context.user.username)
      .then((value) => this.setState({ memes: value }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const {memes} = this.state;

    return (
      <div className="Profile">
        <ListGroup>
          {memes.map(({ _id, category, title, author, memage, votes }) => (
            <Meme
              key={_id}
              category={category}
              title={title}
              author={author}
              memage={memage}
              votes={votes}
            />
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default Profile;
