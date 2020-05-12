import React from "react";
import api from "../../api";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Account extends React.Component {
  state = {
    host: null,
  };
  componentDidMount() {
    api.getHost(this.props.user.id).then((host) => this.setState({ host }));
  }
  render() {
    const { host } = this.state;
    if (!host) return <div>Loading...</div>;
    return (
      <div className="Account">
        <h2> Welcome {host.first_name} </h2>
        <h4>You have {this.props.user.bookings.length} bookings:</h4>
        {this.props.user.bookings.map((booking) => (
          <li>
            <Link to={"/admin/bookings/" + booking.id}>
              {moment(booking.startDate).format("MMMM Do YYYY")} -
              {moment(booking.endDate).format("MMMM Do YYYY")}
            </Link>
          </li>
        ))}
        <br></br>
        <Button variant="primary" onClick={() => this.props.signOut()}>
          Sign out
        </Button>
      </div>
    );
  }
}

export default Account;
