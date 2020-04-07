import React from "react";
import { Button } from "semantic-ui-react";
import NavBar from "../common/Navbar";

class BookingForm extends React.Component {
  render() {
    const { start_date, end_date, id } = this.props.match.params;
    return (
      <div className="App">
        <h1>BookingForm</h1>
        <h3>start date: {start_date}</h3>
        <h3>end date:{end_date}</h3>
        <h3>property id:{id}</h3>
        {/* <h3>guest id: {this.state.user.email}</h3> */}
        {/* <Button onClick={() => this.props.makeBooking(this.props.match.params)}>
          {" "}
          make booking
        </Button> */}
        <NavBar />
      </div>
    );
  }
}

export default BookingForm;
