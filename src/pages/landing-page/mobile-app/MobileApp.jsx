import React from "react";
import styles from "./MobileApp.module.css";
import MobileAppImg from "../../../assets/mobileApp.png";
import GooglePlayBlack from '../../../assets/googlePlayBlack.svg';
import ApplestoreBlack from '../../../assets/applestoreBlack.svg';

const MobileApp = (prop) => (
  <div className={styles.MobileApp}>
    <div className={styles.Left}>
      <img src={MobileAppImg} alt="mobile app" />
    </div>
    <div className={styles.Right}>
      <p className={styles.Title}>Book on the fly with our app</p>
      <p className={styles.Desc}>
        Unlock the world of booking possibilities with 989 app. Search and book
        places of your interest through our mobile app.$
        {
          <p>
            You can download the 989 app on the Apple App Store or Google
            Playstore
          </p>
        }
      </p>
      <div className={styles.Stores}>
        <img src={GooglePlayBlack} alt='google play' />
        <img src={ApplestoreBlack} alt='apple store' />
      </div>
    </div>
  </div>
);

export default MobileApp;
