import React from "react";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import TimePicker from "../../../shared-components/time-picker/TimePicker";
import Navigation from "../navigation/Navigation";
import DateTimeUpdate from "./date-time-update/DateTimeUpdate";
import styles from "./UpdateReservation.module.css";

class UpdateReservation extends React.Component {
  state = {
    timePickerShown: false,
    value:''
  };

  showTimePicker = () => {
    this.setState({ timePickerShown: true });
  };

  hideTimePicker = () => {
    this.setState({ timePickerShown: false });
  };
  
  fetchTime = (ch, cm, cmr) => {
      const val=`${ch}:${cm} ${cmr}`;
    this.setState({ value: val, timePickerShown: false  });
  };
  render() {
    return (
      <>
        <Navigation />
        <div className={styles.Parent}>
          <BackButton MarginLt="120px" history={this.props.history} to="/dashboard/selectedTransaction"/>
          <div className={styles.UpdateReservation}>
            <div className={styles.CPlanLayout}>
              <p className={styles.CurrentPlan}>Current plan</p>
              <p className={styles.CPlanValue}>1 Month</p>
              <p className={styles.CPlanDate}>3 Sep. 2020 - 3 Oct. 2020</p>
            </div>
            <DateTimeUpdate
              showTimePicker={this.showTimePicker}
              value={this.state.value}
            />
          </div>
          {this.state.timePickerShown && (
            <TimePicker
              hideTimePicker={this.hideTimePicker}
              fetchTime={this.fetchTime}
            />
          )}
        </div>
      </>
    );
  }
}

export default UpdateReservation;
