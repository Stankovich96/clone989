import React from "react";
import LogoOnlyHeader from "../../../shared-components/logo-only-header/LogoOnlyHeader";
import styles from "./VirtualTour.module.css";
import Close from "../../../assets/close.svg";
import { Link } from "react-router-dom";

class VirtualTour extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(this.props, "jelo");
  }

  navigateBack = () => {
    console.log(this.props, "jelo");
    this.props.history.push("/workspace/selectedWorkspaceDescription");
  };

  render() {
    return (
      <div className={styles.VirtualTour}>
        <LogoOnlyHeader />
        <img onClick={this.navigateBack} src={Close} alt="close" />
        <div className={styles.Body}>
          <div className={styles.Heading}>
            <div>
              <p className={styles.Title}>Book a virtual tour</p>
              <p className={styles.Description}>
                Fill in your details below. One of our representatives will get
                in touch with you
              </p>
            </div>
          </div>

          <div className={styles.Form}>
            <div className={styles.NameLayout}>
              <p>Full Name</p>
              <input placeholder="Full Name" />
            </div>
            <div className={styles.EmailAndNumber}>
              <div className={styles.EmailLayout}>
                <p>Email</p>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className={styles.MobileNumber}>
                <p>Mobile Number</p>
                <input type="number" placeholder="Input your mobile number" />
              </div>
            </div>
            <div className={styles.DateAndAmt}>
              <div className={styles.MoveInDate}>
                <p>Move-in Date</p>
                <input placeholder="Select a move-in date" />
              </div>
              <div className={styles.TeammateAmount}>
                <p>Number of Teammates</p>
                <input placeholder="0" />
              </div>
            </div>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VirtualTour;
