import React, { Component } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "../../../shared-components/footer/Footer";
import Header from "../../../shared-components/header/Header";
import SearchResultPage from "../search-result-page/SearchResultPage";
import HeroSection from "./hero-section/HeroSection";
import Services from "./services/Services";

import styles from "./WorkspaceLeadpage.module.css";

class WorkspaceLeadPage extends Component {
  state = {
    isDisabled: true,
    imageScrollValue: 0,
  };

  componentDidMount() {
    window.scrollTo(0, 0);

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

  enableSearchBtn = () => {
    this.setState({ isDisabled: false });
  };

  //a ref that needs to the referenced by the herosection image scroll bar layout
  imageLayoutRef = React.createRef();

  //a ref that needs to the referenced by the herosection image
  imageRef = React.createRef();

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

  render() {
    return (
      <div className={styles.WorkspaceLeadPage}>
        <Header
          backgroundColor="white"
          menuFontColor="#1A202C"
          isWhiteBg={true}
        />
        <HeroSection
          isDisabled={this.state.isDisabled}
          enableSearchBtn={this.enableSearchBtn}
          imageLayoutRef={this.imageLayoutRef}
          imageRef={this.imageRef}
          moveRight={this.moveRight}
        />
        <Services />
        <Footer />
      </div>
    );
  }
}

export default WorkspaceLeadPage;
