import React, { Component } from "react";
import LogoOnlyHeader from "../../../shared-components/logo-only-header/LogoOnlyHeader";
import styles from "./Booking.module.css";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import DurationTopSection from "./duration-top-section/DurationTopSection";
import FormPeriodChooser from "./form-period-chooser/FormPeriodChooser";
import FormTimeChooser from "./form-time-chooser/FormTimeChooser";
import { Link } from "react-router-dom";

class Booking extends Component {
  state = {
    time: "08:00",
    endTime: "13:00",
    teammateValue: 1,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onStartChange = (event, value) => {
    const newTime = value.replace(/-/g, ":");
    const time = newTime.substr(0, 5);
    this.setState({ time: time });
  };

  onEndChange = (event, value) => {
    const newTime = value.replace(/-/g, ":");
    const time = newTime.substr(0, 5);
    this.setState({ endTime: time });
  };

  click = (isSubtract) => {
    const teammateValue = this.state.teammateValue;
    if(teammateValue == 1 && isSubtract) {

    } else if (teammateValue >= 1) {
      this.setState({
        teammateValue: isSubtract ? teammateValue - 1 : teammateValue + 1,
      });
    }
  };

  MyCustomInputElement = (props) => <input className={styles.T} type="text" />;

  render() {
    return (
      <div className={styles.Booking}>
        <LogoOnlyHeader />
        <DurationTopSection
          click={this.click}
          teammateValue={this.state.teammateValue}
        />
        <div className={styles.Body}>
          <div className={styles.BackButtonParent}>
            <BackButton
              history={this.props.history}
              to="/workspace/selectedWorkspaceDescription"
              MarginLt="0px"
            />
          </div>
          <div className={styles.BodyContent}>
            <p>Set a duration for your stay</p>
            <div className={styles.Form}>
              <FormPeriodChooser />
              <FormTimeChooser
                startTime={this.state.time}
                endTime={this.state.endTime}
                onStartChange={this.onStartChange}
                onEndChange={this.onEndChange}
              />
              <div className={styles.OccurrenceRadioButtons}>
                <div>
                  <input
                    type="radio"
                    id="one-time"
                    name="occurrence"
                    value="one-time"
                  />
                  <label for="one-time">One-time</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="recurrent"
                    name="occurrence"
                    value="recurrent"
                  />
                  <label for="recurrent">Recurrent</label>
                </div>
              </div>
              <Link to="/workspace/finalBookingStage">
                <button>Proceed</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
