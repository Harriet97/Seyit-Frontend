import React from "react";
import NavBar from "./Navbar";

class FlatShow extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>this will be a flat show page</h2>
        <div className="NavBar">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default FlatShow;
