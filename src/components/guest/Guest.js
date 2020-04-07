import React from "react";
import { Switch, Route } from "react-router-dom";
import PropertyList from "../property/PropertyList";
import SignInForm from "../common/SignInForm";
import SignUpForm from "../common/SignUpForm";
import FavouritesList from "../favourite/FavouritesList";
import BookingsList from "../booking/BookingsList";
import PropertyShow from "../property/PropertyShow";
import Welcome from "../common/Welcome";

class Guest extends React.Component {
  state = {
    user: null
  };

  signin = user => {
    // fetch().then().then()
    this.setState({
      user: {
        ...user,
        id: 1
      }
    });

    this.props.history.push("/properties");
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Welcome />} />
        <Route exact path="/properties" component={() => <PropertyList />} />
        <Route
          exact
          path="/sign-in"
          component={() => <SignInForm signin={this.signin} />}
        />
        <Route exact path="/sign-up" component={() => <SignUpForm />} />
        <Route exact path="/favourites" component={() => <FavouritesList />} />
        <Route exact path="/bookings" component={() => <BookingsList />} />
        <Route exact path="/properties/:id" component={PropertyShow} />
      </Switch>
    );
  }
}

export default Guest;
