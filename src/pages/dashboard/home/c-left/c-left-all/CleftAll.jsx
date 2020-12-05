import React from "react";
import RecentBookings from "../recent-bookings/RecentBookings";
import DashboardCard from "../../../../../components/ui-components/dashboard-card/DashboardCard";
import styles from "./CleftAll.module.css";

const CleftAll = (props) => (
  <>
    <div className={styles.Cl_Cards}>
      <DashboardCard type="Workspaces" count={0} />
      <DashboardCard type="Meeting Rooms" count={0} />
      <DashboardCard type="Apartments" count={0} />
    </div>
    
    <RecentBookings click={props.click} />
  </>
);

export default CleftAll;
