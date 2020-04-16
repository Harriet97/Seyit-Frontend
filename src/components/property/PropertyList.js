import React from "react";
import PropertyListTile from "./PropertyListTile";
import { CardGroup, Button } from "react-bootstrap";
import api from "../../api";
import { Link } from "react-router-dom";

class PropertyList extends React.Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    api.getProperties().then((properties) => this.setState({ properties }));
  }

  render() {
    return (
      <div className="cardContainer">
        <h2 style={{ textAlign: "center" }}>
          all properties{" "}
          <Button
            className="float-right"
            as={Link}
            to={"/map"}
            variant="outline-light"
          >
            <ion-icon name="map-outline"></ion-icon>
          </Button>
        </h2>

        <CardGroup className="cards">
          {this.state.properties.map((property) => (
            <div>
              <PropertyListTile
                property={property}
                removeGuestFavourite={this.props.removeGuestFavourite}
                guest={this.props.guest}
                makeGuestFavourite={this.props.makeGuestFavourite}
              />
              <br></br>
            </div>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default PropertyList;
