import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Media from "./pages/Media";
import Nav from "./components/Nav";

const App = () => (

    <Router>
      <div>
        <Nav getGifs={this.getGifs}/>
        <Switch>
          <Route exact path="/" component={Media} />
        </Switch>
      </div>
    </Router>  
 );

export default App;
