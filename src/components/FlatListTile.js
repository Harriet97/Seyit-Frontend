import React from "react";
// import { Card, Icon, Image } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

class FlatListTile extends React.Component {
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
          <Card.Title style={{ textAlign: "center" }}>Flat Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button.Group attached="bottom">
            <Button as={Link} to={"/flats/show"}>
              <Icon name="plus circle" />
              More Info
            </Button>

            <Button
              //   disabled={!this.props.loggedIn || this.props.alreadyFav}
              content="Favourite"
              color="red"
              icon="heart"
              //   onClick={() => this.props.addFav(restaurant)}
            ></Button>
          </Button.Group>
        </Card.Body>
      </Card>
      //   <Card fluid color="blue">
      //     <Image
      //       src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
      //       wrapped
      //       ui={false}
      //     />
      //     <Card.Content>
      //       <Card.Header>Daniel</Card.Header>
      //       <Card.Meta>Joined in 2016</Card.Meta>
      //       <Card.Description>This is a description of the flat</Card.Description>
      //     </Card.Content>
      //     <Card.Content extra>
      //       <a>
      //         <Icon name="user" />
      //         10 Friends
      //       </a>
      //     </Card.Content>
      //   </Card>
    );
  }
}

export default FlatListTile;
