import React from "react";
import API from "../../api";
import HostBookingCard from "./HostBookingCard";
import NavBar from "../common/Navbar";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { Card } from "semantic-ui-react";
import HostPropertyCard from "./HostPropertyCard";

class Properties extends React.Component {
  state = {
    properties: []
  };

  componentDidMount() {
    API.getHostProperties().then(properties => this.setState({ properties }));
    // fetch bookings
  }

  render() {
    console.log(this.state.bookings);
    return (
      <div>
        <h1>Your properties</h1>
        {this.state.properties.length + " properties"}
        <Card.Group itemsPerRow={1}>
          {this.state.properties.map(property => (
            <HostPropertyCard property={property} />
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

export default Properties;
