import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleCard.module.css";

const SingleCard = (props) => (
  <div className={styles.SingleCard}>
    <Link to={`/${props.url}`}>
      <div className={styles.ImgParent}>
        <div style={{ backgroundImage: `url(${props.officeImg})` }} className={styles.ImgChild}></div>
      </div>
      <p className={styles.Title}>{props.title}</p>
      <p className={styles.Location}>{props.location}</p>
      <p className={styles.Pricing}>N{props.pricing} per month</p>
    </Link>
  </div>
);

export default SingleCard;
