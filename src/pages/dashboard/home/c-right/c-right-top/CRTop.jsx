import React from "react";
import styles from "./CRTop.module.css";

const CRTop = (props) => (
  <div className={styles.CRTop}>
    <div className={styles.Profile}>
      <img src={props.pImage} alt="profile image" />
      <p className={styles.Name}>{props.name}</p>
      <p className={styles.Location}>{props.location}</p>
    </div>
    <div className={styles.BookingTypes}>
      <div>
        <p className={styles.BookingTypeAmt}>{props.booktypeAmt.workspaceAmt}</p>
        <p className={styles.BookingTypeName}>Workspaces</p>
      </div>
      <div>
        <p className={styles.BookingTypeAmt}>{props.booktypeAmt.meetingRoomAmt}</p>
        <p className={styles.BookingTypeName}>Meeting Rooms</p>
      </div>
      <div>
        <p className={styles.BookingTypeAmt}>{props.booktypeAmt.apartmentAmt}</p>
        <p className={styles.BookingTypeName}>Apartments</p>
      </div>
    </div>
    <div className={styles.MembershipID}>
      <p className={styles.MembershipIDLabel}>Membership ID:</p>
      <p className={styles.MembershipIDValue}>{props.membershipID}</p>
    </div>
    
  </div>
);

export default CRTop;
