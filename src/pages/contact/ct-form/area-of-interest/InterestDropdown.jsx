import React from "react";
import Select, { components } from "react-select";
import { abujaOptions } from "../../../../external-data/location-data";

const DropdownIndicator = (props) =>
  components.DropdownIndicator && <components.DropdownIndicator {...props} />;

const InterestDropdown = (props) => (
  <Select
    components={{ DropdownIndicator }}
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
    options={abujaOptions}
    isSearchable={false}
    placeholder="What are you interested in?"
    styles={{
      indicatorSeparator: (base) => ({
        ...base,
        display: "none",
      }),
      dropdownIndicator: (base) => ({
        ...base,
      }),
      valueContainer: (base) => ({
        ...base,
        display: "flex",
        fontSize: "14px",
      }),
      placeholder: (base) => ({
        ...base,
        color: "#c4c4c4",
      }),
      groupHeading: (base) => ({
        ...base,
        color: "#0F1310",
        fontWeight: "bold",
        fontSize: "14px",
      }),
      control: (base) => ({
        ...base,
        cursor: "pointer",
        width: "100%",
        padding: "10px",
        boxShadow: "none",
        border: "1px solid #c4c4c4",
        borderRadius: "0",
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: "1px solid #c4c4c4",
        },
      }),
      option: (base) => ({
        ...base,
        padding: "15px 20px",
        border: "0.05px solid #E7E9ED",
      }),
      menu: (base) => ({ ...base, width: "100%", textAlign: "left" }),
    }}
  />
);

export default InterestDropdown;
