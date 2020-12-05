import React from "react";
import styles from "./CRNotification.module.css";
import { ReactComponent as BookingIcon } from "../../../../../../assets/dashboard/dbNewBookingIcon.svg";
import { ReactComponent as ExpiredIcon } from "../../../../../../assets/dashboard/dbExpiredBookingIcon.svg";

const CRNotification = (props) => (
  <div className={styles.CRNotification}>
    {props.iconType === "new" ? <BookingIcon /> : <ExpiredIcon />}
    <div className={styles.TitleAndDesc}>
      <p className={styles.Title}>{props.title}</p>
      <p className={styles.Description}>{props.description}</p>
    </div>
    <p className={styles.Date}>{props.date}</p>
  </div>
);
export default CRNotification;
