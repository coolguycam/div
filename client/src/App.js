import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Media from "./pages/Media";
import Nav from "./components/Nav";

const App = () => (
  // state = {
  //   gifs: [],
  //   source: "",
  //   alt: ""
  // };

  // render() {
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Media} />
        {/* <Route exact path="/search" component={Search} /> */}
      </Switch>
    </div>
  </Router>
  //   }
  // }
);

export default App;
