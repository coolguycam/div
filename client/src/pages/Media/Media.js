import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class Media extends Component {
  // Initialize this.state.gifs as an empty array
  state = {
    gifs: [],
    source: "",
    alt: ""
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    this.loadGifs();
  }

  loadGifs = () => {
    API.getGifs()
      .then(res => this.setState({ gifs: res.data, source: "", alt: "" }))
      .catch(err => console.log(err));
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.source && this.state.alt) {
  //     API.saveGif({
  //       source: this.state.source,
  //       alt: this.state.alt
  //     })
  //       .then(res => this.loadGifs())
  //       .catch(err => console.log(err));
  //   }
  // };

  

  // handleDelete = id => {
  //   API.deleteGif(id)
  //   .then(res => this.loadGifs())
  //   .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            {this.state.gifs.length ? (
              <List>
                {this.state.gifs.map(book => (
                  <ListItem key={book._id}>
                    <img src={book.source} alt={book.alt} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Media;
