import React from "react";
import styles from "./Navigation.module.css";
import { ReactComponent as Card } from "../../../assets/dashboard/dbCard.svg";
import { ReactComponent as CardLight } from "../../../assets/dashboard/dbCardLight.svg";
import { ReactComponent as Home } from "../../../assets/dashboard/dbHome.svg";
import { ReactComponent as HomeLight } from "../../../assets/dashboard/dbHomeLight.svg";
import { ReactComponent as LogoutLight } from "../../../assets/dashboard/dbLogoutLight.svg";
import { ReactComponent as Notification } from "../../../assets/dashboard/dbNotification.svg";
import { ReactComponent as NotificationLight } from "../../../assets/dashboard/dbNotificationLight.svg";
import { ReactComponent as NotificationEmpty } from "../../../assets/dashboard/dbNotificationEmpty.svg";
import { ReactComponent as Profile } from "../../../assets/dashboard/dbProfile.svg";
import { ReactComponent as ProfileLight } from "../../../assets/dashboard/dbProfileLight.svg";
import { ReactComponent as Trans } from "../../../assets/dashboard/dbTrans.svg";
import { ReactComponent as TransLight } from "../../../assets/dashboard/dbTransLight.svg";
import { ReactComponent as BlackLogo } from "../../../assets/989BlackLogo.svg";
import { Link, NavLink } from "react-router-dom";

const Navigation = (props) => (
  <div className={styles.Navigation}>
    <BlackLogo />
    <div className={styles.NavBody}>
      <NavLink to="/dashboard/home" activeClassName={styles.ActiveClass}>
        <HomeLight />
      </NavLink>
      <NavLink to="/dashboard/transactions" activeClassName={styles.ActiveClass}>
        <TransLight />
      </NavLink>
      <NavLink to="/dashboard/cards" activeClassName={styles.ActiveClass}>
        <CardLight />
      </NavLink>
      <NavLink to="/dashboard/notifications" activeClassName={styles.ActiveClass}>
        <NotificationLight />
      </NavLink>
      <NavLink to="/dashboard/profile" activeClassName={styles.ActiveClass}>
        <ProfileLight />
      </NavLink>
    </div>
    <Link to="/">
      <LogoutLight className={styles.Logout} />
    </Link>
  </div>
);

export default Navigation;
