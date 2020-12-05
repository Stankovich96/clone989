import React from "react";
import styles from "./WorkspaceCardLayout.module.css";
import CallIcon from "../../../assets/callIcon.svg";
import tvIcon from "../../../assets/tvIcon.svg";
import wifiIcon from "../../../assets/wifiIcon.svg";
import PersonIcon from "../../../assets/PersonIcon.svg";
import Rating from "../../../shared-components/rating/Rating";
import Auxiliary from "../../../hoc/Auxiliary";
import { Link } from "react-router-dom";



const WorksapceCardLayout = (props) => {

  const MAXCOUNT = 35;
  let wordCount = props.count;
  let isEnd = false;

  return (
    <Link to="/workspace/selectedWorkspaceDescription">
      <div className={styles.WorkspaceCardLayout}>
        <div className={styles.Left}>
          <img src={props.layoutImg} alt="workspace img" />
        </div>
        <div className={styles.Right}>
          <div className={styles.Section1}>
            <div className={styles.WorkspaceName}>
              <p>{props.name}</p>
              <span>{props.location}</span>
            </div>
            <div className={styles.Rating}>
              <p>989 Rating</p>
              <Rating starCount={props.rating} isDarkStar />
            </div>
          </div>
          <div className={styles.Amenities}>
            {props.amenities.map((amenity, index) => {
              wordCount += amenity.length;
              let amenityLayout = null;
              if (wordCount < MAXCOUNT) {
                amenityLayout = (
                  <p
                    className={styles.Amenity}
                    key={index}
                  >
                    {amenity}
                  </p>
                );
              } else {
              amenityLayout = isEnd ? null :  <p key={index}  className={styles.PlusBtn}>{props.amenities.length-index}+</p>
                isEnd = true
              }
              return amenityLayout
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorksapceCardLayout;
