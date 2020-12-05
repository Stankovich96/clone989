import React from "react";
import Rating from "../../../../shared-components/rating/Rating";
import styles from "./TrRight.module.css";
import ImageTemplate from "../../../../assets/workspace/workspaceImg2.png";
import { ReactComponent as DateIcon } from "../../../../assets/dashboard/dbDatesIcon.svg";
import { ReactComponent as TimeIcon } from "../../../../assets/dashboard/dbTime.svg";
import { ReactComponent as ProfileIcon } from "../../../../assets/dashboard/dbProfile.svg";

const TrRight = (props) => (
  <div className={styles.TrRight}>
    <div className={styles.ImageLayout}>
      <img src={props.clickedCard.image} alt="" />
      <p className={styles.BookType}>{props.clickedCard.type}</p>
    </div>

    <div className={styles.Section1}>
      <div className={styles.NameAndLocation}>
        <p className={styles.Name}>{props.clickedCard.name}</p>
        <p className={styles.Location}>{props.clickedCard.location}</p>
      </div>
      <div className={styles.RatingLayout}>
        <p className={styles.Rating}>989 Rating</p>
        <Rating isDarkStar starCount={props.clickedCard.rating} />
      </div>
    </div>
    <div className={styles.LeftDivider}></div>
    <div className={styles.Section2}>
      <div className={styles.BookedOnLayout}>
        <p className={styles.Text}>Booked On</p>
        <div className={styles.DateLayout}>
          <DateIcon />
          <p className={styles.BookedDate}>{props.clickedCard.date}</p>
        </div>
      </div>
      <div className={styles.ExpiredLayout}>
        <p className={styles.Text}>Expires</p>
        <div className={styles.DateLayout}>
          <DateIcon />
          <p className={styles.ExpireDate}>12 Oct. 2020</p>
        </div>
      </div>
    </div>
    <div className={styles.RightDivider}></div>
    <div className={styles.Section3}>
      <div className={styles.AmountLayout}>
        <p className={styles.Text}>Amount</p>
        <p className={styles.AmountValue}>N10, 000</p>
      </div>
      <div className={styles.WorkspaceLayout}>
        <p className={styles.Text}>Workspace</p>
        <p className={styles.WorkspaceValue}>Private Workspace</p>
      </div>
    </div>
    <div className={styles.LeftDivider}></div>
    <div className={styles.Section4}>
      <div className={styles.StartTimeLayout}>
        <p className={styles.Text}>Start Time</p>
        <div className={styles.Sec4SharedStyle}>
          <TimeIcon />
          <p className={styles.StartTimeValue}>9 am</p>
        </div>
      </div>
      <div className={styles.EndTimeLayout}>
        <p className={styles.Text}>End Time</p>
        <div className={styles.Sec4SharedStyle}>
          <TimeIcon />
          <p className={styles.EndTimeValue}>12 pm</p>
        </div>
      </div>
      <div className={styles.TeammateLayout}>
        <p className={styles.Text}>Teammates</p>
        <div className={styles.Sec4SharedStyle}>
          <ProfileIcon />
          <p className={styles.TeammateValue}>10</p>
        </div>
      </div>
    </div>
  </div>
);

export default TrRight;
