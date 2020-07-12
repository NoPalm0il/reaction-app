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

    return (
      <Container>
        {error !== undefined && <Alert variant="danger">{error}</Alert>}

        <div className="buttons-container">
          <Button
            variant="outline-primary"
            style={{ alignSelf: "flex-start" }}
            onClick={() => this.setState({ toCreate: true })}
          >
            <FontAwesomeIcon icon={faPlus} />
            &nbsp;Add new meme
          </Button>
          {!favorites && (
            <SearchFormComponent search={(text) => this.getList(text)} />
          )}
        </div>

        <SubmitDialogComponent
          show={toCreate}
          handleClose={() => this.setState({ toCreate: false })}
          submited={(createdMeme) =>
            this.setState({ memes: [...memes, createdMeme], toCreate: false })
          }
        />

        <Table responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {memes.map((meme, index) => (
              <tr key={`meme${index}`}>
                <td>{meme.title}</td>
                <td>{meme.author}</td>
                <td style={{ textAlign: "right" }}>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.props.history.push(`/meme/details/${meme._id}`)
                    }
                  >
                    <FontAwesomeIcon icon={faInfo} />
                  </Button>
                  {favorites ? (
                    <Button
                      variant="outline-danger"
                      onClick={() => this.removeFromFavorites(meme._id)}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      onClick={() => this.addToFavorites(meme._id)}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Meme;
