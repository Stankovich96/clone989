import React, { Component } from "react";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import LogoOnlyHeader from "../../../shared-components/logo-only-header/LogoOnlyHeader";
import styles from "./FinalBookingStage.module.css";
import PaymentConfirmation from "./payment-confirmation/PaymentConfirmation";
import PersonalDetails from "./personal-details/PersonalDetails";

class FinalBookingStage extends Component {
  state = {
    personalDetailsShown: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  activateTab = (val) => {
    this.setState({ personalDetailsShown: val });
  };

  render() {
    const componentToShow = () => {
      if (this.state.personalDetailsShown) return <PersonalDetails click={this.activateTab}/>;
      return <PaymentConfirmation />;
    };

    const setStyle = (tabType) => {
      const styleActive = {
        fontWeight: 500,
        color: "#4a3a2f",
        fontSize: "17px",
      };
      const styleNonActive = {
        color: "#9FA09F",
        fontSize: "15px",
        fontWeight: "normal",
      };

      if (this.state.personalDetailsShown & (tabType === "PDetails")) {
        return styleActive;
      } else if (!this.state.personalDetailsShown & (tabType === "Payment")) {
        return styleActive;
      }
      return styleNonActive;
    };

    return (
      <div className={styles.FinalBookingStage}>
        <LogoOnlyHeader />
        <div className={styles.Body}>
          <div className={styles.Tab}>
            <div
              className={styles.PDetails}
              onClick={() => this.activateTab(true)}
            >
              <p style={setStyle("PDetails")}>Personal Details</p>
              <div
                style={{ opacity: this.state.personalDetailsShown ? 1 : 0 }}
              ></div>
            </div>
            <div
              className={styles.Payments}
              onClick={() => this.activateTab(false)}
            >
              <p style={setStyle("Payment")}>Payment</p>
              <div
                style={{ opacity: this.state.personalDetailsShown ? 0 : 1 }}
              ></div>
            </div>
          </div>
          <div></div>
          <BackButton history={this.props.history} to="/workspace/booking" />
          {componentToShow()}
          <div></div>
        </div>
      </div>
    );
  }
}

export default FinalBookingStage;
