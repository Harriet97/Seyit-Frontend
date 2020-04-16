import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Button } from "react-bootstrap";

class PropertyListTile extends React.Component {
  state = {
    fav: false,
  };

  render() {
    const { name, id } = this.props.property;
    console.log(this.props.guest);
    return (
      <Card style={{ padding: "3%" }}>
        <div wrapped>
          <Carousel>
            {this.props.property.images.map((image) => (
              <Carousel.Item>
                <img className="image" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>{name}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {this.props.property.sleeps} guests • {this.props.property.bedrooms}{" "}
            bedrooms • {this.props.property.bathrooms} bathroom
          </Card.Text>

          <Button
            as={Link}
            to={"/properties/" + id}
            variant="outline-primary"
            block
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default PropertyListTile;
