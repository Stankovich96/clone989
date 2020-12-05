import React from "react";
import styles from "./DurationTopSection.module.css";
import AddSubtractButton from "../../../../components/ui-components/add-subtract-button/AddSubtractButton";
import WorkspaceImg from "../../../../assets/workspace/workspaceImg1.png";
import DateIcon from "../../../../assets/DateIcon.svg";
import WSCDate from "../../../../components/ui-components/workspace-search-container/wsc-date/WSCDate";

const CustomInput = ({ value, onClick }) => (
  <input
    className={styles.CustomInput}
    onClick={onClick}
    value={value}
    readonly="readonly"
    placeholder="Modify Date"
  />
);

const DurationTopSection = (props) => (
  <div className={styles.Top}>
    <div className={styles.WorkspaceInfo}>
      <img src={WorkspaceImg} alt="Workspace picture" />
      <div className={styles.NameAndLocation}>
        <p className={styles.Name}>Tower House</p>
        <p className={styles.Location}>Ikeja, Lagos</p>
      </div>
    </div>
    <div className={styles.MoveInDateLayout}>
      <p className={styles.MoveInDateLabel}>Move-in Date</p>
      <div className={styles.MoveInDateSelector}>
        <WSCDate customInput={<CustomInput />} />
        <img src={DateIcon} alt="" />
      </div>
    </div>
    <div className={styles.TeammateAmtLayout}>
      <p className={styles.TeammateAmtLabel}>Number of Teammates</p>
      <div className={styles.TeammateChooser}>
        <input value={props.teammateValue} />
        <AddSubtractButton isSubtract click={() => props.click(true)} />
        <AddSubtractButton click={() => props.click(false)} />
      </div>
    </div>
  </div>
);

export default DurationTopSection;
