import React from "react";
import api from "../../api";
import Calendar from "./Calendar";
import { Carousel, Button, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import GMap from "../common/GMap";

class PropertyShow extends React.Component {
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
    api
      .getProperty(this.props.match.params.id)
      .then((property) => this.setState({ property }));
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    const { property } = this.state;
    return (
      <div>
        <div className="NavBarTop">
          <Button as={Link} to={"/properties"} variant="link">
            <ion-icon name="chevron-back"></ion-icon>
          </Button>
        </div>
        <div id="imageContainer" wrapped>
          <Carousel>
            {this.imgs.map((image) => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <h1>{property.name}</h1>
        <h4>
          {property.location}, {property.postcode}
        </h4>
        <h2>About this space</h2>
        <h4>
          {property.sleeps} guests • {property.bedrooms} bedrooms •{" "}
          {property.bathrooms} bathroom
        </h4>
        {property.living_room && !property.balcony ? (
          <h5> with living room</h5>
        ) : null}
        {property.living_room && property.balcony ? (
          <h5>with living room and balcony</h5>
        ) : null}
        {!property.living_room && property.balcony ? (
          <h5> with balcony</h5>
        ) : null}
        <h4>
          {property.bathtub ? "bath" : null}
          {property.shower ? "shower" : null}
        </h4>
        <h4> Cost per month: £{property.price}</h4>
        <br></br>
        <h2>Ammenities:</h2>
        <div>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Basic
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {property.wifi ? <li>wifi</li> : null}
                  {property.tv ? <li>tv</li> : null}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Dining
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {property.coffee_machine ? <li>coffee machine</li> : null}
                  {property.microwave ? <li>Microwave</li> : null}
                  {property.fridge ? <li>Fridge</li> : null}
                  {property.kitchenware ? <li>Kitchenware</li> : null}
                  {property.kettle ? <li>Kettle</li> : null}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Bed and Bath
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {property.hairdryer ? <li>Hairdryer</li> : null}
                  {property.bedding ? <li>Bed linen</li> : null}
                  {property.washing_machine ? (
                    <li>laundry facilities</li>
                  ) : null}
                  {property.iron ? <li>iron</li> : null}
                  {property.mop ? <li>mop</li> : null}
                  {property.hoover ? <li>hoover</li> : null}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <br></br>
        <Button onClick={() => this.props.makeGuestFavourite(property.id)}>
          favourite
        </Button>

        <Calendar
          bookings={property.bookings}
          id={property.id}
          property={property}
        />
        <div id="map">
          <GMap property={property} />
        </div>
      </div>
    );
  }
}

export default PropertyShow;
