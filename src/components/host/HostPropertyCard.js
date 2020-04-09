import React from "react";
import { Card, Carousel } from "react-bootstrap";

import api from "../../api";

class HostPropertyCard extends React.Component {
  imgs = [
    "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    "https://react.semantic-ui.com/images/avatar/large/molly.png",
    "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
  ];

  render() {
    return (
      <Card>
        <div id="imageContainer" wrapped>
          <Carousel>
            {this.imgs.map(image => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <Card.Body variant="bottom">
          <Card.Title style={{ textAlign: "center" }}>
            {this.props.property.name}
          </Card.Title>
          <Card.Text>i am a property</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HostPropertyCard;
