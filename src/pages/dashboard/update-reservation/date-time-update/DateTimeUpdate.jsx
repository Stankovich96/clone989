import React from "react";
import styles from "./DateTimeUpdate.module.css";
import { ReactComponent as DateIcon } from "../../../../assets/dashboard/dbDateForUpdateReservation.svg";

import { ReactComponent as TimeIcon } from "../../../../assets/dashboard/dbTimeForUpdateReservation.svg";
import WSCDate from "../../../../components/ui-components/workspace-search-container/wsc-date/WSCDate";

const CustomInput = ({ value, onClick }) => (
  <input
    className={styles.CustomInput}
    onClick={onClick}
    value={value}
    readonly="readonly"
    placeholder="Choose Expiry Date"
  />
);

const DateTimeUpdate = (props) => (
  <div className={styles.DateTimeUpdate}>
    <p className={styles.UpdateText}>Update your Reservation</p>
    <div className={styles.DateAndTIme}>
      <div className={styles.DateLayout}>
        <div className={styles.ExpDateTop}>
          <p className={styles.ExpDateLabel}>Set an new Expiry Date</p>
          <div className={styles.DateIconBox}>
            <DateIcon />
          </div>
        </div>
        <div className={styles.ExpDateBtm}>
          <p className={styles.ExpDateValue}>
            3 Sept 2020<span> to</span>
          </p>

          <WSCDate customInput={<CustomInput />} />
        </div>
      </div>

      <div className={styles.DateLayout}>
        <div className={styles.ExpDateTop}>
          <p className={styles.ExpDateLabel}>Extend Time</p>
          <div className={styles.DateIconBox}>
            <TimeIcon />
          </div>
        </div>
        <div className={styles.ExpDateBtm}>
          <p className={styles.ExpDateValue}>
            9 am<span> to</span>
          </p>
          <input
            readOnly="readonly"
            onClick={props.showTimePicker}
            className={styles.CustomInput}
            placeholder='Set End Time'
            value={props.value}
          />
        </div>
      </div>
    </div>

    <div className={styles.EstimatedCostLayout}>
      <div className={styles.EstCostLeft}>
        <p className={styles.EstCostLabel}>Estimated Cost</p>
        <p className={styles.EstCostVal}>N10, 000</p>
      </div>
      <div className={styles.Divider}></div>
      <button>Update</button>
    </div>
  </div>
);

export default DateTimeUpdate;
