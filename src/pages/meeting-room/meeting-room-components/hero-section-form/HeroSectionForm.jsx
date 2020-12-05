import React from "react";
import { Link } from "react-router-dom";
import SelectDatePicker from "../date-input/DateInput";
import { cities, attendees } from "../../../../external-data/location-data";

import {
  SelectAttendeesInput,
  SelectLocationInput,
} from "../select-input/select-input";

const optionsForCities = cities;

const HeroSectionForm = (props) => {
  return (
    <form className="booking-form">
      <div className="input-1">
        <SelectLocationInput
          options={optionsForCities}
          placeholder={"Location"}
          theme = {theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e7e7e7',
              primary: 'black',
            }
          })}
        />
      </div>
      <div className="input-2 form-date">
        <SelectDatePicker />
      </div>
      <div className="input-3">
        <SelectAttendeesInput
          options={attendees}
          placeholder={"attendees"}
          theme = {theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e7e7e7',
              primary: 'black',
            }
          })}
          width='300px'
        />
      </div>
      <Link className="submit-button" to="/MeetingRoomResults" ><button className="button submit-button">FIND SPACE</button></Link>
    </form>
  );
};

export default HeroSectionForm;
