import React from "react";
import { Button } from "semantic-ui-react";
import NavBar from "../common/Navbar";
import moment from "moment";
class BookingForm extends React.Component {
  render() {
    // const { start_date, end_date, id } = this.props.match.params;
    return (
      <div className="App">
        <h1>Make a booking:</h1>
        <table>
          <tr>
            <th>check-in:</th>
            <th>check-out:</th>
          </tr>
          <tr>
            <td>
              {moment(this.props.match.params.start_date).format(
                "ddd, MMMM Do YYYY"
              )}
            </td>
            <td>
              {moment(this.props.match.params.end_date).format(
                "ddd, MMMM Do YYYY"
              )}
            </td>
          </tr>
        </table>

        <Button onClick={() => this.props.makeBooking(this.props.match.params)}>
          {" "}
          Request to Book
        </Button>
        <NavBar />
      </div>
    );
  }
}

export default BookingForm;
