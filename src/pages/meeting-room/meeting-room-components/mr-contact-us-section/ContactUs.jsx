import React from "react";

import "./ContactUs.modules.scss";

const ContactUs = () => (
  <div className="contact-us">
    <div className="container">
      <div className="contact-us__left">
        <h1 className="contact-us__question">Want to ask a question?</h1>
        <p className="contact-us__text">
          Let’s talk! Reach out to us with this line +234 80123 456 78
        </p>
      </div>
      <div className="contact-us__right">
        <button className="contact-button">Contact us</button>
      </div>
    </div>
  </div>
);

export default ContactUs;
