import React from "react";
import API from "../../api";
import { CardGroup } from "react-bootstrap";
import HostPropertyCard from "./HostPropertyCard";

class Properties extends React.Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    API.getHostProperties().then((properties) => this.setState({ properties }));
    // fetch bookings
  }

  render() {
    console.log(this.state.bookings);
    return (
      <div className="cardContainer">
        <h2 style={{ textAlign: "center" }}>
          my {this.state.properties.length} properties
        </h2>

        <CardGroup className="cards">
          {this.state.properties.map((property) => (
            <div>
              <HostPropertyCard property={property} />
              <br></br>
            </div>
          ))}
        </CardGroup>
      </div>
    );
  }
}

export default Properties;
