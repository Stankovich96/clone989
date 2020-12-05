import React from "react";
import TrmCard from "../trm-card/TrmCard";
import styles from "./TrmWorkspaces.module.css";

const TrmWorkspaces = (props) => (
  
  <div className={styles.TrmWorkspaces}>
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

export default TrmWorkspaces;
