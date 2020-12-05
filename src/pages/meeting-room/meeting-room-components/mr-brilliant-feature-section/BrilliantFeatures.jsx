import React from "react";

import { ReactComponent as FacilitiesIcon } from "../../../../assets/meetingroom/meeting-facilities.svg";
import { ReactComponent as SupportIcon } from "../../../../assets/meetingroom/support.svg";
import { ReactComponent as SimpleBookIcon } from "../../../../assets/meetingroom/simple-book.svg";
import { ReactComponent as CustomIcon } from "../../../../assets/meetingroom/custom-chair.svg";
import { ReactComponent as CrystalClearIcon } from "../../../../assets/meetingroom/clear.svg";
import { ReactComponent as AnalyticIcon } from "../../../../assets/meetingroom/analytic-icon.svg";

import { FeatureAttribute } from "./BrilliantFeatures.utils";

import "./BrilliantFeatures.modules.scss";

export const BrilliantFeaturesList = [
  {
    icon: <FacilitiesIcon />,
    header: "Meeting Facilities",
    text:
      "We have available whiteboards and markers, AV-screens, projectors and others ar your disposal if needed.",
  },
  {
    icon: <SupportIcon />,
    header: "Exceptional Support",
    text:
      "Our support team are always available for help. Customers first, always.",
  },
  {
    icon: <SimpleBookIcon />,
    header: "Simple Booking",
    text: "Book meeting rooms quality no need to phone up.",
  },
  {
    icon: <CustomIcon />,
    header: "Customisable Space",
    text: "Organise your room’s outlook depending on your meeting’s theme.",
  },
  {
    icon: <CrystalClearIcon />,
    header: "Crystal clear room status",
    text: "See instantly if a room is being used.",
  },
  {
    icon: <AnalyticIcon />,
    header: "Room Analytics",
    text:
      "Insight review of rooms outlooks, space size, location and setup site inspection.",
  },
];

const BrilliantFeatures = () => {
  return (
    <div className="brilliant-features">
      <div className="container">
        <div className="brilliant-features__header">
          <div className="lead-header">
            Brilliant Features <span className="line"></span>
          </div>
          <div className="sub-header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </div>
        </div>
        <div className="brilliant-features__list">
          {BrilliantFeaturesList.map((dataList, index) => (
            <FeatureAttribute key={index} dataList={dataList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrilliantFeatures;
