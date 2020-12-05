import React from "react";
import TrmCard from "../trm-card/TrmCard";
import styles from "./TrmAll.module.css";

const TrmAll = (props) => (
  
  <div className={styles.TrmAll}>
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
          index={index}
          click={props.click}
        />
      )
    )}
  </div>
);

export default TrmAll;
