import React from "react";
import { Switch, Route } from "react-router-dom";
import PropertyList from "../property/PropertyList";
import SignInForm from "../common/SignInForm";
import SignUpForm from "../common/SignUpForm";
import FavouritesList from "../favourite/FavouritesList";
import BookingsList from "../booking/BookingsList";
import BookingForm from "../booking/BookingForm";
import PropertyShow from "../property/PropertyShow";
import Welcome from "../common/Welcome";
import api from "../../api";

class Guest extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.validateUser();
  }

  validateUser = () => {
    api.guestsValidate().then(data => {
      this.setState({
        user: data
      });
    });
  };

  signin = user => {
    api.guestSignIn(user).then(user => {
      this.setState(
        {
          user: {
            ...user
          }
        },
        () => {
          this.props.history.push("/properties");
        }
      );
    });
  };

  makeBooking = deets => {
    let bookingObj = {
      start_date: deets.start_date,
      end_date: deets.end_date,
      property_id: deets.id,
      user: this.state.user.id
    };
    api.makeBooking(bookingObj).then(json => console.log(json));
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
        <Route
          exact
          path="/properties/:id/book/:start_date/:end_date"
          component={BookingForm}
        />
      </Switch>
    );
  }
}

export default Guest;
