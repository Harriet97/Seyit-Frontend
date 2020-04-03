import React from "react";
import NavBar from "./Navbar";
import FlatListTile from "./FlatListTile";

class BookingsList extends React.Component {
  render() {
    return (
      <div>
        <h1>List of all the bookings</h1>
        <FlatListTile />
        <div className="NavBar">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default BookingsList;
