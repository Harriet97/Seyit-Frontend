import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropertyList from "../property/PropertyList";
import SignInForm from "../common/SignInForm";
import SignUpForm from "../common/SignUpForm";
import FavouritesList from "../favourite/FavouritesList";
import BookingsList from "../booking/BookingsList";
import BookingForm from "../booking/BookingForm";
import PropertyShow from "../property/PropertyShow";
import Welcome from "../common/Welcome";
import api from "../../api";

const ProtectedRoute = props => {
  if (
    !props.user &&
    props.location !== "/signin" &&
    props.location !== "/signup"
  ) {
    return <Redirect to="/signin" />;
  } else {
    return <Route {...props} />;
  }
};

class Guest extends React.Component {
  state = {
    user: null,
    awaitingValidation: true
  };

  componentDidMount() {
    this.validateUser();
  }

  validateUser = () => {
    api.guestsValidate().then(data => {
      if (!data.error) {
        this.setState({
          user: data
        });
      }

      this.setState({
        awaitingValidation: false
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
      startDate: deets.start_date,
      endDate: deets.end_date,
      property_id: deets.id,
      guest_id: this.state.user.id
    };
    api.makeBooking(bookingObj).then(this.props.history.push("/bookings"));
  };

  makeFavourite = property => {
    let favObj = {
      property_id: property.id,
      guest_id: this.state.user.id
    };
    console.log(favObj);
    api.makeFavourite(favObj).then(this.props.history.push("/favourites"));
  };

  render() {
    if (this.state.awaitingValidation) return <div>Loading...</div>;

    return (
      <Switch>
        <Route exact path="/" component={() => <Welcome />} />
        <Route exact path="/properties" component={() => <PropertyList />} />
        <Route
          exact
          path="/signin"
          component={() => <SignInForm signin={this.signin} />}
        />
        <Route exact path="/signup" component={() => <SignUpForm />} />
        <ProtectedRoute
          location={this.props.location.pathname}
          user={this.state.user}
          path="/favourites"
          render={props => <FavouritesList {...props} />}
        />
        <ProtectedRoute
          location={this.props.location.pathname}
          user={this.state.user}
          path="/bookings"
          render={props => <BookingsList {...props} />}
        />
        <ProtectedRoute
          location={this.props.location.pathname}
          user={this.state.user}
          path="/properties/:id"
          render={props => (
            <PropertyShow {...props} makeFavourite={this.makeFavourite} />
          )}
        />
        <ProtectedRoute
          user={this.state.user}
          location={this.props.location.pathname}
          path="/properties/:id/book/:start_date/:end_date"
          render={props => (
            <BookingForm {...props} makeBooking={this.makeBooking} />
          )}
        />
      </Switch>
    );
  }
}

export default Guest;
