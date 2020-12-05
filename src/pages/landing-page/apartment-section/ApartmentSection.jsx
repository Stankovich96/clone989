import React from "react";
import styles from "./ApartmentSection.module.css";
import AboutImg from "../../../assets/ApartmentSection.png";
import TransparentButton from "../../../components/ui-components/transparent-button/TransparentButton";
import { Link, useRouteMatch } from "react-router-dom";

const aboutText =
  "We offer accommodation booking service in Nigeria. Comfortable shelter certainly can support daily activities. You can book a cozy apartments, flats, rooms, cottages and guest houses in the private sector with price that suits you.";

const ApartmentSection = (props) => {

  let match = useRouteMatch();

  return (
    <div className={styles.ApartmentSection}>
      <section className={styles.Left}>
        <div className={styles.Navigator}>
          <span
            style={{
              backgroundColor: props.isAptTab1Activated ? "#575957" : "#D2D1D1",
            }}
            onClick={() => props.toggleAptImg(true, false, false, 0)}
          />
          <span
            style={{
              backgroundColor: props.isAptTab2Activated ? "#575957" : "#D2D1D1",
            }}
            onClick={() => props.toggleAptImg(false, true, false, 1)}
          />
          <span
            style={{
              backgroundColor: props.isAptTab3Activated ? "#575957" : "#D2D1D1",
            }}
            onClick={() => props.toggleAptImg(false, false, true, 2)}
          />
        </div>
        <p className={styles.Title}>Apartment Booking</p>
        <p className={styles.Description}>{aboutText}</p>
        <Link to="/apartment">
          <TransparentButton
            text="Explore"
            btnColor="white"
            btnBorder="1px solid white"
            btnWidth="170px"
          />
        </Link>
      </section>
      <section className={styles.Right}>
        <img src={props.activeAptImg} alt="About 989" />
      </section>
    </div>
  );
};

export default ApartmentSection;
