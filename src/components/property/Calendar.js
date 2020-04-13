import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { Button } from "react-bootstrap";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { Link } from "react-router-dom";
const moment = extendMoment(Moment);

class Calendar extends Component {
  state = {
    startDate: null,
    endDate: null,
  };

  isBlocked = (date) => {
    let bookedRanges = this.props.bookings.map((booking) =>
      moment.range(booking.startDate, booking.endDate)
    );

    return bookedRanges.find((range) => range.contains(date));
  };

  render() {
    let bookingLink = "";

    if (this.state.startDate && this.state.endDate) {
      bookingLink =
        "/properties/" +
        this.props.id +
        "/book/" +
        this.state.startDate.format("YYYY-MM-DD") +
        "/" +
        this.state.endDate.format("YYYY-MM-DD");
    }

    console.log(bookingLink);
    return (
      <div className="calendar">
        <DateRangePicker
          orientation="vertical"
          numberOfMonths="2"
          block="true"
          openDirection="up"
          // withFullScreenPortal="true"
          minimumNights="30"
          isDayBlocked={this.isBlocked}
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
        <br></br>

        <Button as={Link} to={bookingLink}>
          make a booking
        </Button>
      </div>
    );
  }
}
export default Calendar;
