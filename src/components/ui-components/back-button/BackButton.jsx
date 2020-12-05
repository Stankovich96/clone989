import React from "react";
import styles from "./BackButton.module.css";
import BackArrow from "../../../assets/backArrow.svg";
import PropTypes from "prop-types";

const BackButton = (props) => (
    <div onClick={() => props.history.push(props.to)} className={styles.BackButton} style={{marginTop: props.MarginTp, marginLeft: props.MarginLt}}>
      <img src={BackArrow} alt="back arrow" />
      <p>Back</p>
    </div>
);

BackButton.propTypes = {
  MarginTp: PropTypes.string,
  MarginLt: PropTypes.string
}

export default BackButton;
