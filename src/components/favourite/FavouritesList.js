import React from "react";
import NavBar from "../common/Navbar";
import PropertyListTile from "../property/PropertyListTile";

class FavouritesList extends React.Component {
  render() {
    return (
      <div>
        <h1>List of all the favourites</h1>
        <PropertyListTile />
        <div className="NavBar">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default FavouritesList;
