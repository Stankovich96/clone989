import React from "react";
import styles from "./FormTimeChooser.module.css";
import TimeIcon from "../../../../assets/TimeIcon.svg";
import TimeField from "react-simple-timefield";

const getMeridian = (timeString) => (
  parseInt(timeString.substring(0, 2)) >= 12 ? 'PM' : 'AM' 
);

const FormTimeChooser = (props) => (
  <div className={styles.TimeChooser}>
    <p>Set your preferred time</p>
    <div>
      <div className={styles.TimeLayout}>
        <p className={styles.TimeLabel}>Start Time</p>
        <div className={styles.TimeContainer}>
          <TimeField
            value={props.startTime} // {String}   required, format '00:00' or '00:00:00'
            onChange={props.onStartChange} // {Function} required
            colon=":" // {String}   default: ":"
            style={{
              border: "none",
              fontSize: 17,
              fontWeight: 500,
              color: '#3a2b20',
              width: 45,
              height: '100%',
              padding: "18px 0px"
            }}
          />
          <p>{getMeridian(props.startTime)}</p>
          <img src={TimeIcon} alt="" />
        </div>
      </div>
      <div className={styles.TimeLayout}>
        <p className={styles.TimeLabel}>End Time</p>
        <div className={styles.TimeContainer}>
        <TimeField
            value={props.endTime} // {String}   required, format '00:00' or '00:00:00'
            onChange={props.onEndChange} // {Function} required
            colon=":" // {String}   default: ":"
            style={{
              border: "none",
              fontSize: 17,
              fontWeight: 500,
              color: '#3a2b20',
              width: 45,
              height: '100%',
              padding: "18px 0px"
            }}
          />
          <p>{getMeridian(props.endTime)}</p>
          <img src={TimeIcon} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default FormTimeChooser;
