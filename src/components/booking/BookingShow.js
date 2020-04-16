import React from "react";
import GMap from "../common/GMap";
import api from "../../api";
import { Button, Carousel, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";

class BookingShow extends React.Component {
  state = {
    booking: null,
    bookingCancelled: false,
  };

  componentDidMount() {
    api
      .getGuestBooking(this.props.match.params.id)
      .then((booking) => this.setState({ booking }));
  }

  cancelBooking = () => {
    api.destroyBooking(this.state.booking.id).then((booking) =>
      this.setState({ bookingCancelled: true }, () => {
        this.props.history.push("/bookings");
      })
    );
  };

  render() {
    const { booking } = this.state;
    if (!booking) return <div>Loading</div>;

    return (
      <div>
        <div className="NavBarTop">
          <h2 style={{ textAlign: "center" }}>Your booking</h2>
        </div>
        <div id="imageContainer" wrapped>
          <Carousel>
            {booking.property.images.map((image) => (
              <Carousel.Item>
                <img className="image" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <h2 style={{ textAlign: "center" }}>{booking.property.name}</h2>
        <h5 style={{ textAlign: "center" }}>
          {booking.property.location}, {booking.property.postcode}
        </h5>
        <br></br>
        <Button
          href={`mailto:${booking.guest.email}`}
          target="_blank"
          class="btn btn-primary"
        >
          Contact Host
        </Button>
        <Button className="float-right" onClick={() => this.cancelBooking()}>
          Cancel Booking
        </Button>{" "}
        <br></br>
        <br></br>
        <h6>
          <table>
            <tr>
              <th>check-in:</th>

              <th>check-out:</th>
            </tr>

            <tr>
              <td>
                {moment(this.props.match.params.start_date).format(
                  "ddd, MMMM Do YYYY"
                )}
              </td>
              <td>
                {moment(this.props.match.params.end_date).format(
                  "ddd, MMMM Do YYYY"
                )}
              </td>
            </tr>
          </table>
        </h6>
        <br></br>
        <h4>About this space:</h4>
        <h5>
          <table>
            <tr>
              <td style={{ textAlign: "center" }}>
                <ion-icon name="person-outline"></ion-icon>
              </td>
              <td>{booking.property.sleeps} guests</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <ion-icon name="bed-outline"></ion-icon>
              </td>
              <td>{booking.property.bedrooms} bedrooms</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                {" "}
                <BathtubOutlinedIcon fontSize="medium" />
              </td>
              <td>{booking.property.bathrooms} bathroom</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <ion-icon name="cash-outline"></ion-icon>
              </td>
              <td>£{booking.property.price} / month</td>
            </tr>
          </table>
        </h5>
        <br></br>
        <h4>Amenities:</h4>
        <div>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Basic
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {booking.property.wifi ? <li>wifi</li> : null}
                  {booking.property.tv ? <li>tv</li> : null}
                  {booking.property.living_room && !booking.property.balcony ? (
                    <li> living room</li>
                  ) : null}
                  {booking.property.living_room && booking.property.balcony ? (
                    <li> living room and balcony</li>
                  ) : null}
                  {!booking.property.living_room && booking.property.balcony ? (
                    <li> balcony</li>
                  ) : null}
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Dining
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {booking.property.coffee_machine ? (
                    <li>coffee machine</li>
                  ) : null}
                  {booking.property.microwave ? <li>Microwave</li> : null}
                  {booking.property.fridge ? <li>Fridge</li> : null}
                  {booking.property.kitchenware ? <li>Kitchenware</li> : null}
                  {booking.property.kettle ? <li>Kettle</li> : null}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Bed and Bath
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {booking.property.bathtub ? <li>Bath</li> : null}
                  {booking.property.shower ? <li>Shower</li> : null}
                  {booking.property.hairdryer ? <li>Hairdryer</li> : null}
                  {booking.property.bedding ? <li>Bed linen</li> : null}
                  {booking.property.washing_machine ? (
                    <li>laundry facilities</li>
                  ) : null}
                  {booking.property.iron ? <li>iron</li> : null}
                  {booking.property.mop ? <li>mop</li> : null}
                  {booking.property.hoover ? <li>hoover</li> : null}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div id="map">
          <GMap property={booking.property} />
        </div>
      </div>
    );
  }
}

export default BookingShow;
