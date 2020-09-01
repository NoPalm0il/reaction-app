import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import memeService from '../../services/meme';

export default class RemoveDialogComponent extends React.Component {
  constructor (props) {
    super (props);
    this.state = {sure: false};
  }

  handleRemove () {
    memeService.remove (this.props.memeId).then (() => {
      this.props.removed ();
    });
  }

  render () {
    const {show, handleClose} = this.props;
    const {sure} = this.state;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove meme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you proceed this action this element will be permenantly deleted from the system!
          <br />
          Are you sure?
          <br />
          <Button onClick={() => this.setState ({sure: !sure})}>{sure ? "yes" : "no"}</Button>         
          
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            disabled={!sure}
            onClick={() => this.handleRemove ()}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}