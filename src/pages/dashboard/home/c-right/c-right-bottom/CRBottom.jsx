import React from "react";
import styles from "./CRBottom.module.css";
import { ReactComponent as NotificationEmpty } from "../../../../../assets/dashboard/dbNotificationEmpty.svg";
import CRNotification from "./cr-notification/CRNotification";

const notifications = [
  {
    iconType: "expired",
    title: "Expiration",
    description: "Your reservation just expired",
    date: "3 days ago",
  },
  {
    iconType: "new",
    title: "New Booking",
    description: "Your booking was successful",
    date: "1 min ago",
  },
];

const CRBottom = (props) => (
  <div className={styles.CRBottom}>
    <p className={styles.NotificationTitle}>Notifications</p>
    {props.noitificationEmpty ? (
      <div className={styles.NotificationEmpty}>
        <NotificationEmpty />
        <p className={styles.NoNotificationText}>You have no notifications</p>
      </div>
    ) : (
      notifications.map(({ iconType, title, description, date }, i) => (
        <CRNotification
          iconType={iconType}
          title={title}
          description={description}
          date={date}
        />
      ))
    )}
  </div>
);

export default CRBottom;
