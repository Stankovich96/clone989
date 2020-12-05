import React from "react";
import styles from "./CustomTab.module.css";
import TabLayout from "./tab-layout/TabLayout";

class CustomTab extends React.Component {
  state = {
    //I use the tab names to create a new array with the default value being the first element
    //sample [true, false, false,false]
    type: this.props.tabNames.map(((_, index) => (index === 0 ? true : false))),
    currentTab: this.props.currentTab,
  };

  activateType = (typeValue, val) => {
    const tempType = this.state.type.map((c, index) =>
      index === typeValue ? true : false
    );
    this.setState({ type: tempType, currentTab: val });
  };

  render() {
    return (
      <div className={styles.CustomTab}>
        <TabLayout
          activateType={this.activateType}
          type={this.state.type}
          currentTab={this.state.currentTab}
          tabNames={this.props.tabNames}
          tabComponents={this.props.tabComponents}
          maxHeight={this.props.maxHeight}
          menuStyle={this.props.menuStyle}
          menuItemStyle={this.props.menuItemStyle}
          dotStyle={this.props.dotStyle}
        />
      </div>
    );
  }
}
export default CustomTab;
