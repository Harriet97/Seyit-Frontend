import React from "react";
import { Card, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class HostPropertyCard extends React.Component {
  render() {
    return (
      <Card style={{ padding: "3%" }}>
        <div id="imageContainer" wrapped>
          <Carousel>
            {this.props.property.images.map((image) => (
              <Carousel.Item>
                <img className="image" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>
            {this.props.property.name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            {this.props.property.sleeps} guests • {this.props.property.bedrooms}{" "}
            bedrooms • {this.props.property.bathrooms} bathroom
          </Card.Text>
          <Button
            as={Link}
            to={"/admin/properties/" + this.props.property.id}
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

export default HostPropertyCard;
