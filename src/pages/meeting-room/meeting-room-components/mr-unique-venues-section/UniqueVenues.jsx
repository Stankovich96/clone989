import React from "react";
import MaitamaVenueImg from "../../../../assets/meetingroom/maitama-venue.jpg";
import LekkiVenueImg from "../../../../assets/meetingroom/lekki-venue.jpg";
import PortharcourtVenueImg from "../../../../assets/meetingroom/portharcourt-venue.jpg";
import GwarimpaVenueImg from "../../../../assets/meetingroom/gwarimpa-venue.jpg";
import VIVenueImg from "../../../../assets/meetingroom/VI-venue.jpg";

import { VenueCard } from "./UniqueVenues.util";

import "./UniqueVenues.modules.scss";

const VenueCardList = [
  {
    venueImg: MaitamaVenueImg,
    venueLocation: "Maitama",
    venuePurpose: "Conference & events",
    venuePurposeDescription:
      "perfect for holding small events and conferences.",
    venueCost: "N 100,500 PER DAY",
  },
  {
    venueImg: LekkiVenueImg,
    venueLocation: "Lekki",
    venuePurpose: "Board room",
    venuePurposeDescription:
      "With space for 8-12 people. Outfitted with premium furniture.",
    venueCost: "N 10,500 PER HOUR",
  },
  {
    venueImg: PortharcourtVenueImg,
    venueLocation: "Portharcourt",
    venuePurpose: "Training room",
    venuePurposeDescription:
      "set the space up to run training events for your company.",
    venueCost: "N 82,000 PER DAY",
  },
  {
    venueImg: GwarimpaVenueImg,
    venueLocation: "Gwarimpa",
    venuePurpose: "Conference & events",
    venuePurposeDescription:
      "perfect for holding small events and conferences.",
    venueCost: "N 119,500 PER DAY",
  },
  {
    venueImg: VIVenueImg,
    venueLocation: "Victoria Island",
    venuePurpose: "Conference & events",
    venuePurposeDescription:
      "perfect for holding relatively large events and conferences.",
    venueCost: "N 229,500 PER DAY",
  },
];

const UniqueVenues = () => (
  <div className="container">
    <div className="unique-venues">
      <div className="unique-venues__description">
        <div className="header">
          Unique Venues <span className="line"></span>
        </div>
        <div className="sub-header">Our Popular Hosting Meeting Rooms</div>
        <div className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>
      {VenueCardList.map((data, index) => (
        <VenueCard key={index} venueList={data} />
      ))}
    </div>
  </div>
);

export default UniqueVenues;
