import React from "react";
import styles from "./WorkspaceSection.module.css";
import CardLayout from "../../../shared-components/card-layout/CardLayout";
import TransparentButton from "../../../components/ui-components/transparent-button/TransparentButton";
import { Link } from "react-router-dom";

const workspaceDescription =
  "Our vibrant business ecosystem offers flexible offices plans, seamless connectivity and security. We are a contemporary workspace. A playground for minds, a powerhouse for brands.";

const WorkspaceSection = (props) => {
  return (
    <div className={styles.WorkspaceSection}>
      <div className={styles.Left}>
        <p className={styles.WorkspaceTitle}>Working Space</p>
        <p className={styles.WorkspaceDesc}>{workspaceDescription}</p>
        <Link to="/workspace">
          <TransparentButton text="View More" />
        </Link>
      </div>
      <div className={styles.Right}>
        <CardLayout 
          flexDirection="row" 
          bookingType="workspace"
          url="workspace/searchResultPage"
          />
      </div>
    </div>
  );
};

export default WorkspaceSection;
