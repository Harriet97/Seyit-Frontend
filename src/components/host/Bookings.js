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
  }

  render() {
    return (
      <div className="cardContainer">
        <h2 style={{ textAlign: "center" }}>
          my {this.state.bookings.length} bookings
        </h2>

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
