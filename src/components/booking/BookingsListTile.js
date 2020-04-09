import React from "react";
import { Card, Carousel } from "react-bootstrap";
import moment from "moment";
import api from "../../api";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import NavBar from "../common/Navbar";

class BookingsListTile extends React.Component {
  state = {
    property: null
  };

  imgs = [
    "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
    "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    "https://react.semantic-ui.com/images/avatar/large/molly.png",
    "https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
  ];

  componentDidMount() {
    api
      .getProperty(this.props.booking.property_id)
      .then(property => this.setState({ property }));
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    return (
      <div className="App">
        <div className="NavBarTop">
          <h1> i am a top nav bar</h1>
        </div>
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
              {this.state.property.name}
            </Card.Title>
            <Card.Text>
              {moment(this.props.booking.startDate).format("ddd, MMMM Do YYYY")}
              -{moment(this.props.booking.endDate).format("ddd, MMMM Do YYYY")}
            </Card.Text>
          </Card.Body>
          {/* <Button
            as={Link}
            to={"/admin/" + this.props.booking.id}
            attached="bottom"
          >
            <Icon name="plus circle" />
            Booking Details
          </Button> */}
        </Card>
        <br></br>
        <NavBar />
      </div>
    );
  }
}

export default BookingsListTile;
