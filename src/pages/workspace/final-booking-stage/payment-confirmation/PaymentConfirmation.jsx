import React from "react";
import Rating from "../../../../shared-components/rating/Rating";
import styles from "./PaymentConfirmation.module.css";
import WorkspaceImg1 from "../../../../assets/workspace/workspaceImg1.png";
import { Link } from "react-router-dom";

const PaymentConfirmation = (props) => (
  <div className={styles.PaymentConfirmation}>
    <p>Confirm and Pay</p>
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
      <div className={styles.Edit}>
        <p>Edit</p>
        <div></div>
      </div>
    </div>
    <div className={styles.Section2}>
      <div>
        <div className={styles.Duration}>
          <p className={styles.Label}>Duration</p>
          <p className={styles.Value}>3 September, 2020 - 20 Septeber, 2020</p>
        </div>
        <div className={styles.Edit}>
          <p>Edit</p>
          <div></div>
        </div>
      </div>

      <div className={styles.TimeAndTeammateAmt}>
        <div className={styles.Time}>
          <p className={styles.Label}>Time</p>
          <p className={styles.Value}>9am - 2pm</p>
        </div>
        <div className={styles.Teammate}>
          <p className={styles.Label}>Team Mates</p>
          <p className={styles.Value}>3</p>
        </div>
        <div className={styles.Edit}>
          <p>Edit</p>
          <div></div>
        </div>
      </div>
    </div>
    <div className={styles.Section3}>
      <div className={styles.Price}>
        <p className={styles.Label}>Amount</p>
        <p className={styles.Value}>N10, 000</p>
      </div>
      <div className={styles.Plan}>
        <p className={styles.Label}>Payment Plan</p>
        <p className={styles.Value}>Recurrent</p>
      </div>
      <div></div>
      <div className={styles.Edit}>
        <p>Edit</p>
        <div></div>
      </div>
    </div>
    <div className={styles.Section4}>
      <button className={styles.Cancel}>Cancel</button>
      <Link to="/dashboard/home">
        <button className={styles.Pay}>Pay</button>
      </Link>
    </div>
  </div>
);

export default PaymentConfirmation;
