import React from "react";
import NavBarAdmin from "../common/NavBarAdmin";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInForm from "../common/SignInForm";

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
    user: localStorage.hostUser ? JSON.parse(localStorage.user) : null
  };

  signin = user => {
    // fetch().then().then()

    const newUser = {
      ...user,
      id: 1
    };

    // localstorage JSON.stringify(user)

    this.setState({
      user: newUser
    });

    this.props.history.push("/admin");
  };

  createProperty = propertyDetails => {
    // fetch() propertyDetails, this.state.user.id
  };

  render() {
    return (
      <div>
        <h1>This will be the admin area</h1>
        <Switch>
          <Route
            path="/admin/signin"
            render={() => <SignInForm signin={this.signin} />}
          />
          <ProtectedRoute
            location={this.props.location.pathname}
            user={this.state.user}
            path="/admin/"
            render={() => <div>here are all of your latest bookings</div>}
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
