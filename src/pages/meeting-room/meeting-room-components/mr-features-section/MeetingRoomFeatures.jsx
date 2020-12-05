import React from "react";
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
} from "./MeetingRoomFeature.util";

import "./MeetingRoomFeature.modules.scss";

const MrFeature = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="features">
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Feature4 />
        </div>
      </div>
    </div>
  );
};

export default MrFeature;
