import React from "react";
import api from "../../api";
import { Carousel, Button, Card, Accordion } from "react-bootstrap";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import { Link } from "react-router-dom";
import GMap from "../common/GMap";
import moment from "moment";

class PropertyShow extends React.Component {
  state = {
    property: null,
    fav: false,
  };

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
            {this.state.property.images.map((image) => (
              <Carousel.Item>
                <img className="imageBooking" src={image} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <h2 style={{ textAlign: "center" }}>{property.name}</h2>
        <h5 style={{ textAlign: "center" }}>
          {property.location}, {property.postcode}
        </h5>
        <br></br>
        <h5>
          This property has {this.state.property.bookings.length} bookings
        </h5>
        {this.state.property.bookings.map((booking) => (
          <li>
            <Link to={"/admin/bookings/" + booking.id}>
              {moment(booking.startDate).format("MMMM Do YYYY")} -
              {moment(booking.endDate).format("MMMM Do YYYY")}
            </Link>
          </li>
        ))}
        <br></br>
        <h5>
          <table>
            <tr>
              <td style={{ textAlign: "center" }}>
                <ion-icon name="person-outline"></ion-icon>
              </td>
              <td>{property.sleeps} guests</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <ion-icon name="bed-outline"></ion-icon>
              </td>
              <td>{property.bedrooms} bedrooms</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                {" "}
                <BathtubOutlinedIcon fontSize="medium" />
              </td>
              <td>{property.bathrooms} bathroom</td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <ion-icon name="cash-outline"></ion-icon>
              </td>
              <td>£{property.price} / month</td>
            </tr>
          </table>
        </h5>
        <br></br>
        <h4>Amenities:</h4>
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
                  {property.living_room && !property.balcony ? (
                    <h5> living room</h5>
                  ) : null}
                  {property.living_room && property.balcony ? (
                    <h5> living room and balcony</h5>
                  ) : null}
                  {!property.living_room && property.balcony ? (
                    <h5> balcony</h5>
                  ) : null}
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
                  {property.bathtub ? <li>Bath</li> : null}
                  {property.shower ? <li>Shower</li> : null}
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

        <div id="map">
          <GMap property={property} />
        </div>
      </div>
    );
  }
}

export default PropertyShow;
