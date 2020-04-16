import React from "react";
import NavBar2 from "./NavBar2";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInForm from "../common/SignInForm";
import Bookings from "./Bookings";
import Properties from "./Properties";
import api from "../../api.js";
import HostBookingShow from "./HostBookingShow";
import Account from "./Account";
import PropertyShow from "./PropertyShow";

const ProtectedRoute = (props) => {
  if (
    !props.user &&
    props.location !== "/admin/signin" &&
    props.location !== "/admin/signup"
  ) {
    return <Redirect to="/admin/signin" />;
  } else {
    return <Route {...props} />;
  }
};

class Admin extends React.Component {
  state = {
    user: null,
    awaitingValidation: true,
  };

  componentDidMount() {
    this.validateUser();
  }

  validateUser = () => {
    api.hostsValidate().then((data) => {
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
    api.hostSignIn(user).then((user) => {
      this.setState(
        {
          user: {
            ...user,
          },
        },
        () => {
          this.props.history.push("/admin/bookings");
        }
      );
    });
  };

  signOut = () => {
    this.setState(
      {
        user: null,
      },
      () => {
        this.props.history.push("/admin/signin");
      }
    );
    localStorage.removeItem("host_token");
  };

  render() {
    if (this.state.awaitingValidation) return <div>Loading...</div>;

    return (
      <div>
        <Switch>
          <Route
            path="/admin/signin"
            exact
            render={() => <SignInForm signin={this.signin} />}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            exact
            path="/admin"
            render={(props) => (
              <Account
                {...props}
                signOut={this.signOut}
                user={this.state.user}
              />
            )}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            exact
            path="/admin/properties"
            component={Properties}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            exact
            path="/admin/properties/:id"
            component={PropertyShow}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            exact
            path="/admin/bookings/:id"
            component={HostBookingShow}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            exact
            path="/admin/bookings"
            component={Bookings}
          />
        </Switch>
        <div className="NavBar">
          <NavBar2 user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default Admin;
