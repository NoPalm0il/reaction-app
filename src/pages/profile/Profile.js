//the page where the user gets to see his profile, which contains his memes
//in this page the user can also delete any meme that he posted


import React, { Component } from "react";
import Meme from "../../components/meme/MemeComponent";
import "./Profile.css";
import services from "../../services";
import { ListGroup, Button, Modal } from "react-bootstrap";
import AuthContext from "../../configs/authContext";
import ScrollTopArrow from "../../components/global/ScrollTopArrow";

class Profile extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: undefined,
      show: false,
      rmId: "",
      showLikes: false,
      viewMyMemes: true,
    };
  }

  componentDidMount() {
    this.loadUserMemes();
  }

  loadUserMemes() {
    services.user
      .getMemes(this.context.user.username)
      .then((usermemes) =>
        services.meme
          .getArray({ memes: usermemes })
          .then((res) => this.setState({ memes: res.reverse() }))
          .catch((err) => console.error(err))
      )
      .catch((err) => this.setState({ error: err }));
  }

  loadUserLikedMemes() {
    services.user
      .getLikedMemes(this.context.user.username)
      .then((likedmemes) =>
        services.meme
          .getArray({ memes: likedmemes })
          .then((res) => this.setState({ memes: res.reverse() }))
          .catch((err) => console.error(err))
      )
      .catch((err) => this.setState({ error: err }));
  }

  handleCloseModal() {
    this.setState({ show: false });
  }

  handleOpenModal(e, id) {
    e.preventDefault();
    this.setState({ show: true, rmId: id });
  }

  handleRemoveMeme(e) {
    e.preventDefault();

    services.meme
      .remove(this.state.rmId)
      .then(this.forceUpdate())
      .catch((err) => console.warn(err));

    this.handleCloseModal();
  }

  handleViewMemes(e) {
    e.preventDefault();

    if (this.state.viewMyMemes) this.loadUserLikedMemes();
    else this.loadUserMemes();

    this.setState({ viewMyMemes: !this.state.viewMyMemes });
  }

  render() {
    const { memes, show } = this.state;

    return (
      <div className="Profile">
        <Button onClick={(e) => this.handleViewMemes(e)}>Switch view</Button>

        {this.state.viewMyMemes ? (
          <h1 className="title">My Memes:</h1>
        ) : (
          <h1 className="title">My Liked Memes:</h1>
        )}

        <ListGroup>
          {memes.map(
            ({ _id, category, title, author, memage, votes, comments }) => (
              <>
                <Meme
                  key={_id}
                  memeKey={_id}
                  category={category}
                  title={title}
                  author={author}
                  memage={memage}
                  votes={votes}
                  comments={comments}
                />

                <Button
                  className="dltBt"
                  variant="danger"
                  onClick={(e) => this.handleOpenModal(e, _id)}
                >
                  Delete Meme
                </Button>
              </>
            )
          )}
        </ListGroup>

        <ScrollTopArrow />

        {/*the user gets a second chance to the decide if he wants to delete the meme or not*/}
        <Modal show={show} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure about that?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleCloseModal}>
              Close, I still want my meme
            </Button>
            <Button variant="danger" onClick={(e) => this.handleRemoveMeme(e)}>
              Delete Meme :(
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Profile;
