import React from "react";
import { Button } from "semantic-ui-react";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";

import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (
      <div className="App-header">
        <HomeWorkOutlinedIcon fontSize="large" className="App-logo" />
        <h1>Seyit's Properties</h1>

        <h2>Rent furnished apartments</h2>
        <h4>Easy and convenient – Housing as a Service</h4>
        <br></br>
        <Button className="explore" as={Link} to={`/properties`}>
          Explore our properties
        </Button>
      </div>
    );
  }
}
export default Welcome;
