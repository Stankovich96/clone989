import React, { Component } from "react";
import styles from "./LandingPage.module.css";
import WorkspaceImg from "../../assets/WorkspaceImg.png";
import Header from "../../shared-components/header/Header";
import Footer from "../../shared-components/footer/Footer";
import HeroSection from "./hero-section/HeroSection";
import About989 from "./about-989/About989";
import WorkspaceSection from "./workspace-section/WorkspaceSection";
import MeetingRoomSection from "./meetingroom-section/MeetingRoomSection";
import ApartmentSection from "./apartment-section/ApartmentSection";
import Testimonies from "./testimonies/Testimonies";
import MobileApp from "./mobile-app/MobileApp";
import AboutImg1 from "../../assets/About989.png";
import AboutImg2 from "../../assets/ApartmentSection.png";
import AboutImg3 from "../../assets/CardImage2.png";

class LandingPage extends Component {
  state = {
    isWorkspaceActivated: true,
    isMeetingRoomActivated: false,
    isApartmentActivated: false,
    bookingType: "Workspaces",
    bookingTypeUrl: "workspace",
    activeImg: AboutImg1,
    isAboutTab1Activated: true,
    isAboutTab2Activated: false,
    isAboutTab3Activated: false,
    activeAptImg: AboutImg1,
    isAptTab1Activated: true,
    isAptTab2Activated: false,
    isAptTab3Activated: false,
    customerDataShown: [false, false, false],
    imageScrollValue: 0
  };

  componentDidMount() {
    this.setState({imageScrollValue: this.imageRef.current.scrollLeft});
    document.onkeydown = this.checkKey;
  }

  checkKey = (e) => {
    e = e || window.event;
    if (e.keyCode == "37") {
      // left arrow
      console.log("left");
      this.moveRight(false);
    } else if (e.keyCode == "39") {
      // right arrow
      console.log("right");
      this.moveRight(true);
    }
  };

  modifyScrollLeft = (operation) => {
    let widthPlusGap = this.imageRef.current.clientWidth + 25;

    const scrollLeftValue =
      operation === "plus"
        ? (this.imageLayoutRef.current.scrollLeft = Math.ceil(
            this.imageLayoutRef.current.scrollLeft + widthPlusGap
          ))
        : (this.imageLayoutRef.current.scrollLeft = Math.ceil(
            this.imageLayoutRef.current.scrollLeft - widthPlusGap
          ));

    return scrollLeftValue;
  };

   //a ref that needs to the referenced by the herosection image scroll bar layout
   imageLayoutRef = React.createRef();

  //a ref that needs to the referenced by the herosection image
  imageRef = React.createRef();

   //moves the herosection image scroll bar to the right or left
   moveRight = (isForwardArrow) => {
    
    let scrollValue = this.imageLayoutRef.current.scrollLeft;
    console.log(this.state.imageScrollValue, Math.ceil(scrollValue));
    //25 is the gap between the images
    //clientWidth fetches the width of an image

    //we rounded up the scrollValue because at times it returns decimal and for our comaprison to work perfectly, we need
    //to evaluate objects of thesame type
    if (this.state.imageScrollValue == Math.ceil(scrollValue)) {
      isForwardArrow
        ? this.setState({
            imageScrollValue: this.modifyScrollLeft("plus"),
          })
        : this.setState({
            //if we are at the beginning of the scroll Layout, do not subtract the scrollLeft value, instead do nothing by setting it to 0
            imageScrollValue: scrollValue == 0 ? 0 : this.modifyScrollLeft("minus"),
          });
    } else {
      isForwardArrow
        ? this.setState({
            imageScrollValue: (this.imageLayoutRef.current.scrollLeft = 0),
          })
        : this.setState({
            //if we are at the beginning of the scroll Layout, do not subtract the scrollLeft value, instead do nothing by setting it to 0
            imageScrollValue: scrollValue == 0 ? 0 :this.modifyScrollLeft("minus"),
          });
    }

  };


  toggleTab = (val1, val2, val3, bookingType, bookingTypeUrl) => {
    this.setState({
      isWorkspaceActivated: val1,
      isMeetingRoomActivated: val2,
      isApartmentActivated: val3,
      bookingType: bookingType,
      bookingTypeUrl: bookingTypeUrl
    });
  };

  toggleImg = (val1, val2, val3, imgNum) => {
    const images = [AboutImg1, AboutImg2, AboutImg3];

    this.setState({
      activeImg: images[imgNum],
      isAboutTab1Activated: val1,
      isAboutTab2Activated: val2,
      isAboutTab3Activated: val3,
    });
  };

  toggleAptImg = (val1, val2, val3, imgNum) => {
    const images = [AboutImg1, AboutImg2, AboutImg3];

    this.setState({
      activeAptImg: images[imgNum],
      isAptTab1Activated: val1,
      isAptTab2Activated: val2,
      isAptTab3Activated: val3,
    });
  };

  showCustomerData = (index, val) => {
    const arrCopy = [...this.state.customerDataShown];
    arrCopy[index] = val;
    this.setState({ customerDataShown: arrCopy });
  };

  render() {
    return (
      <div className={styles.LandingPage}>
        <Header />
        <HeroSection
          isWorkspaceActivated={this.state.isWorkspaceActivated}
          isMeetingRoomActivated={this.state.isMeetingRoomActivated}
          isApartmentActivated={this.state.isApartmentActivated}
          bookingType={this.state.bookingType}
          bookingTypeUrl={this.state.bookingTypeUrl}
          toggleTab={this.toggleTab}
          imageRef={this.imageRef}
          imageLayoutRef={this.imageLayoutRef}
          moveRight={this.moveRight}
        />
        <About989
          activeImg={this.state.activeImg}
          toggleImg={this.toggleImg}
          isAboutTab1Activated={this.state.isAboutTab1Activated}
          isAboutTab2Activated={this.state.isAboutTab2Activated}
          isAboutTab3Activated={this.state.isAboutTab3Activated}
        />
        <WorkspaceSection />
        <MeetingRoomSection />
        <ApartmentSection
          activeAptImg={this.state.activeAptImg}
          toggleAptImg={this.toggleAptImg}
          isAptTab1Activated={this.state.isAptTab1Activated}
          isAptTab2Activated={this.state.isAptTab2Activated}
          isAptTab3Activated={this.state.isAptTab3Activated}
        />
        <Testimonies
          customerDataShown={this.state.customerDataShown}
          showCustomerData={this.showCustomerData}
        />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
