import React from "react";
import styles from "./SingleAmenity.module.css";

const SingleAmenity = (props) => (
  <div className={styles.SingleAmenity}>
    <img src={props.amenityImg} alt="" />
    <p>{props.amenityName}</p>
  </div>
);

export default SingleAmenity;
