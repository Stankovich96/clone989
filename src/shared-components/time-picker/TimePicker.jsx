import React from "react";
import styles from "./TimePicker.module.css";

class TimePicker extends React.Component {
  state = {
    hour: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    minutes: [0, 15, 30, 45],
    meridian: ["am", "pm"],
    chosenMinute: 0,
    chosenHour: 12,
    chosenMeridian: "am",
  };

  setMinute = (min) => {
    this.setState({ chosenMinute: min });
  };

  setHour = (hour) => {
    this.setState({ chosenHour: hour });
  };

  setMeridian = (mrdn) => {
    this.setState({ chosenMeridian: mrdn });
  };

  render() {
    const {
      hour,
      minutes,
      meridian,
      chosenHour,
      chosenMeridian,
      chosenMinute,
    } = this.state;
    return (
      <div className={styles.Parent}>
        <div className={styles.TimePicker}>
          <div className={styles.Top}></div>
          <div className={styles.Middle}>
            <div className={styles.Hour}>
              {hour.map((hour, i) => (
                <p
                  key={i}
                  onClick={() => this.setHour(hour)}
                  style={{
                    fontSize: chosenHour === hour && "32px",
                  }}
                >
                  {hour}
                </p>
              ))}
            </div>
            <div className={styles.Minute}>
              {minutes.map((m, i) => (
                <p
                  key={i}
                  onClick={() => this.setMinute(m)}
                  style={{
                    fontSize: chosenMinute === m && "32px",
                  }}
                >
                  {i == 0 ? "00" : m}
                </p>
              ))}
            </div>
            <div className={styles.Meridian}>
              {meridian.map((mr, i) => (
                <p
                  key={i}
                  onClick={() => this.setMeridian(mr)}
                  style={{
                    fontSize: chosenMeridian === mr && "32px",
                  }}
                >
                  {mr}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.Bottom}>
            <p onClick={this.props.hideTimePicker}>Cancel</p>
            <p
              onClick={() =>
                this.props.fetchTime(chosenHour, chosenMinute, chosenMeridian)
              }
            >
              Ok
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TimePicker;
