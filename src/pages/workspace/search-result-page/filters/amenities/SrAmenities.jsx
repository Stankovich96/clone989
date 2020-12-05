import React, { Fragment } from "react";
import styles from "./SrAmenities.module.css";
import Select, { components } from "react-select";
import { AmenitiesWorkspaceOptions } from "../../../../../external-data/search-result-data";

class SrAmenities extends React.Component {
  state = {
    value: "",
    selectedOptions: [],
    closeMenuOnSelect: false,
    open: false,
  };

  CustGroupHeading = (props) => (
    <div className={styles.GroupHeading}>
      <components.GroupHeading {...props} />
    </div>
  );

  CustomOption = ({ innerProps, isDisabled, data, isSelected }) =>
    !isDisabled ? (
      <div {...innerProps} className={styles.Options}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {}}
          id={data.value}
          name={data.value}
          value={data.value}
        />
        <img src={data.img} alt="" />
        <label>{data.label}</label>
      </div>
    ) : null;

  CustomControlContainer = (props) =>
    !props.isDisabled ? (
      <div onClick={this.openMenuHandler}>
        <components.Control {...props} />
      </div>
    ) : null;

  CustomMenu = (props) =>
    !props.isDisabled ? (
      <div className={styles.Menu}>
        <components.Menu {...props}>
          {props.children}
          <div className={styles.Bottom}>
            <p onClick={this.clear}>Clear</p>
            <button onClick={this.closeMenuHandler}>OK</button>
          </div>
        </components.Menu>
      </div>
    ) : null;

  custStyles = {
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    input: (base) => ({
      ...base,
      color: "#878987",
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
      border: "1px solid #878987",
      backgroundColor: "white",
      borderRadius: "100px",
      cursor: "pointer",
    }),
    valueContainer: (base) => ({
      ...base,
      color: "white",
      display: "flex",
      justifyContent: "center",
      width: "110px",
    }),
    menu: (base) => ({ ...base, width: "270px" }),
  };

  custTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "rgba(249, 249, 249, 0.4)",
      primary: "#504B4B",
      neutral0: "white",
      neutral20: "white",
    },
  });

  handleChange = (e) => {
    this.setState({ selectedOptions: e, open: true });
  };

  openMenuHandler = () => {
    this.setState({ open: true });
  };

  closeMenuHandler = () => {
    this.setState({ open: false });
  };

  clear = () => {
    this.setState({ selectedOptions: null });
  };

  render() {
    const { selectedOptions, open } = this.state;

    return (
      <div className={styles.SrAmenities}>
        <Select
          value={selectedOptions}
          onChange={this.handleChange}
          components={{
            Menu: this.CustomMenu,
            GroupHeading: this.CustGroupHeading,
            Option: this.CustomOption,
            Control: this.CustomControlContainer,
          }}
          theme={this.custTheme}
          placeholder="Amenities"
          isSearchable={false}
          options={AmenitiesWorkspaceOptions}
          styles={this.custStyles}
          isMulti
          onMenuOpen={this.openMenuHandler}
          onMenuClose={this.closeMenuHandler}
          menuIsOpen={open}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
        />
      </div>
    );
  }
}

export default SrAmenities;
