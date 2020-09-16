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
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    services.user
      .getMemes(this.context.user.username)
      .then((usermemes) => {
        services.meme
          .getArray({ memes: usermemes })
          .then((res) => this.setState({ memes: res.reverse() }))
          .catch((err) => console.error(err));
      })
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

  render() {
    const { memes, show } = this.state;

    return (
      <div className="Profile">
        <div className="title" >My Memes:</div>
        
        <ListGroup>
          {memes.map(({ _id, category, title, author, memage, votes }) => (
            <>
              <Meme
                key={_id}
                memeKey={_id}
                category={category}
                title={title}
                author={author}
                memage={memage}
                votes={votes}
              />

              <Button
                className="dltBt"
                variant="danger"
                onClick={(e) => this.handleOpenModal(e, _id)}
              >
                Delete Meme
              </Button>
            </>
          ))}
        </ListGroup>

        <ScrollTopArrow />

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
