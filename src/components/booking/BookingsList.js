import React from "react";
import NavBar from "../common/Navbar";
import BookingsListTile from "../property/PropertyListTile";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Card } from "semantic-ui-react";
import api from "../../api";

class BookingsList extends React.Component {
  state = {
    bookings: []
  };

  componentDidMount() {
    api
      .getBookings(this.props.guest)
      .then(bookings => this.setState({ bookings }));
  }

  render() {
    return (
      <div>
        <h1>All of the bookings</h1>
        <Card.Group itemsPerRow={1}>
          {this.state.bookings.map(booking => (
            <BookingsListTile property={booking} />
          ))}
        </Card.Group>
        <div>
          <Fab size="small" color="primary" aria-label="add">
            <NavigationIcon />
          </Fab>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default BookingsList;
