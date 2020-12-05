import React from "react";

import "./HowItWorks.modules.scss";

const HowItWorks = () => (
  <div className="how-it-works">
    <div className="container">
      <div className="section-header">
        <div className="lead-header">
          How it works <span className="line"></span>
        </div>
        <div className="sub-header">
          Booking and managing meeting rooms shouldn't be a hassle – it should
          just work. We made room booking easy for everyone, book anywhere,
          anytime – simple as that.
        </div>
      </div>
      <div className="section-process">
        <div className="booking-process">
          <div className="process-info">
            <div className="number">01</div>
            <div className="title">Discover</div>
            <div className="text">Search 17,000 unique spaces.</div>
          </div>
          <div className="process-info">
            <div className="number">02</div>
            <div className="title">Select ideal space</div>
            <div className="text">Check prices, images & reviews.</div>
          </div>
          <div className="process-info">
            <div className="number">03</div>
            <div className="title">Customise & book</div>
            <div className="text">
              Select equipments that you may need and book instantly.
            </div>
          </div>
          <div className="process-info">
            <div className="number">04</div>
            <div className="title">Confirmation</div>
            <div className="text">
              As soon as your booking is accepted, the place is yours! We’ll
              automatically charge.
            </div>
          </div>
        </div>
        <div className="booking-pointer">
          <div className="arc"></div>
          <div className="arc"></div>
          <div className="arc"></div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;
