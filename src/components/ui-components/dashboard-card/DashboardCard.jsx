import React from "react";
import styles from "./DashboardCard.module.css";

const DashboardCard = (props) => (
  <div className={styles.DashboardCard} style={{ width: props.width}}>
    <p className={styles.Number}>{props.count}</p>
    <div className={styles.TypeLayout}>
      <p className={styles.Amt}>{props.type}</p>
      <p className={styles.Reserved}>Reserved</p>
    </div>
  </div>
);

export default DashboardCard;
