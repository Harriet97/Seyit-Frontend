import React from "react";
import { Card, Carousel } from "react-bootstrap";
import moment from "moment";
import API from "../../api";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class BookingsListTile extends React.Component {
  state = {
    property: null,
  };

  imgs = [
    "https://llidesign.co.uk/assets/img/slider-img/Notting%20Hill%20-%20Living%20Room.jpg",
    "https://www.taylorhowes.co.uk/site/wp-content/uploads/2018/01/Cheval-Place_Reception-1-3000x1680.jpg",
    "https://theresident.wpms.greatbritishlife.co.uk/wp-content/uploads/sites/10/2018/03/interior-designers-Berkeley.jpg",
    "https://www.kallumsbathrooms.co.uk/wp-content/uploads/2019/03/design_small_bathroom.jpg",
  ];

  componentDidMount() {
    API.getProperty(this.props.booking.property_id).then((property) =>
      this.setState({ property })
    );
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    return (
      <Card style={{ padding: "3%" }}>
        <div wrapped>
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
            {moment(this.props.booking.startDate).format("ddd, MMMM Do YYYY")} -
            {moment(this.props.booking.endDate).format("ddd, MMMM Do YYYY")}
          </Card.Text>
        </Card.Body>
        <ButtonGroup>
          {this.state.property.guest_favourites
            .map((fav) => fav.guest_id)
            .includes(this.props.guest) ? (
            <Button
              // fluid
              size="sm"
              variant="outline-danger"
              onClick={() =>
                this.props.removeGuestFavourite(this.props.booking.property_id)
              }
            >
              <ion-icon name="heart-dislike-outline"></ion-icon>
            </Button>
          ) : (
            <Button
              // fluid
              size="sm"
              variant="outline-danger"
              onClick={() =>
                this.props.makeGuestFavourite(this.props.booking.property_id)
              }
            >
              <ion-icon name="heart-outline"></ion-icon>
            </Button>
          )}
          <Button
            // fluid
            variant="outline-primary"
            as={Link}
            size="sm"
            to={"/bookings/" + this.props.booking.id}
          >
            <ion-icon name="add-outline"></ion-icon>
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
}

export default BookingsListTile;
