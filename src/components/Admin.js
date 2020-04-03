import React from "react";
import NavBarAdmin from "./NavBarAdmin";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h1>This will be the admin area</h1>
        <div className="NavBar">
          <NavBarAdmin />
        </div>
      </div>
    );
  }
}

export default Admin;
