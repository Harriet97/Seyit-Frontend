import React from "react";
import NavBar from "../common/Navbar";
import FavouritesListTile from "../favourite/FavouritesListTile";
import { Card } from "semantic-ui-react";
import API from "../../api";

class FavouritesList extends React.Component {
  state = {
    favourites: []
  };

  componentDidMount() {
    API.getGuestFavourites().then(favourites => this.setState({ favourites }));
    // fetch bookings
  }

  render() {
    return (
      <div>
        <h1>Your favourite properties</h1>

        <Card.Group itemsPerRow={1}>
          {this.state.favourites.map(favourite => (
            <FavouritesListTile favourite={favourite} />
          ))}
        </Card.Group>
        <div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default FavouritesList;
