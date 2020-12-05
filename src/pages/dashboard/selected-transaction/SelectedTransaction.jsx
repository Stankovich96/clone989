import React from "react";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import Navigation from "../navigation/Navigation";
import styles from "./SelectedTransaction.module.css";
import StLeft from "./st-left/StLeft";
import StRight from "./st-right/StRight";
import MainImg from "../../../assets/meetingroom/Abuja-2.jpg";
import SubImg1 from "../../../assets/meetingroom/Abuja-3.jpg";
import SubImg2 from "../../../assets/meetingroom/Abuja-4.jpg";
import SubImg3 from "../../../assets/meetingroom/Abuja-5.jpg";
import SubImg4 from "../../../assets/meetingroom/Abuja-6.jpg";
import SubImg5 from "../../../assets/meetingroom/abuja-10.jpg";

class SelectedTransaction extends React.Component {
  imgCollection = [MainImg, SubImg1, SubImg2, SubImg3, SubImg4, SubImg5];

  state = {
    type: [true, false, false, false],
    currentTab: "All",
  };

  componentDidMount(){
    window.scroll(0, 0);
  }

  activateType = (typeValue, val) => {
    const tempType = this.state.type.map((c, index) =>
      index === typeValue ? true : false
    );
    this.setState({ type: tempType, currentTab: val });
  };

  render() {
    return (
      <div className={styles.Parent}>
        <Navigation />
        <div className={styles.SelectedTransaction}>
          <BackButton MarginTp="-37px" history={this.props.history} to="/dashboard/home"/>
          <div className={styles.MainContent}>
            <StLeft imgCollection={this.imgCollection} />
            <StRight activateType={this.activateType} type={this.state.type} />
          </div>
          <div className={styles.FaintBackground}></div>
        </div>
      </div>
    );
  }
}

export default SelectedTransaction;
