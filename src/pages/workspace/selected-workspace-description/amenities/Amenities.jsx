import React from "react";
import styles from "./Amenities.module.css";
import AmenitiesArrow from "../../../../assets/AmenitiesArrow.svg";
import Wifi from "../../../../assets/amenities/wifi.svg";
import WellnessRoom from "../../../../assets/amenities/wellnessRoomIcon.svg";
import OnsiteStaff from "../../../../assets/amenities/onsiteStaff.svg";
import SingleAmenity from "./single-amenity/SingleAmenity";

const availableAmenities = [
  { amenityImg: WellnessRoom, amenityName: "Wellness Room" },
  { amenityImg: OnsiteStaff, amenityName: "Onsite Staff" },
  { amenityImg: Wifi, amenityName: "Wifi" },
  { amenityImg: OnsiteStaff, amenityName: "Onsite Staff" },
  { amenityImg: Wifi, amenityName: "Wifi" },
];

const Amenities = (props) => (
  <div className={styles.Amenities}>
    <div className={styles.Left}>
      <p className={styles.AmenitiesLabel}>Amenities</p>
      
      <div className={styles.ButtonLayout}>
        <button className={styles.BackButton} onClick={props.moveLeft}>
          <img src={AmenitiesArrow} alt="Left Arrow" />
        </button>
        <button className={styles.ForwardButton}  onClick={props.moveRight}>
          <img src={AmenitiesArrow} alt="Right Arrow" />
        </button>
      </div>
    </div>
    <div className={styles.Right} ref={props.myRef}>
      {availableAmenities.map(({ amenityImg, amenityName }, index) => (
        <SingleAmenity 
            key={index}
            amenityImg={amenityImg} 
            amenityName={amenityName} />
      ))}
    </div>
  </div>
);

export default Amenities;
