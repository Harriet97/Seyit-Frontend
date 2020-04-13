import React from "react";
import API from "../../api";
import HostBookingCard from "./HostBookingCard";
import { CardGroup } from "react-bootstrap";

class Bookings extends React.Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    API.getHostBookings().then((bookings) => this.setState({ bookings }));
    // fetch bookings
  }

  render() {
    return (
      <div>
        <h1>Your {this.state.bookings.length} bookings</h1>
        <CardGroup className="cards">
          {this.state.bookings.map((booking) => (
            <div>
              <HostBookingCard booking={booking} />
              <br></br>
            </div>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Bookings;
