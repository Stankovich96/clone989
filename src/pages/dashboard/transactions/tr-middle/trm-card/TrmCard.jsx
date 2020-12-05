import React from "react";
import styles from "./TrmCard.module.css";
import { ReactComponent as DateIcon } from "../../../../../assets/dashboard/dbDatesIcon.svg";
import Rating from "../../../../../shared-components/rating/Rating";

const TrmCard = (props) => (
  <div className={styles.TrmCard} onClick={() => props.click(props)}>
    <img src={props.image} alt="Booking Image" />
    <div className={styles.NameAndDate}>
      <div className={styles.Top}>
        <p className={styles.Name}>{props.name}</p>
        <p className={styles.Location}>{props.location}</p>
      </div>
      <div className={styles.Bottom}>
        <p className={styles.BookText}>Booked On</p>
        <div className={styles.DateLayout}>
          <DateIcon />
          <p className={styles.Date}>{props.date}</p>
        </div>
      </div>
    </div>
    <div className={styles.TypeAndRating}>
      <p className={styles.Type}>{props.type}</p>
      <div className={styles.RatingLayout}>
        <p className={styles.RatingText}>989 Rating</p>
        <Rating isDarkStar starCount={props.rating} />
      </div>
    </div>
  </div>
);

export default TrmCard;
