import React from "react";
import styles from "./TypeOfWorkspace.module.css";
import Select, { components } from "react-select";
import { typeOfWorkspaceOptions } from "../../../../../external-data/search-result-data";

const GroupHeading = (props) => (
  <div className={styles.GroupHeading}>
    <components.GroupHeading {...props} />
  </div>
);

const TypeOfWorkspace = (props) => (
  <div className={styles.TypeOfWorkspace}>
    <Select
      components={{ GroupHeading }}
      className={styles.Select}
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
      isClearable={false}
      options={typeOfWorkspaceOptions}
      placeholder="Type of Workspace"
      styles={{
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
        input: (base) => ({
          ...base,     
          color: "878987",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          display: "none",
        }),
        placeholder: (base) => ({
          ...base,
          color: "#878987",
          marginLeft: "auto",
        }),
        singleValue: (base) => ({
          ...base,
          color: "#878987",
          marginLeft: "auto",
        }),
        control: (base) => ({
          ...base,
          fontSize: "15px",
          padding: "5px 5px",
          borderRadius: "100px",
          cursor: "pointer",
          border: "1px solid #878987",
          backgroundColor: "white",
        }),
        valueContainer: (base) => ({
          ...base,     
          color: "#878987",
          display: "flex",
          justifyContent: "center",
          width: "180px",
        }),
        option: (base) => ({
          ...base,
          marginRight: "auto",
          padding: "15px 10px",
          borderBottom: "0.05px solid #7c7979",
        }),
      }}
    />
  </div>
);

export default TypeOfWorkspace;
