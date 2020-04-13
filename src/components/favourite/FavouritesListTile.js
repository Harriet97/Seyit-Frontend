import React from "react";
import API from "../../api";
import { Card, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class FavouritesListTile extends React.Component {
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
    API.getProperty(this.props.favourite.property_id).then((property) =>
      this.setState({ property })
    );
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    const { property } = this.state;
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
            {property.name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {property.location}, {property.postcode}
            <br></br>
            {property.sleeps} guests • {property.bedrooms} bedrooms •{" "}
            {property.bathrooms} bathroom
          </Card.Text>
        </Card.Body>
        <div>
          {this.state.property.guest_favourites
            .map((fav) => fav.guest_id)
            .includes(this.props.guest) ? (
            <Button
              onClick={() =>
                this.props.removeGuestFavourite(
                  this.props.favourite.property_id
                )
              }
            >
              <ion-icon name="heart-dislike-outline"></ion-icon>
            </Button>
          ) : (
            <Button
              onClick={() =>
                this.props.makeGuestFavourite(this.props.favourite.property_id)
              }
            >
              <ion-icon name="heart-outline"></ion-icon>
            </Button>
          )}

          <Button
            as={Link}
            to={"/properties/" + this.props.favourite.property_id}
          >
            More Info
          </Button>
        </div>
      </Card>
    );
  }
}

export default FavouritesListTile;
