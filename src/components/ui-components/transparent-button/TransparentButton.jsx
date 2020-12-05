import React from "react";
import styles from "./TransparentButton.module.css";

const TransparentButton = (props) => (
  <button
    className={styles.TransparentButton}
    style={{ color: props.btnColor, border: props.btnBorder, width: props.btnWidth }}
  >
    {props.text}
  </button>
);

export default TransparentButton;
