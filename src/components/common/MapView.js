import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import api from "../../api";
// import { Link } from "react-router-dom";

export class MapView extends Component {
  state = {
    properties: null,
  };

  componentDidMount() {
    api.getProperties().then((properties) => this.setState({ properties }));
  }

  handleClick = (property) => {
    this.props.history.push("/properties/" + property.id);
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };
    if (!this.state.properties) return <div>Loading</div>;
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 51.5074,
          lng: -0.118092,
        }}
      >
        {this.state.properties.map((property) => (
          <Marker
            onClick={() => {
              this.handleClick(property);
            }}
            key={property.id}
            animation={window.google.maps.Animation.DROP}
            position={{
              lat: property.lat,
              lng: property.long,
            }}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapView);
