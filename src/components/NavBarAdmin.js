import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  PersonOutline,
  FavoriteBorder,
  Search,
  LocalHotel
} from "@material-ui/icons";
import { Link } from "react-router-dom";

class NavBarAdmin extends React.Component {
  state = {
    value: ""
  };

  signedIn = () => {
    return this.props.username ? (
      <BottomNavigationAction
        label="account"
        value="account"
        icon={
          <Link to="/">
            <PersonOutline />
          </Link>
        }
        showLabel="true"
      />
    ) : (
      <BottomNavigationAction
        label="account"
        value="account"
        icon={
          <Link to="/sign-in">
            <PersonOutline />
          </Link>
        }
        showLabel="true"
      />
    );
  };

  render() {
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={(event, newValue) => {
          this.setState({ value: newValue });
        }}
      >
        <BottomNavigationAction
          label="my flats"
          value="my flats"
          icon={
            <Link to="/flats">
              <LocalHotel />
            </Link>
          }
          showLabel="true"
        />
        <BottomNavigationAction
          label="new"
          value="add a flat"
          icon={
            <Link to="/bookings">
              <LocalHotel />
            </Link>
          }
          showLabel="true"
        />
        {this.signedIn()}
      </BottomNavigation>
    );
  }
}
export default NavBarAdmin;
