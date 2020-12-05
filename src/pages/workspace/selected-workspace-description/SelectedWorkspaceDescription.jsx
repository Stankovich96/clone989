import React, { Component } from "react";
import WorkspaceSearchContainer from "../../../components/ui-components/workspace-search-container/WorkspaceSearchContainer";
import Header from "../../../shared-components/header/Header";
import styles from "./SelectedWorkspaceDescription.module.css";
import WorkspaceImage1 from "../../../assets/meetingroom/Abuja-2.jpg";
import WorkspaceImage2 from "../../../assets/meetingroom/Abuja-3.jpg";
import WorkspaceImage3 from "../../../assets/meetingroom/Abuja-4.jpg";
import WorkspaceImage4 from "../../../assets/workspace/workspaceImg4.png";
import classes from "./SelectedWorkspaceDescription.module.css";
import Amenities from "./amenities/Amenities";
import Footer from "../../../shared-components/footer/Footer";
import CustomersReviews from "./customers-reviews/CustomersReviews";
import NearbyWorkspace from "./nearby-workpsaces/NearbyWorkspace";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../../../assets/backArrow.svg";

class SelectedWorkspaceDescription extends Component {
  state = {
    teammateNum: 0,
    imageScrollValue: 0,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //a ref that needs to the referenced by the amenities scroll bar layout
  amenityRef = React.createRef();

  imageLayoutRef = React.createRef();

  //Modifies the amount of teammate on the top section of the page
  modifyTeammate = (isAdd) => {
    this.setState({
      teammateNum: isAdd
        ? this.state.teammateNum + 1
        : this.state.teammateNum > 1
        ? this.state.teammateNum - 1
        : 1,
    });
  };

  //moves the amenity scroll bar to the left
  moveLeft = () => {
    this.amenityRef.current.scrollLeft -= 300;
  };

  //moves the amenity scroll bar to the right
  moveRight = () => {
    this.amenityRef.current.scrollLeft += 300;
  };

  //moves the imageLayout scroll bar to the right
  moveImageLayoutRight = () => {
    this.imageLayoutRef.current.scrollLeft += this.imageLayoutRef.current.clientWidth;
  };

  //moves the imageLayout scroll bar to the left
  moveImageLayoutLeft = () => {
    this.imageLayoutRef.current.scrollLeft -= this.imageLayoutRef.current.clientWidth;
  };

  render() {
    return (
      <div className={styles.WorkspaceDescription}>
        <Header isWhiteBg backgroundColor="white" menuFontColor="#1A202C" />
        <WorkspaceSearchContainer
          modifyTeammate={this.modifyTeammate}
          teammateNum={this.state.teammateNum}
        />
        <div className={styles.Body}>
          <div className={styles.GridImage}>
            <div ref={this.imageLayoutRef}>
              <button
                className={styles.MoveLeft}
                onClick={this.moveImageLayoutLeft}
              >
                <ArrowRight />
              </button>
              <img src={WorkspaceImage1} alt="" />
              <img src={WorkspaceImage2} alt="" />
              <img src={WorkspaceImage3} alt="" />
              <button
                className={styles.MoveRight}
                onClick={this.moveImageLayoutRight}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.Section2}>
            <div className={styles.Description}>
              <p className={classes.Title}>Description</p>
              <p className={classes.Desc}>
                The separate studio units consist of a room, a large bathroom
                and a kitchenette. It has it s separate entrances,is very
                bright, modern and clean. The rooms are fully serviced with air
                conditioning, generator, electricity, water bore hole, gardener,
                gate man, parking space and{" "}
              </p>
            </div>
            <div className={styles.BookingModal}>
              <div className={styles.TopSection}>
                <div className={styles.NameAndLocation}>
                  <span className={styles.WorkspaceName}>Tower Building</span>
                  <span className={styles.Location}>Ikeja, Lagos</span>
                </div>
                <div className={styles.Pricing}>
                  <span className={styles.PricingValue}>N10, 000</span>
                  <span className={styles.Slash}> / </span>
                  <span className={styles.Period}>Month</span>
                </div>
              </div>
              <div className={styles.Divider}></div>
              <div className={styles.MidSection}>
                <div className={styles.MoveInDate}>
                  <span className={styles.MoveInDateTag}>Move-in Date</span>
                  <span className={styles.MoveInDateValue}>
                    3, September 2020
                  </span>
                </div>
                <div className={styles.AmtOfTeammates}>
                  <span>3 Teammates</span>
                </div>
              </div>
              <div className={styles.Divider}></div>
              <div className={styles.BottomSection}>
                <Link to="/workspace/booking">
                  <button className={styles.Book}>Reserve space</button>
                </Link>
                <Link to="/workspace/virtualTour">
                  <button className={styles.BookVirtual}>
                    Book a virtual tour
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Amenities
            moveLeft={this.moveLeft}
            moveRight={this.moveRight}
            myRef={this.amenityRef}
          />
          <CustomersReviews />
          <div></div>
          <div></div>
          <div></div>
          <div className={styles.NearbyWorkspaces}>
            <p>Nearby Workspaces</p>
            <NearbyWorkspace />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SelectedWorkspaceDescription;
