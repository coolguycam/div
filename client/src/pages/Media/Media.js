import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import GphApiClient from "giphy-js-sdk-core";
const client = GphApiClient("dc6zaTOxFJmzC");

class Media extends Component {
  // Initialize this.state.books as an empty array
  state = {
    gifs: [],
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    this.loadGifs();
  }

  loadGifs = () => {
    API.getGifs()
      .then(res =>
        this.setState({ gifs: res.data })
      )
      .catch(err => console.log(err));
  };

  handleSubmit = event => {

  }
  // addBook = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
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
  //   API.deleteBook(id)
  //   .then(res => this.loadBooks())
  //   .catch(err => console.log(err));
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="sm-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Media;
