import React from "react";
import styles from "./SingleNearbyWorkspace.module.css";

const SingleNearbyWorkspace = (props) =>  (
    <div className={styles.SingleCard}>
      <img src={props.officeImg} alt={props.title} />
      <p className={styles.Title}>{props.title}</p>
      <p className={styles.Location}>{props.location}</p>
      <p className={styles.Distance}>N{props.distance} per month</p>
    </div>
  );

export default SingleNearbyWorkspace;
