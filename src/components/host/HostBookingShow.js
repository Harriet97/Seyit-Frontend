import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import API from "../../api";

class HostBookingShow extends React.Component {
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
    API.getHostBooking(this.props.match.params.id).then((booking) =>
      this.setState({ booking })
    );
  }

  render() {
    const { booking } = this.state;
    if (!this.state.booking) return <div>Loading</div>;
    if (!this.state.booking.confirmed)
      return (
        <div>
          <h3>{booking.guest.first_name} has requested to book:</h3>
          <h3>{booking.property.name}</h3>
          <table>
            <tr>
              <th>check-in:</th>
              <th>check-out:</th>
            </tr>
            <tr>
              <td>{moment(booking.start_date).format("ddd, MMMM Do YYYY")}</td>
              <td>{moment(booking.end_date).format("ddd, MMMM Do YYYY")}</td>
            </tr>
          </table>
          <Button as={Link} to={"/admin"}>
            back
          </Button>
          <Button as={Link} to={booking.guest.email}>
            Contact guest
          </Button>
          <Button> Confirm booking</Button>
        </div>
      );
    if (this.state.booking.confirmed)
      return (
        <div>
          <h1>this booking has been confirmed</h1>
          <h3>button to cancel booking</h3>
        </div>
      );
  }
}

export default HostBookingShow;
