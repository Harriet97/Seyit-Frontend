import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  PersonOutline,
  FavoriteBorder,
  Search,
  LocalHotel
} from "@material-ui/icons";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
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
      <div className="NavBar">
        <BottomNavigation
          value={this.state.value}
          onChange={(event, newValue) => {
            this.setState({ value: newValue });
          }}
        >
          <BottomNavigationAction
            label="search"
            value="search"
            icon={
              <Link to="/properties">
                <Search />
              </Link>
            }
            showLabel="true"
          />

          <BottomNavigationAction
            label="favourites"
            value="favorites"
            icon={
              <Link to="/favourites">
                <FavoriteBorder />
              </Link>
            }
            showLabel="true"
          />

          <BottomNavigationAction
            label="bookings"
            value="bookings"
            icon={
              <Link to="/bookings">
                <LocalHotel />
              </Link>
            }
            showLabel="true"
          />
          {this.signedIn()}
        </BottomNavigation>
      </div>
    );
  }
}
export default NavBar;
