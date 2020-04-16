import React from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import moment from "moment";
import api from "../../api";
import { Link } from "react-router-dom";

class HostBookingCard extends React.Component {
  state = {
    property: null,
  };

  componentDidMount() {
    api
      .getProperty(this.props.booking.property_id)
      .then((property) => this.setState({ property }));
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    return (
      <Card style={{ padding: "3%" }}>
        <div id="imageContainer" wrapped>
          <Carousel>
            {this.state.property.images.map((image) => (
              <Carousel.Item>
                <img className="imageBooking" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>
            {this.state.property.name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {" "}
            {this.state.property.sleeps} guests • {this.state.property.bedrooms}{" "}
            bedrooms • {this.state.property.bathrooms} bathroom
            <br></br>
            {moment(this.props.booking.startDate).format("ddd, MMMM Do YYYY")}-
            {moment(this.props.booking.endDate).format("ddd, MMMM Do YYYY")}
          </Card.Text>
        </Card.Body>
        <Button
          as={Link}
          to={"/admin/bookings/" + this.props.booking.id}
          variant="outline-primary"
        >
          more info
        </Button>
      </Card>
    );
  }
}

export default HostBookingCard;
