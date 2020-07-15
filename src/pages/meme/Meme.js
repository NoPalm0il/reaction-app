import React, { Component } from "react";
import services from "../../services";
import SubmitDialogComponent from "../../components/meme/SubmitDialog";
import SearchFormComponent from "../../components/meme/SearchForm";
import "./Meme.css";

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      error: undefined,
      toCreate: false,
      favorites: false,
    };
  }

  componentDidMount() {
    this.getList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.getList();
    }
  }

  getList(searchText) {
    if (this.props.location.pathname === "/meme/list")
      services.meme
        .getAll(searchText)
        .then((value) => this.setState({ memes: value, favorites: false }))
        .catch((err) => this.setState({ error: err }));
    else
      services.user
        .getMemes()
        .then((value) => this.setState({ memes: value, favorites: true }))
        .catch((err) => this.setState({ error: err }));
  }
o
  addToFavorites(memeId) {
    services.user
      .addMeme(memeId)
      .then(() => alert("successfuly added"))
      .catch((err) => this.setState({ error: err }));
  }
  removeFromFavorites(memeId) {
    services.user
      .removeMeme(memeId)
      .then(() =>
        this.setState((state) => ({
          memes: state.memes.filter((b) => b._id !== memeId),
        }))
      )
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const { memes: memes, error, toCreate, favorites } = this.state;

    return (<div></div>);
  }
}

export default Meme;
