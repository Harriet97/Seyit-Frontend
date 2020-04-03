import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import FlatList from "./components/FlatList";
import FlatShow from "./components/FlatShow";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import FavouritesList from "./components/FavouritesList";
import BookingsList from "./components/BookingsList";
import Admin from "./components/Admin";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Welcome />} />
        <Route exact path="/flats" component={() => <FlatList />} />
        <Route exact path="/sign-in" component={() => <SignInForm />} />
        <Route exact path="/sign-up" component={() => <SignUpForm />} />
        <Route exact path="/favourites" component={() => <FavouritesList />} />
        <Route exact path="/bookings" component={() => <BookingsList />} />
        <Route exact path="/flats/show" component={FlatShow} />
        <Route exact path="/admin" component={Admin} />
        {/* <div className="NavBar">
          <NavBar />
        </div> */}
      </div>
    );
  }
}

export default App;
