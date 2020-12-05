import React from "react";
import Rating from "../../../../../../shared-components/rating/Rating";
import styles from "./BookTypeCard.module.css";
import { ReactComponent as ProfileIcon } from "../../../../../../assets/dashboard/dbPersonIcon.svg";
import { ReactComponent as DateIcon } from "../../../../../../assets/dashboard/dbDatesIcon.svg";

const BookTypeCard = (props) => (
  <div className={styles.BookTypeCard}>
    <div className={styles.NameAndLocation}>
      <p className={styles.Name}>{props.name}</p>
      <p className={styles.Location}>{props.location}</p>
    </div>
    <div className={styles.DateAndRating}>
      <div className={styles.NumAndDate}>
        <div className={styles.ProfileLayout}>
          <ProfileIcon />
          <p className={styles.NumOfPeople}>{props.numOfPeople} teammates</p>
        </div>
        <div className={styles.DateLayout}>
          <DateIcon />
          <p className={styles.Date}>{props.date}</p>
        </div>
      </div>
      <div className={styles.RatingLayout}>
        <p className={styles.Rating}>989 Rating</p>
        <Rating starCount={5} isDarkStar />
      </div>
    </div>
    <img src={props.img} alt="" />
  </div>
);

export default BookTypeCard;
