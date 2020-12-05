import React from "react";
import TrmCard from "../trm-card/TrmCard";
import styles from "./TrmMeetingRoom.module.css";

const TrmMeetingRoom = (props) => (
  
  <div className={styles.TrmMeetingRoom}>
    {props.transForMonth.map(
      ({ image, name, location, rating, type, date }, index) => (
        <TrmCard
          key={index}
          image={image}
          name={name}
          location={location}
          rating={rating}
          type={type}
          date={date}
          click={props.click}
        />
      )
    )}
  </div>
);

export default TrmMeetingRoom;
