import React from "react";
import styles from "./AddSubtractButton.module.css";
import PlusIcon from "../../../assets/plusIcon.svg";
import SubtractIcon from "../../../assets/subtractIcon.svg";
import Proptype from 'prop-types';

const AddSubtractButton = (props) => (
  <button
    style={{ backgroundColor: props.bgColor }}
    className={styles.AddSubtractButton}
    onClick={props.click}
  >
    <img src={props.isSubtract ? SubtractIcon : PlusIcon} alt="button" />
  </button>
);

AddSubtractButton.prototypes = {
    isSubtract: Proptype.bool,
    bgColor: Proptype.string
}

export default AddSubtractButton;
