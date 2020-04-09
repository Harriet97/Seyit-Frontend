import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInForm from "../common/SignInForm";
import Bookings from "./Bookings";
import Properties from "./Properties";
import api from "../../api.js";
import HostBookingShow from "./HostBookingShow";

const ProtectedRoute = props => {
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
    awaitingValidation: true
  };

  componentDidMount() {
    this.validateUser();
  }

  validateUser = () => {
    api.hostsValidate().then(data => {
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
    api.hostSignIn(user).then(user => {
      this.setState(
        {
          user: {
            ...user
          }
        },
        () => {
          this.props.history.push("/admin");
        }
      );
    });
  };

  // createProperty = propertyDetails => {
  //   // fetch() propertyDetails, this.state.user.id
  // };

  render() {
    if (this.state.awaitingValidation) return <div>Loading...</div>;

    return (
      <div>
        <Switch>
          <Route
            path="/admin/signin"
            render={() => <SignInForm signin={this.signin} />}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            path="/admin/properties"
            component={Properties}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            path="/admin"
            component={Bookings}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            path="/admin/:id"
            component={HostBookingShow}
          />
        </Switch>
        <div className="NavBar">
          <NavBarAdmin />
        </div>
      </div>
    );
  }
}

export default Admin;
