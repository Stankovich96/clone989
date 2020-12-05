import React from "react";
import styles from "./DbBookBtn.module.css";
import { ReactComponent as PlusIcon } from '../../../assets/dashboard/dbPlusIcon.svg';

const DbBookBtn = (props) => (
  <button className={styles.DbBookBtn} onClick={props.click}>
    <PlusIcon />
    Book
  </button>
);

export default DbBookBtn;
