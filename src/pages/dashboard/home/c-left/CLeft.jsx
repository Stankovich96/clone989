import React from "react";
import { ImPacman } from "react-icons/im";
import styles from "./CLeft.module.css";
import PropTypes from "prop-types";
import CleftAll from "./c-left-all/CleftAll";
import CleftApartment from "./c-left-apartments/CleftApartment";
import CleftWorkspaces from "./c-left-workspaces/CleftWorkspaces";
import CleftMeetingRoom from "./c-left-meetingrooms/CleftMeetingroom";

const createType = (props, typeNum, typeText) => (
  <div
    className={styles.MenuItem}
    onClick={() => props.activateType(typeNum, typeText)}
  >
    <p
      style={{
        color: props.type[typeNum] && "#4A3A2F",
        fontWeight: props.type[typeNum] ? "600" : "normal",
      }}
      className={styles.TypeName}
    >
      {typeText}
    </p>
    <div
      style={{ opacity: props.type[typeNum] ? 1 : 0 }}
      className={styles.Dot}
    ></div>
  </div>
);

const renderSwitch = (currentTab) => {
  switch (currentTab) {
    case "All":
      return <CleftAll />;
      break;
    case "Workspaces":
      return <CleftWorkspaces />;
      break;
    case "Apartments":
      return <CleftApartment />;
      break;
    case "Meeting Rooms":
      return <CleftMeetingRoom />;
      break;
    default:
      return null;
  }
};
const CLeft = (props) => (
  <div className={styles.CLeft}>
    <p className={styles.Reservation}>Reservations</p>
    <div className={styles.Cl_Menu}>
      {createType(props, 0, "All")}
      {createType(props, 1, "Workspaces")}
      {createType(props, 2, "Meeting Rooms")}
      {createType(props, 3, "Apartments")}
    </div>
    {renderSwitch(props.currentTab)}
  </div>
);

CLeft.propTypes = {
  type: PropTypes.array,
  activateType: PropTypes.func,
};

export default CLeft;
