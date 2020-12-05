import React from "react";
import AddSubtractButton from "../add-subtract-button/AddSubtractButton";
import styles from "./WorkspaceSearchContainer.module.css";
import WSCDate from "./wsc-date/WSCDate";
import WSCLocation from "./wsc-location/WSCLocation";
import WSCTeammateAmt from "./wsc-teammate-amt/WSCTeammateAmt";
import { ReactComponent as SearchIcon } from "../../../assets/searchIcon.svg";
import { Link } from "react-router-dom";

const WorkspaceSearchContainer = (props) => (
  <div className={styles.SearchContainer}>
    <div>
      <WSCLocation />
      <div className={styles.Divider}></div>
      <WSCTeammateAmt
        teammateNum={props.teammateNum}
        modifyTeammate={props.modifyTeammate}
      />
      <div className={styles.Divider}></div>
      <WSCDate />
      <Link to="/workspace/searchResultPage">
        <button>
          <SearchIcon />
        </button>
      </Link>
    </div>
  </div>
);

export default WorkspaceSearchContainer;
