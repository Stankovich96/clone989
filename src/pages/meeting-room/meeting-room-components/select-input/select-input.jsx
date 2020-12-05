import React from "react";
import { ImLocation } from "react-icons/im";
import { FaRegCalendarAlt, FaCaretDown, FaUsers } from "react-icons/fa";

import Select, {
  //eslint-disable-next-line
  components,
} from "react-select";

const UsersIcon = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      {<FaUsers style={{ position: "absolute", left: 20 }} />}
      {children}
    </components.ValueContainer>
  );
};

const DateIcon = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      {<FaRegCalendarAlt style={{ position: "absolute", left: 20 }} />}
      {children}
    </components.ValueContainer>
  );
};

const LocationIcon = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      {<ImLocation style={{ position: "absolute", left: 20 }} />}
      {children}
    </components.ValueContainer>
  );
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <FaCaretDown />
  </components.DropdownIndicator>
);

const IndicatorSeparator = ({ innerProps }) => {
  return <span {...innerProps} />;
};

const defaultStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: `${state.selectProps.width ? state.selectProps.width : provided.width }`,
    zIndex: 99,
    textAlign: "left"
  }),
  control: (base) => ({
    ...base,
    minHeight: "auto",
    height: 45,
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: 20,
  }),
  option: (base) =>({
    ...base,
    borderBottom: '1px solid #E7E9ED',
    paddingTop: '13px',
    paddingBottom: '13px',
    paddingLeft: '25px'
  })
}

const styles = {
  menu: (provided, state) => ({
    ...provided,
    width: `${state.selectProps.width ? state.selectProps.width : provided.width }`,
    zIndex: 99,
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: 45,
  }),
  control: (base) => ({
    ...base,
    minHeight: "auto",
    height: 50,
  }),
  option: (base) =>({
    ...base,
    borderBottom: '1px solid #E7E9ED',
    paddingTop: '13px',
    paddingBottom: '13px',
    paddingLeft: '25px'
  }),
};

export const SelectLocationInput = (props) => {
  return (
    <Select
      {...props}
      components={{
        IndicatorSeparator,
        DropdownIndicator,
        ValueContainer: LocationIcon,
      }}
      styles={styles}
    />
  );
};

export const SelectDateInput = (props) => {
  return (
    <Select
      {...props}
      components={{
        IndicatorSeparator,
        DropdownIndicator,
        ValueContainer: DateIcon,
      }}
      styles={styles}
    />
  );
};

export const SelectAttendeesInput = (props) => {
  return (
    <Select
      {...props}
      components={{
        IndicatorSeparator,
        DropdownIndicator,
        ValueContainer: UsersIcon,
      }}
      styles={styles}
    />
  );
};

export const SelectDefaultInput = (props) => {
  return (
    <Select
      {...props}
      components={{
        IndicatorSeparator,
        DropdownIndicator: () => null
      }}
      styles={defaultStyles}
    />
  );
}

// Remember to put theme to Select after converting it to HOC
// Make attendees selectInput field not writeable

// theme={(theme) => ({
//     ...theme,
//     borderRadius: 0,
//     colors: {
//       ...theme.colors,
//       primary25: "hotpink",
//     },
//   })}