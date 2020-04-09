import React from "react";
import API from "../../api";
import HostBookingCard from "./HostBookingCard";
import NavBar from "../common/Navbar";
import { Card } from "semantic-ui-react";

class Bookings extends React.Component {
  state = {
    bookings: []
  };

  componentDidMount() {
    API.getHostBookings().then(bookings => this.setState({ bookings }));
    // fetch bookings
  }

  render() {
    console.log(this.state.bookings);
    return (
      <div>
        <h1>Your bookings</h1>
        {this.state.bookings.length + " bookings"}
        <Card.Group itemsPerRow={1}>
          {this.state.bookings.map(booking => (
            <HostBookingCard booking={booking} />
          ))}
        </Card.Group>
        <div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Bookings;
