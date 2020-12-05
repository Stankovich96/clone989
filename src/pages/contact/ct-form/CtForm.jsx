import React from "react";
import styles from "./CtForm.module.css";
import { ReactComponent as NameIcon } from "../../../assets/NameIcon.svg";
import { ReactComponent as EmailIcon } from "../../../assets/EmailIcon.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/PhoneIcon.svg";
import InterestDropdown from "./area-of-interest/InterestDropdown";

const st = [styles.CommonLayout];

const CtForm = (props) => (
  
  <form className={styles.Form}>
    <div className={[...st, styles.NameLayout].join(" ")}>
      <NameIcon />
      <input placeholder="Your name here" />
    </div>
    <div className={`${styles.CommonLayout} ${styles.EmailLayout}`}>
      <EmailIcon />
      <input placeholder="Email" />
    </div>
    <div className={`${styles.CommonLayout} ${styles.PhoneLayout}`}>
      <PhoneIcon />
      <input placeholder="Phone Number" />
    </div>
    <InterestDropdown />
    <textarea
      className={`${styles.CommonLayout} ${styles.TextArea}`}
      placeholder="Enter your message"
    />
    <div className={styles.RobotLayout}>
      <input className={styles.RobotCheck} type="checkbox" id="robot" />
      <label for="robot">I'm not a robot</label>
    </div>
    <button className={styles.Send}>Send</button>
  </form>
 

);

export default CtForm;
