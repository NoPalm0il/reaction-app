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
      .then((value) => this.setState({ memes: value }))
      .catch((err) => this.setState({ error: err }));
  }

  componentDidUpdate() {}

  render() {
    const { memes } = this.state;
    return (
      <div className="Home">
        <ListGroup>
          {memes.map(({ _id, category, title, author, memage, votes }) => (
            <Meme key={_id} category={category} title={title} author={author} memage={memage} votes={votes} />
          ))}
        </ListGroup>
      </div>
    );
  }
}
