import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button, Spinner, Carousel } from "react-bootstrap";
import API from "../../api";

class HostBookingShow extends React.Component {
  state = {
    booking: null,
    bookingRemoved: false,
    confirmed: false,
  };

  componentDidMount() {
    API.getHostBooking(this.props.match.params.id).then((booking) =>
      this.setState({ booking })
    );
  }

  confirmBooking = () => {
    API.confirmBooking(this.props.match.params.id);
  };

  removeBooking = () => {
    API.destroyBooking(this.state.booking.id).then((booking) =>
      this.setState({ bookingRemoved: true }, () => {
        this.props.history.push("/admin/bookings");
      })
    );
  };

  render() {
    const { booking } = this.state;
    if (!this.state.booking)
      return <Spinner animation="border" variant="info" />;
    if (!this.state.booking.confirmed)
      return (
        <div>
          <div id="imageContainer" wrapped>
            <Carousel>
              {this.state.booking.property.images.map((image) => (
                <Carousel.Item>
                  <img className="imageBooking" src={image} alt="slide" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <h2 style={{ textAlign: "center" }}>
            {this.state.booking.property.name}
          </h2>
          <h4>
            {this.state.booking.guest.first_name}{" "}
            {this.state.booking.guest.last_name} has requested to book:
          </h4>
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

          <Button as={Link} to={booking.guest.email}>
            Contact guest
          </Button>
          <Button onClick={() => this.confirmBooking()}>
            {" "}
            Confirm booking
          </Button>
        </div>
      );
    if (this.state.booking.confirmed)
      return (
        <div>
          <div id="imageContainer" wrapped>
            <Carousel>
              {this.state.booking.property.images.map((image) => (
                <Carousel.Item>
                  <img className="imageBooking" src={image} alt="slide" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <h2 style={{ textAlign: "center" }}>{booking.property.name}</h2>
          <h3>
            {booking.guest.first_name} {this.state.booking.guest.last_name} has
            booked
          </h3>
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

          <Button
            href={`mailto:${booking.guest.email}`}
            target="_blank"
            class="btn btn-primary"
          >
            Contact Guest
          </Button>

          <Button className="float-right" onClick={() => this.removeBooking()}>
            Cancel Booking
          </Button>
        </div>
      );
  }
}

export default HostBookingShow;
