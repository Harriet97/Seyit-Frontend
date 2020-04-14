import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Button } from "react-bootstrap";

class PropertyListTile extends React.Component {
  imgs = [
    "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    "https://react.semantic-ui.com/images/avatar/large/molly.png",
    "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
  ];
  render() {
    const { name, id } = this.props.property;
    console.log(this.props.guest);
    return (
      <Card style={{ padding: "3%" }}>
        <div wrapped>
          <Carousel>
            {this.imgs.map((image) => (
              <Carousel.Item>
                <img className="image" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Button as={Link} to={"/properties/" + id} variant="primary" block>
            More Info
          </Button>
          {this.props.property.guest_favourites
            .map((fav) => fav.guest_id)
            .includes(this.props.guest) ? (
            <Button
              onClick={() =>
                this.props.removeGuestFavourite(this.props.property.id)
              }
            >
              <ion-icon name="heart-dislike-outline"></ion-icon>
            </Button>
          ) : (
            <Button
              onClick={() =>
                this.props.makeGuestFavourite(this.props.property.id)
              }
            >
              <ion-icon name="heart-outline"></ion-icon>
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default PropertyListTile;
