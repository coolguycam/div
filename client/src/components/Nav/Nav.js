import React from "react";
// import "./NavInput";
// import "./NavSubmit";
// import Nav from "../../components/Nav";
// import GphApiClient from "giphy-js-sdk-core";
// const client = GphApiClient("dc6zaTOxFJmzC");

// handleSubmit = event => {
//   event.preventDefault();
//   client
//     .search("gifs", { q: "cats" })
//     .then(response => {
//       response.data.forEach(gifObject => {
//         console.log(gifObject);
//       });
//     })
//     .catch(err => {});
// };

// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({
//     [name]: value
//   });
// };

const Nav = () => (
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">Div</a>
    <form class="form-inline">
      {/* <NavInput
        handleInputChange={this.handleInputChange}
        value={this.state.search}
      />
      <NavBtn handleSubmit={this.handleSubmit} /> */}
    </form>
  </nav>
);

export default Nav;
