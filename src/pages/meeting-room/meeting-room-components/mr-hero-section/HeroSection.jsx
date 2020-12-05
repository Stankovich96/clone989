import React from "react";

import HeroSectionForm from "../hero-section-form/HeroSectionForm";
import HeroSectionImg1 from "../../../../assets/room-2174142_1280.jpg";
import HeroSectionImg2 from "../../../../assets/meetingroom/meeting-room-hero.jpg";
import HeroSectionImg3 from "../../../../assets/meetingroom/lekki-venue.jpg";
import { ReactComponent as ArrowRight } from "../../../../assets/backArrow.svg";

const HeroSection = (props) => (
  <div className="hero-section">
   
      <div className="hero-section__booking">
        <div className="booking">
          <h1 className="booking-heading">Book your meeting room today</h1>
          <p className="booking-text">
            No more wasting time hunting for meeting rooms. Book a space to run
            your meetings from the convenience of our platform.
          </p>
          <HeroSectionForm />
        </div>
      </div>

      <div className="hero-section__right">
        <div className="hero-section__images"  ref={props.imgWrapperRef}>
          <div ref={props.singleImageRef} className="imgContainer">
            <img src={HeroSectionImg1} alt="Meeting Room Image1" />
          </div>
          <div className="imgContainer">
            <img src={HeroSectionImg2} alt="Meeting Room Image2" />
          </div>
          <div className="imgContainer">
            <img src={HeroSectionImg3} alt="Meeting Room Image3" />
          </div>
          <div className="Dummy"></div>
        </div>
        {(props.moveLeft ? 
          <button className="MoveLeft" onClick={props.moveLeft} >
            <ArrowRight />
          </button>
          : '' 
          )}
        <button className="MoveRight" onClick={props.moveRight} >
          <ArrowRight />
        </button>
      </div>

  </div>
);

export default HeroSection;
