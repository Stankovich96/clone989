import React from "react";
import styles from "./StrAmenities.module.css";
import WifiIcon from "../../../../../../assets/dashboard/dbWifiIcon.svg";
import WellnessRoomIcon from "../../../../../../assets/dashboard/dbWellnessRoomIcon.svg";
import OnsiteStaffIcon from "../../../../../../assets/dashboard/dbOnsiteStaffIcon.svg";

const spaceAmenities = [
  { name: "High-Speed W-Fi", icon: WifiIcon },
  { name: "Wellness Room", icon: WellnessRoomIcon },
  { name: "Onsite Staff", icon: OnsiteStaffIcon },
];

const StrAmenities = (props) => (
  <div className={styles.Parent}>
    {spaceAmenities.map(({ name, icon }, i) => (
      <div key={i} className={styles.StrAmenities}>
        <img src={icon} alt='' />
        <p>{name}</p>
      </div>
    ))}
  </div>
);

export default StrAmenities;
