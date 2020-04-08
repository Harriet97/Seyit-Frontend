import React from "react";
import NavBar from "../common/Navbar";
import api from "../../api";
import Calendar from "./Calendar";
import { Carousel } from "react-bootstrap";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
      .getProperty(this.props.match.params.id)
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
        <br></br>
        <h2>Ammenities:</h2>
        <div>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Basic</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {property.wifi ? <li>wifi</li> : null}
                {property.tv ? <li>tv</li> : null}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Dining</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {property.coffee_machine ? <li>coffee machine</li> : null}
                {property.microwave ? <li>Microwave</li> : null}
                {property.fridge ? <li>Fridge</li> : null}
                {property.kitchenware ? <li>Kitchenware</li> : null}
                {property.kettle ? <li>Kettle</li> : null}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Bed and Bath</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {property.hairdryer ? <li>Hairdryer</li> : null}
                {property.bedding ? <li>Bed linen</li> : null}
                {property.washing_machine ? <li>laundry facilities</li> : null}
                {property.iron ? <li>iron</li> : null}
                {property.mop ? <li>mop</li> : null}
                {property.hoover ? <li>hoover</li> : null}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

        <Calendar
          bookings={property.bookings}
          id={this.props.match.params.id}
        />
        <NavBar />
      </div>
    );
  }
}

export default PropertyShow;
