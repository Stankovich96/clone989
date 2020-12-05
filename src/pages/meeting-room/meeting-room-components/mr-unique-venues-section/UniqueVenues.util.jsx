import React from "react";

export const VenueCard = (props) => {
  const {
    venueImg,
    venueLocation,
    venuePurpose,
    venuePurposeDescription,
    venueCost,
  } = props.venueList;

  return (
    <div className="venue">
      <span className="venue__img-container">
        <img src={venueImg} alt="meeting venue" />
      </span>
      <div className="venue__details">
        <div className="venue__name">{venueLocation}</div>
        <div className="venue__type">
          <span>{venuePurpose}</span> - {venuePurposeDescription}
        </div>
        <div className="venue__cost">{venueCost}</div>
      </div>
    </div>
  );
};
