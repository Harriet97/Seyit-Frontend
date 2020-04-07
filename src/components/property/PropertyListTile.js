import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

class PropertyListTile extends React.Component {
  imgs = [
    "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    "https://react.semantic-ui.com/images/avatar/large/molly.png",
    "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
  ];
  render() {
    const { name, id } = this.props.property;
    return (
      <Card>
        <div id="imageContainer" wrapped attached="top">
          <Carousel>
            {this.imgs.map(image => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} alt="slide" />
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
          {/* <Button.Group attached="bottom"> */}
          <Button as={Link} to={"/properties/" + id} attached="bottom">
            <Icon name="plus circle" />
            More Info
          </Button>

          {/* <Button
              //   disabled={!this.props.loggedIn || this.props.alreadyFav}
              content="Favourite"
              color="red"
              icon="heart"
              //   onClick={() => this.props.addFav(restaurant)}
            ></Button> */}
          {/* </Button.Group> */}
        </Card.Body>
      </Card>
    );
  }
}

export default PropertyListTile;
