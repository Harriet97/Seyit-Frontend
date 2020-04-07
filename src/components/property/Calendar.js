import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

class Calendar extends Component {
  state = {
    startDate: null,
    endDate: null
  };

  isBlocked = date => {
    let bookedRanges = this.props.bookings.map(booking =>
      moment.range(booking.startDate, booking.endDate)
    );

    return bookedRanges.find(range => range.contains(date));
  };

  alertStartDate = () => {
    alert(this.state.startDate);
    console.log(this.state.startDate._d);
  };
  alertEndDate = () => {
    alert(this.state.endDate);
    console.log(this.state.startDate._d);
  };
  render() {
    return (
      <div className="App">
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
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <br></br>
        {/* <button onClick={this.alertStartDate}>Click me for start date</button> */}
        {/* <button onClick={this.alertEndDate}>Click me for end date</button> */}
      </div>
    );
  }
}
export default Calendar;
