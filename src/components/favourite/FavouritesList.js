import React from "react";
import FavouritesListTile from "../favourite/FavouritesListTile";
import { CardGroup } from "react-bootstrap";
import API from "../../api";

class FavouritesList extends React.Component {
  state = {
    favourites: [],
  };

  componentDidMount() {
    API.getGuestFavourites().then((favourites) =>
      this.setState({ favourites })
    );
    // fetch bookings
  }

  render() {
    return (
      <div>
        <h2>my favourites</h2>
        <CardGroup className="cards">
          {this.state.favourites.map((favourite) => (
            <div>
              <FavouritesListTile
                favourite={favourite}
                removeGuestFavourite={this.props.removeGuestFavourite}
                guest={this.props.guest}
                makeGuestFavourite={this.props.makeGuestFavourite}
              />
              <br></br>
            </div>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default FavouritesList;
