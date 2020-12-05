import React from "react";
import Navigation from "../navigation/Navigation";
import DummyImg from "../../../assets/dashboard/dbDummyProfileImg.png";
import { ReactComponent as PlusIcon } from "../../../assets/plusIcon.svg";
import styles from "./Profile.module.css";

class Profile extends React.Component {
  render() {
    return (
      <div className={styles.Parent}>
        <Navigation />
        <p className={styles.ProfileText}>Profile</p>
        <div className={styles.MainContent}>
          <div className={styles.Left}>
            <div>
              <img src={DummyImg} alt="" />
              <div className={styles.PlusLayout}>
                <PlusIcon />
              </div>
            </div>
          </div>

          <div className={styles.Right}>
            <div className={styles.TopSection}>
              <div className={styles.VertLayout}>
                <p className={styles.Text}>Full Name</p>
                <input className={styles.Input} type="text" placeholder="Update Name" />
              </div>
              <div className={styles.VertLayout}>
                <p className={styles.Text}>Email</p>
                <input className={styles.Input} type="email" placeholder="Update Email" />
              </div>
            </div>

            <div className={styles.BottomSection}>
              <div className={styles.VertLayout}>
                <p className={styles.Text}>Mobile Number</p>
                <input className={styles.Input} type="number" placeholder="Update mobile number" />
              </div>
              <div className={styles.VertLayout}>
                <p className={styles.Text}>Password</p>
                <input type="password" placeholder="Update Password" />
              </div>
            </div>

            <button>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
