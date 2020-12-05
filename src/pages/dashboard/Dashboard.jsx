import React from "react";
import CLeft from "./home/c-left/CLeft";
import styles from "./Dashboard.module.css";
import Navigation from "./navigation/Navigation";
import ProfileImg from "../../assets/dashboard/dbProfileImg.png";
import CRTop from "./home/c-right/c-right-top/CRTop";
import ReservationSelection from "./reservation-selection/ReservationSelection";
import CRight from "./home/c-right/CRight";

class Dashboard extends React.Component {
  state = {
    type: [true, false, false, false],
    currentTab: 'All',
    name: "Janet Joseph",
    location: "Lagos, Nigeria",
    booktypeAmt: {
      workspaceAmt: 0,
      meetingRoomAmt: 0,
      apartmentAmt: 0,
    },
    membershipID: "HWER34QT",
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  activateType = (typeValue, val) => {
    const tempType = this.state.type.map((c, index) =>
      index === typeValue ? true : false
    );
    this.setState({ type: tempType, currentTab: val});
  };

  render() {
    const cLeft = (
      <CLeft activateType={this.activateType} type={this.state.type} />
    );
    const crTop = (
      <CRTop
        pImage={ProfileImg}
        name={this.state.name}
        location={this.state.location}
        booktypeAmt={this.state.booktypeAmt}
        membershipID={this.state.membershipID}
      />
    );

    return (
      <div className={styles.Dashboard}>
        <Navigation />
        <CLeft activateType={this.activateType} type={this.state.type} currentTab={this.state.currentTab}/>
        <CRight crTop={crTop} />
      </div>
    );
  }
}
export default Dashboard;
