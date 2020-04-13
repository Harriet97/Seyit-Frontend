import React from "react";
import api from "../../api";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class GuestAccount extends React.Component {
  state = {
    guest: null,
  };
  componentDidMount() {
    api.getGuest(this.props.guest.id).then((guest) => this.setState({ guest }));
  }

  render() {
    const { guest } = this.state;
    if (!guest) return <div>Loading...</div>;
    return (
      <div>
        <h2>Welcome {guest.first_name}</h2>
        <h4>You have {this.props.guest.bookings.length} bookings:</h4>
        {this.props.guest.bookings.map((booking) => (
          <li>
            <Link to={"/bookings/" + booking.id}>
              {moment(booking.startDate).format("MMMM Do YYYY")} -
              {moment(booking.endDate).format("MMMM Do YYYY")}
            </Link>
          </li>
        ))}
        <Button onClick={() => this.props.signOut()}>Sign out</Button>
      </div>
    );
  }
}

export default GuestAccount;
