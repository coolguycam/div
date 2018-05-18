import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import Nav from "../../components/Nav";
// import GphApiClient from "giphy-js-sdk-core";
// const client = GphApiClient("dc6zaTOxFJmzC");
// client
//     .search("gifs", { q: "cats" })
//     .then(res => {
//       res.data.forEach(gifObject => {
//         console.log(gifObject);
//       });
//     })
//     .catch(err => console.log(err))

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

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
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
                  <ListItem key={gif._id}>
                    <img src={gif.source} alt={gif.alt} />
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
