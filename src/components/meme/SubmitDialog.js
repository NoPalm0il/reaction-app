import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import memeService from "../../services/meme";

export default class SubmitDialogComponent extends React.Component {
  toEdit = false;
  currtime = new Date().toLocaleString();

  constructor(props) {
    super(props);
    this.toEdit = false; //props.meme !== undefined
    this.state = this.getFormState();
  }

  getFormState() {
    return this.toEdit
      ? { ...this.props.meme, memage: null }
      : {
          title: "",
          category: "",
          author: "",
          publish: "",
          memage: null,
        };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const jsonData = (({ title, category, author, publish }) => ({
      title,
      category,
      author,
      publish,
    }))(this.state);
    memeService
      .create(jsonData)
      .then((result) =>
        this.handleMemageSubmit({ ...jsonData, _id: result._id })
      );
  }

  handleMemageSubmit(memeData) {
    if (this.state.memage) {
      memeService.setMemage(memeData._id, this.state.memage).then((result) => {
        this.props.submited({ ...memeData, memage: result.url });
      });
    } else {
      this.props.submited(memeData);
    }
  }

  handleCancel() {
    this.setState(this.getFormState());
    this.props.handleClose();
  }

  handleSelectCover(evt) {
    const formData = new FormData();
    formData.append("memage", evt.target.files[0]);
    this.setState({ memage: formData });
  }

  render() {
    const { show } = this.props;
    const { title, category, author, publish } = this.state;

    return (
      <Modal show={show} onHide={this.handleCancel}>
        <Modal.Header>
          <Modal.Title>{this.toEdit ? "Edit book" : "Create book"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(evt) => this.setState({ title: evt.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>category</Form.Label>
              <Form.Control
                value={category}
                onChange={(evt) =>
                  this.setState({ category: evt.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={author}
                onChange={(evt) => this.setState({ author: evt.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Publish</Form.Label>
              <Form.Control
                type="number"
                value={publish}
                onChange={(evt) =>
                  this.setState({ publish: evt.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cover</Form.Label>
              <Form.Control
                type="file"
                onChange={(evt) => this.handleSelectCover(evt)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleCancel()}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
