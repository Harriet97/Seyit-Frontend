import React from "react";
import NavBar from "../common/Navbar";
import api from "../../api";
import { Card, Carousel } from "react-bootstrap";

class PropertyShow extends React.Component {
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
      .getProperty(this.props.favourite.property_id)
      .then(property => this.setState({ property }));
  }

  render() {
    if (!this.state.property) return <div>Loading</div>;
    const { property } = this.state;
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
          <h1>{property.name}</h1>
          <h4>
            {property.location}, {property.postcode}
          </h4>
          <h2>About this space</h2>
          <h4>
            {property.sleeps} guests • {property.bedrooms} bedrooms •{" "}
            {property.bathrooms} bathroom
          </h4>
        </Card>

        <br></br>
        <NavBar />
      </div>
    );
  }
}

export default PropertyShow;
