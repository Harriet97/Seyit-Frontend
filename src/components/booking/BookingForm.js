import React from "react";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import API from "../../api";

class BookingForm extends React.Component {
  state = {
    property: null,
  };

  componentDidMount() {
    API.getProperty(this.props.match.params.id).then((property) =>
      this.setState({ property })
    );
  }

  render() {
    // const { start_date, end_date, id } = this.props.match.params;
    if (!this.state.property) return "Loading...";
    const totaldays =
      moment(this.props.match.params.end_date).diff(
        moment(this.props.match.params.start_date),
        "days"
      ) / 30;

    const totalprice = this.state.property.price;
    return (
      <div>
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
        <h3> months: {totaldays.toFixed(1)} </h3>
        <h3> price: {totalprice} </h3>
        <h3> total: £ {(totaldays * totalprice).toFixed(2)} </h3>

        <Button as={Link} to={"/properties/" + this.props.match.params.id}>
          back
        </Button>
        <Button onClick={() => this.props.makeBooking(this.props.match.params)}>
          {" "}
          Request to Book
        </Button>
      </div>
    );
  }
}

export default BookingForm;
