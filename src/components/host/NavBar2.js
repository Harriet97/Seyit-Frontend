import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar2 extends React.Component {
  state = {
    value: "",
  };

  signedIn = () => {
    return this.props.user ? (
      <Nav.Item>
        <Nav.Link as={Link} to={"/admin"}>
          <ion-icon name="person-outline"></ion-icon>
        </Nav.Link>
      </Nav.Item>
    ) : (
      <Nav.Item>
        <Nav.Link as={Link} to={"/admin/signin"}>
          <ion-icon name="log-in-outline"></ion-icon>{" "}
        </Nav.Link>
      </Nav.Item>
    );
  };

  render() {
    return (
      <Nav fill variant="pills">
        <Nav.Item>
          <Nav.Link as={Link} to={"/admin/properties"}>
            <ion-icon name="bed-outline"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={"/admin/bookings"}>
            <ion-icon name="calendar-outline"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        {this.signedIn()}
      </Nav>
    );
  }
}
export default NavBar2;
