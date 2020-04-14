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
      <div>
        <h1>All of the properties</h1>
        <Button as={Link} to={"/map"}>
          <ion-icon name="map-outline"></ion-icon>
        </Button>
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
