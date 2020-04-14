import React from "react";
import api from "../../api";
import { Button } from "react-bootstrap";

class BookingShow extends React.Component {
  state = {
    booking: null,
  };

  imgs = [
    "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    "https://react.semantic-ui.com/images/avatar/large/molly.png",
    "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
  ];

  componentDidMount() {
    api
      .getGuestBooking(this.props.match.params.id)
      .then((booking) => this.setState({ booking }));
  }

  render() {
    const { booking } = this.state;
    if (!booking) return <div>Loading</div>;
    return (
      <div>
        <h1> I am booking {booking.id} show page</h1>
        <Button onClick={() => this.props.removeBooking(booking.id)}>
          {" "}
          Cancel Booking
        </Button>
      </div>
    );
  }
}

export default BookingShow;
