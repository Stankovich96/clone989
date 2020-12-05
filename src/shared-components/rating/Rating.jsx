import React from "react";
import styles from "./Rating.module.css";

import RatingStarFull from "../../assets/RatingStarFull.svg";
import RatingStarHalf from "../../assets/RatingStarHalf.svg";
import RatingStarDark from "../../assets/RatingStarDark.svg";
import RatingStarHalfDark from "../../assets/RatingStarHalfDark.svg";

const maxRating = 5;
let tempProps = null;

const displayFullStar = (starCount) => {
  // if the rating is more than 5, we return the maxRating which is 5. Else we return the passed value/rating
  const stars = [];
  const safeStarCount = starCount > maxRating ? maxRating : starCount;
  for (let i = 0; i < safeStarCount; i++) {
    stars.push(<img src={tempProps.isDarkStar ? RatingStarDark : RatingStarFull} alt="Rating star" />);
  }
  return stars;
};

const displayHalfStar = (starCount) => {
  let stars = [];
  const fullStarCount = parseInt(starCount.toString().charAt(0));
  stars = displayFullStar(fullStarCount);
  if (fullStarCount < maxRating) {
    stars.push(<img src={tempProps.isDarkStar ? RatingStarHalfDark : RatingStarHalf} alt="Rating star" />);
  }
  return stars;
};

const Rating = (props) => {
  tempProps = props;
  const stars = Number.isInteger(props.starCount)
    ? displayFullStar(props.starCount)
    : displayHalfStar(props.starCount);
  return <div className={styles.Rating}>{stars}</div>;
};

export default Rating;
