import React from "react";
import { Button } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import API from "../../api";

class BookingForm extends React.Component {
  state = {
    property: null,
    madeBooking: false,
  };

  componentDidMount() {
    API.getProperty(this.props.match.params.id).then((property) =>
      this.setState({ property })
    );
  }

  makeBooking = () => {
    let bookingObj = {
      startDate: this.props.match.params.start_date,
      endDate: this.props.match.params.end_date,
      property_id: this.props.match.params.id,
      guest_id: this.props.guest,
    };
    // console.log(bookingObj);
    API.makeBooking(bookingObj).then((booking) =>
      this.setState({ madeBooking: true }, () => {
        this.props.history.push("/bookings");
      })
    );
  };

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
        <br></br>
        <h6>price details:</h6>
        <h4>
          {" "}
          £{totalprice} x {totaldays.toFixed(1)} months
        </h4>
        {/* <h4> months: {totaldays.toFixed(1)} </h3> */}
        {/* <h3> price: {totalprice} </h3> */}
        <br></br>
        <h4> Total: £ {(totaldays * totalprice).toFixed(2)} </h4>

        <Button as={Link} to={"/properties/" + this.props.match.params.id}>
          back
        </Button>

        <Button onClick={() => this.makeBooking()}> Request to Book</Button>
      </div>
    );
  }
}

export default BookingForm;
