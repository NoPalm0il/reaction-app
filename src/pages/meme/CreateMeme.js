import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import memeService from "../../services/meme";
import AuthContext from "../../configs/authContext";

export default class CreateMeme extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      author: "",
      publish: "",
      votes: 0,
      memage: null,
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.setState({ author: this.context.user.username, publish: new Date().toJSON() }, () => {
      const jsonData = (({ title, category, author, publish, memage, votes }) => ({
        title,
        category,
        author,
        publish,
        memage,
        votes,
      }))(this.state);

      memeService
        .create(jsonData)
        .then((result) => {
          this.handleMemageSubmit({ ...jsonData, _id: result._id });
        })
        .then(this.props.history.push("/"))
        .catch((evt) => console.error("error: " + evt));
    });
  }

  handleMemageSubmit(memeData) {
    if (this.state.memage)
      memeService.setMemage(memeData._id, this.state.memage);
  }

  handleSelectMemage(evt) {
    const formData = new FormData();
    formData.append("memage", evt.target.files[0]);
    this.setState({ memage: formData });
  }

  render() {
    const { title, category } = this.state;

    return (
      <div className="CreateMeme">
        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
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
              onChange={(evt) => this.setState({ category: evt.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Cover</Form.Label>
            <Form.Control
              type="file"
              onChange={(evt) => this.handleSelectMemage(evt)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
