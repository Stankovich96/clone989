import React from "react";
import styles from "./CustomersReviews.module.css";
import ProfileImg from "../../../../assets/profileImg.png";
import SingleReview from "./single-review/SingleReview";

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

const CustomersReviews = (props) => (
  <div className={styles.CustomersReviews}>
    <div className={styles.Left}>
      <p className={styles.Title}>What our customers say about this workspace</p>
      <p className={styles.Description}>
        Hear what our customers say about this workspace established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout.
      </p>
    </div>
    <div className={styles.Right}>
        {reviews.map(({cstReview, img}, index) => (
            <SingleReview 
                key={index}
                customerReview={cstReview}
                customerImg={img}
            />
        ))}
    </div>
  </div>
);

export default CustomersReviews;
