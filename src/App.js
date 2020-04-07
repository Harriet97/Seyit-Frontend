import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Admin from "./components/host/Admin";
import Guest from "./components/guest/Guest";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Guest} />
        </Switch>

        {/* <div className="NavBar">
          <NavBar />
        </div> */}
      </div>
    );
  }
}

export default App;
