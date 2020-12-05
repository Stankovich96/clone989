import React from "react";
import { Link } from "react-router-dom";
import styles from "./ViewButton.module.css";

const ViewButton = (props) => (
  <Link to={props.url}>
    <div className={styles.ViewButton}>
      <p>View</p>
      <div></div>
    </div>
  </Link>
);

export default ViewButton;
