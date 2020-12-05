import React from "react";
import TrmCard from "../trm-card/TrmCard";
import styles from "./TrmApartment.module.css";

const TrmApartment = (props) => (
  
  <div className={styles.TrmApartment}>
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

export default TrmApartment;
