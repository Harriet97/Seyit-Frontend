import React from "react";
import NavBar from "../common/Navbar";
import PropertyListTile from "../property/PropertyListTile";

class BookingsList extends React.Component {
  render() {
    return (
      <div>
        <h1>List of all the bookings</h1>
        <PropertyListTile />
        <div className="NavBar">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default BookingsList;
