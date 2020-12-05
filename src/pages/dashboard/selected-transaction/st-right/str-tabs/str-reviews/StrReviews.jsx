import React from "react";
import SingleReview from "../../../../../workspace/selected-workspace-description/customers-reviews/single-review/SingleReview";
import styles from "./StrReviews.module.css";

import ProfileImg from "../../../../../../assets/profileImg.png";

const reviews = [
  {
    cstReview:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ",
    img: ProfileImg,
  },
  {
    cstReview:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ",
    img: ProfileImg,
  },
  {
    cstReview:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ",
    img: ProfileImg,
  },
];

const custStyle = {
  margin: "0",
  quoteSize: "14px",
  fontSize: "14px",
  lineHeight: "30px",
  padding: "0",
  textWidth: "342px",
  divider: "none",
  reviewGap: "30px",
};

const StrReviews = (props) => (
  <div className={styles.StrReviews}>
    {reviews.map(({ cstReview, img }, index) => (
      <SingleReview
        key={index}
        customerReview={cstReview}
        customerImg={img}
        custStyle={custStyle}
      />
    ))}
  </div>
);

export default StrReviews;
