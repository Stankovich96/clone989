import React from "react";
import styles from "./SingleService.module.css";
import ViewButton from "../../../../../components/ui-components/view-button/ViewButton";

const SingleService = (props) => (
  <div className={styles.CoworkingSpaces} style={{backgroundColor: props.backgroundColor}}>
    <div className={styles.ImageAndText}>
      <div className={styles.WorkspaceSummary}>
        <p className={styles.SummaryTitle}>{props.type}</p>
        <p className={styles.SummaryDesc}>{props.desc}</p>
        <ViewButton url="/workspace/searchResultPage" />
      </div>
      <div className={styles.ImageLayout}>
        <img
          className={styles.CoworkSpaceFirstImg}
          src={props.img}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default SingleService;
