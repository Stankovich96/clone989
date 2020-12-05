import React from "react";
import styles from "./WSCDate.css";
import Select, { components } from "react-select";
import { groupedOptions } from "../../../../external-data/location-data";
import DatePicker from "react-datepicker";

class WSCDate extends React.Component {
  state = {
    startDate: false,
  };

  setStartDate(date) {
    this.setState({ startDate: date });
  }

  CustomInput = ({ value, onClick }) => (
    <input className='CustomInput_eQkwIL' onClick={onClick} readOnly="readOnly" value={value} placeholder="Add Date" />
  );

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={(date) => this.setStartDate(date)}
        customInput={this.props.customInput ? this.props.customInput : <this.CustomInput />}
        dateFormat="MMM d"
        minDate={new Date()}
        placeholderText="Add Date"
      />
    );
  }
}

export default WSCDate;
