import React from "react";
import styles from "./WSCLocation.module.css";
import Select, { components } from "react-select";
import { groupedOptions } from "../../../../external-data/location-data";

const DropdownIndicator = (props) =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props} />
	);

const GroupHeading = (props) => (
	<div className={styles.GroupHeading}>
		<components.GroupHeading {...props} />
	</div>
);

const WSCLocation = (props) => (
  <Select
    components={{ DropdownIndicator, GroupHeading }}
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
    options={groupedOptions}
    isSearchable={false}
    placeholder="Location"
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
        width: '120px',   
        boxShadow: "none",
        border: "none",
        "&:hover": {
            // Overwrittes the different states of border
            borderColor: "white"
          }
      }),
      option: (base) => ({
        ...base,
        padding: "15px 20px",
        border: "0.05px solid #E7E9ED",
      }),
      menu: (base) => ({ ...base, width: "200px", textAlign: 'left' }),
    }}
  />
);

export default WSCLocation;
