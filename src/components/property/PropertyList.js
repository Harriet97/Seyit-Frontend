import React from "react";
import NavBar from "../common/Navbar";
import PropertyListTile from "./PropertyListTile";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Card } from "semantic-ui-react";
import api from "../../api";

class PropertyList extends React.Component {
  state = {
    properties: []
  };

  componentDidMount() {
    api.getProperties().then(properties => this.setState({ properties }));
  }

  render() {
    return (
      <div>
        <h1>All of the properties</h1>
        <Card.Group itemsPerRow={1}>
          {this.state.properties.map(property => (
            <PropertyListTile property={property} />
          ))}
        </Card.Group>
        <div>
          <Fab size="small" color="primary" aria-label="add">
            <NavigationIcon />
          </Fab>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default PropertyList;
