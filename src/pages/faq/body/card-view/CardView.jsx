import React from "react";
import styles from "./CardView.module.css";
import { ReactComponent as DownArrow } from "../../../../assets/downArrowFAQ.svg";

const CardView = (props) => (
  <div className={styles.CardView}>
    <div className={styles.TopLayout}>
      <p className={styles.Title}>{props.value}</p>
      <DownArrow style={{ transform: props.descIsShown && 'rotate(180deg)'}} onClick={() => props.toggleDescription(props.location, props.propertyName)} />
    </div>
    {props.descIsShown && (
      <div className={styles.BottomLayout}>
        <p className={styles.Text}>{props.desc}</p>
      </div>
    )}
  </div>
);

export default CardView;
