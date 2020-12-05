import React from "react";

import WeProvideImage from "../../../../assets/meetingroom/iocenters.jpg";
import "./MeetingRoomTypes.modules.scss";

const MeetingTypesSection = () => (
  <div className="row">
    <div className="container">
      <div className="meeting-types">
        <div className="content">
          <div className="content-header">
            We provide <span className="content-header-line"></span>
          </div>
          <div className="content-subheader">
            Conference room, Private meeting room, Board room, Training room,
            Interview room & Seminar room
          </div>
          <div className="content-message">
            Communication in large offices is a challenge, and booking some
            space to run a meeting or have a private call shouldn't be
            difficult.
          </div>
          <div className="content-location-ask">
            1. WHERE DO YOU WANT YOUR MEETING ROOM?
          </div>
          <div className="content-cities">
            <div className="content-cities__loc">Ikeja</div>
            <div className="content-cities__loc">Maitama</div>
            <div className="content-cities__loc">Lekki</div>
            <div className="content-cities__loc">Victoria island</div>
            <div className="content-cities__loc">FCT</div>
            <div className="content-cities__loc">Fectac</div>
          </div>
        </div>
        <div className="meeting-types__img">
          <img src={WeProvideImage} alt="meeting board room" />
        </div>
      </div>
    </div>
  </div>
);

export default MeetingTypesSection;
