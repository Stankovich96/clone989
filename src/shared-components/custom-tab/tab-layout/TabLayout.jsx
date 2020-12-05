import React from "react";
import { ImPacman } from "react-icons/im";
import styles from "./TabLayout.module.css";
import PropTypes from "prop-types";

const createType = (props, typeNum, typeText) => (
  <div
    className={styles.MenuItem}
    style={props.menuItemStyle}
    onClick={() => props.activateType(typeNum, typeText)}
  >
    <p
      style={{
        color: props.type[typeNum] && "#4A3A2F",
        fontWeight: props.type[typeNum] ? "600" : "normal",
      }}
      className={styles.TypeName}
    >
      {typeText}
    </p>
    <div
      style={{ ...props.dotStyle, opacity: props.type[typeNum] ? 1 : 0 }}
      className={styles.Dot}
    ></div>
  </div>
);

const renderSwitch = (currentTab, tabNames, tabComponents) => {
  const tabIndex = tabNames.findIndex(
    (tabContent) => currentTab === tabContent
  );
  return tabComponents[tabIndex];
};

const TabLayout = (props) => (
  <div className={styles.TabLayout}>
    <div className={styles.Cl_Menu} style={props.menuStyle}>
      {props.tabNames.map((tabName, index) =>
        createType(props, index, `${tabName}`)
      )}
    </div>
    <div
      className={styles.TabContent}
      style={{ maxHeight: props.maxHeight && props.maxHeight }}
    >
      {renderSwitch(props.currentTab, props.tabNames, props.tabComponents)}
    </div>
  </div>
);

TabLayout.propTypes = {
  type: PropTypes.array,
  activateType: PropTypes.func,
};

export default TabLayout;
