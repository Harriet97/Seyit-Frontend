import React from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import moment from "moment";
import api from "../../api";
import { Link } from "react-router-dom";

class HostBookingCard extends React.Component {
  state = {
    property: null,
  };
  imgs = [
    "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    "https://react.semantic-ui.com/images/avatar/large/molly.png",
    "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
  ];

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
            {this.imgs.map((image) => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>
            {this.state.property.name}
          </Card.Title>
          <Card.Text>
            {moment(this.props.booking.startDate).format("ddd, MMMM Do YYYY")}-
            {moment(this.props.booking.endDate).format("ddd, MMMM Do YYYY")}
          </Card.Text>
        </Card.Body>
        <Button as={Link} to={"/admin/bookings/" + this.props.booking.id}>
          more info
        </Button>
        {/* <Button
          as={Link}
          to={"/admin/" + this.props.booking.id}
          attached="bottom"
        >
          <Icon name="plus circle" />
          Booking Details
        </Button> */}
      </Card>
    );
  }
}

export default HostBookingCard;
