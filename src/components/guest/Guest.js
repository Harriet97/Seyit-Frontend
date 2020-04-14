import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropertyList from "../property/PropertyList";
import SignInForm from "../common/SignInForm";
import SignUpForm from "../common/SignUpForm";
import FavouritesList from "../favourite/FavouritesList";
import BookingsList from "../booking/BookingsList";
import BookingForm from "../booking/BookingForm";
import PropertyShow from "../property/PropertyShow";
import GuestAccount from "./GuestAccount";
import Welcome from "../common/Welcome";
import BookingShow from "../booking/BookingShow";
import MapView from "../common/MapView";
import api from "../../api";
import Navbar from "./Navbar";

const ProtectedRoute = (props) => {
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
    awaitingValidation: true,
  };

  componentDidMount() {
    this.validateUser();
  }

  validateUser = () => {
    api.guestsValidate().then((data) => {
      if (!data.error) {
        this.setState({
          user: data,
        });
      }

      this.setState({
        awaitingValidation: false,
      });
    });
  };

  signin = (user) => {
    api.guestSignIn(user).then((user) => {
      this.setState(
        {
          user: {
            ...user,
          },
        },
        () => {
          this.props.history.push("/properties");
        }
      );
    });
  };

  makeBooking = (deets) => {
    let bookingObj = {
      startDate: deets.start_date,
      endDate: deets.end_date,
      property_id: deets.id,
      guest_id: this.state.user.id,
    };
    console.log(bookingObj);
    api.makeBooking(bookingObj).then(this.props.history.push("/bookings"));
  };

  removeBooking = (booking) => {
    api.destroyBooking(booking);
  };

  makeGuestFavourite = (property) => {
    let favouriteObj = {
      property_id: property,
      guest_id: this.state.user.id,
    };
    api.makeGuestFavourite(favouriteObj);
  };

  removeGuestFavourite = (property) => {
    let favouriteObj = {
      property_id: property,
      guest_id: this.state.user.id,
    };
    console.log(favouriteObj);
    api.destroyFavourite(favouriteObj);
  };

  signOut = () => {
    this.setState(
      {
        user: null,
      },
      () => {
        this.props.history.push("/signin");
      }
    );
    localStorage.removeItem("token");
  };

  render() {
    if (this.state.awaitingValidation) return <div>Loading...</div>;

    return (
      <div>
        <Switch>
          <Route exact path="/" component={() => <Welcome />} />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/properties"
            render={(props) => (
              <PropertyList
                {...props}
                removeGuestFavourite={this.removeGuestFavourite}
                makeGuestFavourite={this.makeGuestFavourite}
                guest={this.state.user.id}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            component={() => <SignInForm signin={this.signin} />}
          />
          <Route exact path="/signup" component={() => <SignUpForm />} />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/favourites"
            render={(props) => (
              <FavouritesList
                {...props}
                removeGuestFavourite={this.removeGuestFavourite}
                makeGuestFavourite={this.makeGuestFavourite}
                guest={this.state.user.id}
              />
            )}
          />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/map"
            render={(props) => (
              <MapView {...props} guest={this.state.user.id} />
            )}
          />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/bookings"
            render={(props) => (
              <BookingsList
                {...props}
                removeGuestFavourite={this.removeGuestFavourite}
                makeGuestFavourite={this.makeGuestFavourite}
                guest={this.state.user.id}
              />
            )}
          />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/bookings/:id"
            render={(props) => (
              <BookingShow
                {...props}
                guest={this.state.user.id}
                removeBooking={this.removeBooking}
              />
            )}
          />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/properties/:id"
            render={(props) => (
              <PropertyShow
                {...props}
                removeGuestFavourite={this.removeGuestFavourite}
                makeGuestFavourite={this.makeGuestFavourite}
                guest={this.state.user.id}
              />
            )}
          />
          <ProtectedRoute
            exact
            user={this.state.user}
            location={this.props.location.pathname}
            path="/properties/:id/book/:start_date/:end_date"
            render={(props) => (
              <BookingForm {...props} makeBooking={this.makeBooking} />
            )}
          />
          <ProtectedRoute
            exact
            location={this.props.location.pathname}
            user={this.state.user}
            path="/account"
            render={(props) => (
              <GuestAccount
                {...props}
                signOut={this.signOut}
                guest={this.state.user}
              />
            )}
          />
        </Switch>
        <div className="NavBar">
          <Navbar user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default Guest;
