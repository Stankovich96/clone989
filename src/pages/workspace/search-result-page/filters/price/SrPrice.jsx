import React from "react";
import styles from "./SrPrice.module.css";
import Select, { components } from "react-select";
import { priceWorkspaceOptions } from "../../../../../external-data/search-result-data";
import RatingStar from "../../../../../assets/RatingStarDark.svg";

class SrPrice extends React.Component {

  state = {
    selectedOptions: [],
    open: false,
    period: [false, false, true],
  };

  
  duration = [
    { id: "day", label: "Per Day" },
    { id: "week", label: "Per Week" },
    { id: "month", label: "Per Month" },
  ];

  GroupHeading = (props) => (
    <div className={styles.GroupHeading}>
      <components.GroupHeading {...props} />
    </div>
  );

  setDuration = (i) => {
    const period = this.state.period;
    //if the radio button is already selected, do nothing
    if (!period[i]) {
      //disable all the radio buttons
      const tempPeriod = period.map((i) => false);
      //enable only the one the user clicks
      tempPeriod[i] = !period[i];
      //set the state
      this.setState({ period: tempPeriod });
    }
  };

  handleChange = (event) => {};

  CustomMenu = (props) => (
    <div>
      <components.Menu {...props}>
        <div className={styles.RadioContainer}>
          {this.duration.map(({ id, label }, index) => (
            <div key={index} onClick={() => this.setDuration(index)}>
              <input
                id={id}
                type="radio"
                name="period"
                value={id}
                onChange={this.handleChange}
                checked={this.state.period[index]}
              />
              <label>{label}</label>
            </div>
          ))}
        </div>
        {props.children}
        <div className={styles.Bottom}>
          <p onClick={this.clear}>Clear</p>
          <button onClick={this.closeMenuHandler}>OK</button>
        </div>
      </components.Menu>
    </div>
  );

  CustomOption = ({ innerProps, isDisabled, data, isSelected }) =>
    !isDisabled ? (
      <div {...innerProps} className={styles.Options}>
        <input
          type="radio"
          name="price-range"
          checked={isSelected}
          onChange={this.handleChange}
        />
        <label>{data.label}</label>
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
      width: "80px",
    }),
    menu: (base) => ({
      ...base,
      width: "300px"
    }),
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

  openMenuHandler = () => {
    this.setState({ open: true });
  };

  closeMenuHandler = () => {
    this.setState({ open: false });
  };

  clear = () => {
    this.setState({ selectedOptions: null });
  };

  handleChange = (e) => {
    console.log(e, "james");
    this.setState({ selectedOptions: e, open: true });
  };

  render() {
    return (
      <div className={styles.SrPrice}>
        <Select
          components={{
            GroupHeading: this.GroupHeading,
            Option: this.CustomOption,
            Menu: this.CustomMenu,
          }}
          value={this.state.selectedOptions}
          onChange={this.handleChange}
          className={styles.Select}
          theme={this.custTheme}
          placeholder="Price"
          isSearchable={false}
          options={priceWorkspaceOptions}
          styles={this.custStyles}
          onMenuOpen={this.openMenuHandler}
          onMenuClose={this.closeMenuHandler}
          menuIsOpen={this.state.open}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
        />
      </div>
    );
  }
}
export default SrPrice;
