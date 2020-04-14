import React from "react";
import BookingsListTile from "../booking/BookingsListTile";
import { CardGroup } from "react-bootstrap";
import API from "../../api";
class BookingsList extends React.Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    API.getGuestBookings().then((bookings) => this.setState({ bookings }));
    // fetch bookings
  }

  render() {
    return (
      <div className="cardContainer">
        <h1>Your Bookings</h1>
        <CardGroup className="cards">
          {this.state.bookings.map((booking) => (
            <div>
              <BookingsListTile
                booking={booking}
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

export default BookingsList;
