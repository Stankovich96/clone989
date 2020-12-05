import React from "react";
import styles from "./WSCTeammateAmt.module.css";
import Select, { components } from "react-select";
import { groupedOptions } from "../../../../external-data/location-data";
import { ReactComponent as PlusIcon } from "../../../../assets/zoomIn.svg";
import { ReactComponent as MinusIcon } from "../../../../assets/zoomOut.svg";

const WSCTeammateAmt = (props) => {
  const Option = (optProps) => (
    <div className={styles.Option}>
      <p className={styles.TeammateLabel}>Teammates</p>
      <div className={styles.TeammateModifier}>
        <div
          className={styles.Plus}
          onClick={() => props.modifyTeammate(false)}
        >
          <MinusIcon />
        </div>

        <p className={styles.Number}>
          {props.teammateNum == 0 ? props.teammateNum + 1 : props.teammateNum}
        </p>
        <div
          className={styles.Minus}
          onClick={() => props.modifyTeammate(true)}
        >
          <PlusIcon />
        </div>
      </div>
    </div>
  );

  const GroupHeading = (props) => (
    <div className={styles.GroupHeading}>
      <components.GroupHeading {...props} />
    </div>
  );

  const opt = [{ value: "", label: "" }];

  return (
    <Select
      components={{ GroupHeading, Option }}
      className={styles.Select}
      options={opt}
      value={
        props.teammateNum > 0 && {
          value: props.teammateNum,
          label: props.teammateNum,
        }
      }
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "rgba(249, 249, 249, 0.4)",
          primary: "#504B4B",
          neutral0: "white",
          neutral20: "white",
        },
      })}
      isSearchable={false}
      placeholder="Teammates"
      styles={{
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          display: "none",
        }),
        valueContainer: (base) => ({
          ...base,
          display: "flex",
          justifyContent: "center",
        }),
        groupHeading: (base) => ({
          ...base,
          color: "#0F1310",
          fontWeight: "bold",
          fontSize: "15px",
        }),
        control: (base) => ({
          ...base,
          cursor: "pointer",
          width: "120px",
          boxShadow: "none",
          border: "none",
          "&:hover": {
            // Overwrittes the different states of border
            borderColor: "white",
          },
        }),
        option: (base) => ({
          ...base,
          padding: "15px 10px",
          border: "0.05px solid #E7E9ED",
        }),
        menu: (base) => ({ ...base, width: "320px" }),
      }}
    />
  );
};

export default WSCTeammateAmt;
