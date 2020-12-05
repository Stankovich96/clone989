import React from "react";
import MeetingRoomImg4 from "../../../../assets/meetingroom/meeting-room-4.png";
import MeetingRoomImg5 from "../../../../assets/meetingroom/meeting-room-5.png";
import MeetingRoomImg6 from "../../../../assets/meetingroom/meeting-room-6.png";
import MeetingRoomImg7 from "../../../../assets/meetingroom/meeting-room-7.png";

import "./MeetingVenues.modules.scss";

const MeetingVenues = () => (
  <div className="container">
    <div className="meeting-venues">
      <div className="meeting-venues__left">
        <div className="venue-header">
          {"Over 1,013 spaces around Nigeria"}
          <span className="venue-header__line"></span>
        </div>
        <div className="venue-body-text">
          Discover a wide range of venues suitable for all your meeting needs
          from private establishments to independent alternative spaces.
        </div>
        <div className="venue-list">
          <div className="venue-list__left">
            <ul>
              <li>Alternative spaces</li>
              <li>Private establishments</li>
              <li>Academic venues</li>
            </ul>
          </div>
          <div className="venue-list__right">
            <ul>
              <li>Conference venues</li>
              <li>Co-working spaces</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="meeting-venues__right gallery">
        <div className="gallery__item gallery__item-1">
          <img
            src={MeetingRoomImg5}
            alt="meeting room gallery"
            className="gallery__img"
          />
        </div>
        <div className="gallery__item gallery__item-2">
          <img
            src={MeetingRoomImg4}
            alt="meeting room gallery"
            className="gallery__img"
          />
        </div>
        <div className="gallery__item gallery__item-3">
          <img
            src={MeetingRoomImg6}
            alt="meeting room gallery"
            className="gallery__img"
          />
        </div>
        <div className="gallery__item gallery__item-4">
          <img
            src={MeetingRoomImg7}
            alt="meeting room gallery"
            className="gallery__img"
          />
        </div>
      </div>
    </div>
  </div>
);

export default MeetingVenues;
