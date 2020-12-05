import React from "react";
import SingleService from "./coworking-spaces/SingleService";
import styles from "./Services.module.css";

import CoworkspaceImage1 from "../../../../assets/meetingroom/Abuja-2.jpg";
import CoworkspaceImage2 from "../../../../assets/meetingroom/Abuja-5.jpg";
import CoworkspaceImage3 from "../../../../assets/meetingroom/Abuja-4.jpg";


const services = [
  {
    type: "Private Offices",
    desc: ` It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal`,
    img: CoworkspaceImage1,
  },
  {
    type: "Co-working Spaces",
    desc: ` It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal`,
    img: CoworkspaceImage2,
  },
  {
    type: "On-Demand Access",
    desc: ` It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of
    using Lorem Ipsum is that it has a more-or-less normal`,
    img: CoworkspaceImage3,
  },
];
const Services = (props) => (
  <div className={styles.Services}>
    <p className={styles.Heading}>The services we offer</p>
    <p className={styles.Description}>
      From <b>private offices</b>, to <b>co-working spaces</b>, to{" "}
      <b>on-demand accesss</b>, we got all you need to make your work experience
      the best it can evern be. Check out our services below.
    </p>
    {services.map(({ type, desc, img }, index) => (
      <SingleService key={index} type={type} desc={desc} img={img} backgroundColor={index==1?"#faf9f8":"white"}/>
    ))}
  </div>
);

export default Services;
