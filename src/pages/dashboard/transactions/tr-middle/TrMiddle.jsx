import React from "react";
import CustomTab from "../../../../shared-components/custom-tab/CustomTab";
import TrmAll from "./trm-all/TrmAll";
import TrmApartment from "./trm-apartments/TrmApartment";
import TrmCard from "./trm-card/TrmCard";
import TrmMeetingRoom from "./trm-meetingRooms/TrmMeetingRoom";
import TrmWorkspaces from "./trm-workspaces/TrmWorkspaces";
import styles from "./TrMiddle.module.css";

const filter = (transactions, bookType) => {
  return transactions.filter(({ type }) => type == bookType);
};

const TrMiddle = (props) => (
  <div className={styles.TrMiddle}>
    <CustomTab
      menuStyle={{ gap: "30px", margin: "0 60px" }}
      menuItemStyle={{ fontSize: "14.5px" }}
      dotStyle={{ bottom: "-70%" }}
      tabNames={["All", "Workspaces", "Apartments", "Meeting Rooms"]}
      currentTab="All"
      tabComponents={[
        <TrmAll
          transForMonth={props.months[props.monthIndex].transactions}
          click={props.click}
        />,
        <TrmWorkspaces
          transForMonth={filter(props.months[props.monthIndex].transactions, "Workspace")}
          click={props.click}
        />,
        <TrmApartment
          transForMonth={filter(props.months[props.monthIndex].transactions, "Apartment")}
          click={props.click}
        />,
        <TrmMeetingRoom
          transForMonth={filter(props.months[props.monthIndex].transactions, "Meeting Room")}
          click={props.click}
        />,
      ]}
    />
  </div>
);

export default TrMiddle;
