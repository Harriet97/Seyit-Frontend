import React from "react";
import NavBar from "../common/Navbar";
import BookingsListTile from "../booking/BookingsListTile";
import { Card } from "semantic-ui-react";
import API from "../../api";
class BookingsList extends React.Component {
  state = {
    bookings: []
  };

  componentDidMount() {
    API.getGuestBookings().then(bookings => this.setState({ bookings }));
    // fetch bookings
  }

  render() {
    console.log(this.state.bookings);
    return (
      <div>
        <h1>Your Bookings</h1>
        <Card.Group itemsPerRow={1}>
          {this.state.bookings.map(booking => (
            <BookingsListTile booking={booking} />
          ))}
        </Card.Group>
        <div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default BookingsList;
