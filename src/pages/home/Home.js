import React from "react";
import Meme from "../../components/meme/MemeComponent";
import "./Home.css";
import logo from "../../assets/logo.svg";
import SubmitDialogComponent from "../../components/meme/SubmitDialog";
import { Button } from "react-bootstrap";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: undefined,
      toCreate: false,
      favorites: false,
    };
  }
  render() {
    const { memes, error, toCreate } = this.state;
    return (
      <div className="Home">
        <div className="buttons-container">
          <Button
            variant="outline-primary"
            style={{ alignSelf: "flex-start" }}
            onClick={() => this.setState({ toCreate: true })}
          >
            Add new book
          </Button>
        </div>
        <SubmitDialogComponent
          show={toCreate}
          handleClose={() => this.setState({ toCreate: false })}
          submited={(createdMeme) =>
            this.setState({ memes: [...memes, createdMeme], toCreate: false })
          }
        />
        <Meme id={0} memage={logo} />
      </div>
    );
  }
}
