import React from "react";
import { ReactComponent as UsersIcon } from "../../../../assets/meetingroom/mr-users.svg";
import { ReactComponent as CommIcon } from "../../../../assets/meetingroom/mr-communication.svg";
import { ReactComponent as ReadyBoardIcon } from "../../../../assets/meetingroom/mr-ready-board.svg";
import { ReactComponent as CustomBookingIcon } from "../../../../assets/meetingroom/mr-custom-booking.svg";

export const Feature1 = () => (
  <div className="feature">
    <div className="feature-icon">
      <UsersIcon />
    </div>
    <div className="feature-content">
      <h4 className="feature-content__header">Room capacity</h4>
      <p className="feature-content__text">
        Shows how many people the room is suited for.
      </p>
    </div>
  </div>
);

export const Feature2 = () => (
  <div className="feature">
    <div className="feature-icon">
      <CustomBookingIcon />
    </div>
    <div className="feature-content">
      <h4 className="feature-content__header">Custom booking</h4>
      <p className="feature-content__text">
        Allows you to make personalizied bookings.
      </p>
    </div>
  </div>
);

export const Feature3 = () => (
  <div className="feature">
    <div className="feature-icon">
      <CommIcon />
    </div>
    <div className="feature-content">
      <h4 className="feature-content__header header-3">Spantaneous booking</h4>
      <p className="feature-content__text">
        With just few clicks, the available room is yours.
      </p>
    </div>
  </div>
);

export const Feature4 = () => (
  <div className="feature">
    <div className="feature-icon">
      <ReadyBoardIcon />
    </div>
    <div className="feature-content">
      <h4 className="feature-content__header">Ready to use</h4>
      <p className="feature-content__text">
        The room will already be setup for you on arrival.
      </p>
    </div>
  </div>
);
