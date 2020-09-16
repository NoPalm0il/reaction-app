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
      categories: [
        "Choose One",
        "Hot",
        "Funny",
        "Gaming",
        "Sports",
        "Cool",
        "Tech",
        "Cars",
        "Politics",
      ],
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.context.user == null)
      return;

    if (
      this.state.category === "Choose One" ||
      this.state.category === "" ||
      !this.state.memage
    ) {
      alert("Choose category and a memage");
      return;
    }

    this.setState(
      { author: this.context.user.username, publish: new Date().toJSON() },
      () => {
        const jsonData = (({
          title,
          category,
          author,
          publish,
          memage,
          votes,
        }) => ({
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
      }
    );
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
    const { title, category, categories } = this.state;

    return (
      <div className="CreateMeme">
        <div className="center">Feeling funny hun?</div>

        <Form onSubmit={(evt) => this.handleSubmit(evt)}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(evt) => this.setState({ title: evt.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(evt) => this.setState({ category: evt.target.value })}
              as="select"
              size="lg"
            >
              {categories.map((cat) => (
                <option value={cat}>{cat}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Memage</Form.Label>
            <Form.Control
              type="file"
              onChange={(evt) => this.handleSelectMemage(evt)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Choose
          </Button>
        </Form>
      </div>
    );
  }
}
