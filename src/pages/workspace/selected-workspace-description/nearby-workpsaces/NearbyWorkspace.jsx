import React from "react";
import styles from "./NearbyWorkspace.module.css";
import SingleNearbyWorkspace from "./single-nearby-workspace/SingleNearbyWorkspace";
import WorkspaceImage1 from "../../../../assets/CardImage1.png";
import WorkspaceImage2 from "../../../../assets/CardImage2.png";
import WorkspaceImage3 from "../../../../assets/CardImage3.png";
import { Link } from "react-router-dom";

const cardData = [
  {
    officeImg: WorkspaceImage1,
    officeName: "Flexible Private Offices",
    location: "Lagos",
    distance: 75000,
    to: '/workspace/searchResultPage'
  },
  {
    officeImg: WorkspaceImage2,
    officeName: "On-demand Workspaces",
    location: "Abuja",
    distance: 9000,
    to: '/workspace/searchResultPage'
  },
  {
    officeImg: WorkspaceImage3,
    officeName: "Hot Desk",
    location: "Lagos",
    distance: 9000,
    to: '/workspace/searchResultPage'
  },
];

const NearbyWorkspace = (props) => {
  return (
    <div
      style={{ flexDirection: props.flexDirection }}
      className={styles.CardLayout}
    >
      {cardData.map(({ officeImg, officeName, location, distance, to }, index) => (
        <Link key={index} to={to}>
          <SingleNearbyWorkspace
            officeImg={officeImg}
            title={officeName}
            location={location}
            distance={distance}
          />
        </Link>
      ))}
      <div className={styles.ExtraPadding}>null</div>
    </div>
  );
};

export default NearbyWorkspace;
