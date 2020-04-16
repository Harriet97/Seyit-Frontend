import React from "react";
import API from "../../api";
import { Card, Carousel, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class FavouritesListTile extends React.Component {
  state = {
    property: null,
  };

  componentDidMount() {
    API.getProperty(this.props.favourite.property_id).then((property) =>
      this.setState({
        property: property,
        favourite: property.guest_favourites,
      })
    );
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    const { property } = this.state;
    return (
      <Card style={{ padding: "3%" }}>
        <div id="imageContainer" wrapped>
          <Carousel>
            {property.images.map((image) => (
              <Carousel.Item>
                <img className="imageBooking" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>
            {property.name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {property.location}, {property.postcode}
            <br></br>
            {property.sleeps} guests • {property.bedrooms} bedrooms •{" "}
            {property.bathrooms} bathroom
          </Card.Text>
        </Card.Body>
        <ButtonGroup>
          {this.state.property.guest_favourites
            .map((fav) => fav.guest_id)
            .includes(this.props.guest) ? (
            <Button
              variant="outline-danger"
              onClick={() => {
                this.props.removeGuestFavourite(
                  this.props.favourite.property_id
                );
              }}
            >
              <ion-icon name="heart-dislike-outline"></ion-icon>
            </Button>
          ) : (
            <Button
              variant="outline-danger"
              onClick={() =>
                this.props.makeGuestFavourite(this.props.favourite.property_id)
              }
            >
              <ion-icon name="heart-outline"></ion-icon>
            </Button>
          )}

          <Button
            variant="outline-primary"
            as={Link}
            to={"/properties/" + this.props.favourite.property_id}
          >
            <ion-icon name="add-outline"></ion-icon>
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
}

export default FavouritesListTile;
