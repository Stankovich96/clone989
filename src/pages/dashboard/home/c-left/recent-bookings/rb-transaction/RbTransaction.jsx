import React from "react";
import styles from "./RbTransaction.module.css";
import { ReactComponent as ProfileIcon } from "../../../../../../assets/dashboard/dbPersonIcon.svg";
import { ReactComponent as DateIcon } from "../../../../../../assets/dashboard/dbDatesIcon.svg";
import PropTypes from "prop-types";

const RbTransaction = (props) => (
  <div className={styles.RbTransaction}>
    <div className={styles.PNL}>
      <img src={props.img} alt="transaction" />
      <div className={styles.NameAndLocation}>
        <p className={styles.TransName}>{props.name}</p>
        <p className={styles.TransLocation}>{props.location}</p>
      </div>
    </div>

    <div className={styles.TeammateAmtLayout}>
      <ProfileIcon />
      <p className={styles.TeammateLabel}>{props.numOfPeople} teammates</p>
    </div>
    <div className={styles.DateLayout}>
      <DateIcon />
      <p className={styles.Date}>{props.date}</p>
    </div>
    <p className={styles.BookingType}>{props.bookingType}</p>
  </div>
);

RbTransaction.propTypes = {
  img: PropTypes.node,
  name: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  numOfPeople: PropTypes.number,
};

export default RbTransaction;
