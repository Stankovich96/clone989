import React from "react";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import styles from "./ConfirmPay.module.css";
import WorkspaceImg1 from "../../../assets/workspace/workspaceImg1.png";
import Rating from "../../../shared-components/rating/Rating";
import Navigation from "../navigation/Navigation";

const ConfirmPay = (props) => (
  <>
    <Navigation />
    <div className={styles.ConfirmPay}>
      <BackButton MarginLt="70px" />
      <p className={styles.HeaderText}>Confirm and Pay</p>
      <div className={styles.MainContent}>
        <div className={styles.Section1}>
          <div className={styles.NameAndLocation}>
            <img src={WorkspaceImg1} alt="" />
            <div>
              <p className={styles.Name}>Tower Building</p>
              <p className={styles.Location}>Ikeja, Lagos</p>
              <Rating isDarkStar starCount={4.5} />
            </div>
          </div>
          <p className={styles.WorkspaceType}>Private workspace</p>
        </div>

        <div className={styles.Section2}>
          <p className={styles.DurationText}>Duration</p>
          <p className={styles.DurationValue}>
            3 September, 2020 - 20 Septeber, 2020
          </p>
        </div>

        <div className={styles.Section3}>
          <div className={styles.Time}>
            <p className={styles.Sec3Label}>Time</p>
            <p className={styles.TimeValue}>9am - 2pm</p>
          </div>
          <div className={styles.Amount}>
            <p className={styles.Sec3Label}>Amount</p>
            <p className={styles.AmountValue}>N10, 000</p>
          </div>
        </div>

        <div className={styles.EditAndPayBtn}>
          <button className={styles.EditBtn}>Edit</button>
          <button className={styles.PayBtn}>Pay</button>
        </div>
      </div>
    </div>
  </>
);

export default ConfirmPay;
