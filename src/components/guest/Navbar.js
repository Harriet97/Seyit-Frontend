import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    value: "",
  };

  signedIn = () => {
    return this.props.user ? (
      <Nav.Item>
        <Nav.Link as={Link} to={"/account"}>
          <ion-icon name="person-outline"></ion-icon>
        </Nav.Link>
      </Nav.Item>
    ) : (
      <Nav.Item>
        <Nav.Link as={Link} to={"/signin"}>
          <ion-icon name="log-in-outline"></ion-icon>{" "}
        </Nav.Link>
      </Nav.Item>
    );
  };

  render() {
    return (
      <Nav fill variant="pills" style={{ color: "pink" }}>
        <Nav.Item>
          <Nav.Link as={Link} to={"/properties"}>
            <ion-icon className="navicon" name="search-outline"></ion-icon>{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={"/favourites"}>
            <ion-icon name="heart-outline"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to={"/bookings"}>
            <ion-icon name="calendar-outline"></ion-icon>
          </Nav.Link>
        </Nav.Item>
        {this.signedIn()}
      </Nav>
    );
  }
}
export default NavBar;
