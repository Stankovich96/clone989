import React from "react";
import styles from "./SingleReview.module.css";
import Quote from "../../../../../assets/quote.svg";

const SingleReview = (props) => {
  return (
    <div
      className={styles.SingleReview}
      style={{
        padding: props.custStyle && props.custStyle.padding,
        border: props.custStyle && props.custStyle.divider,
        marginBottom: props.custStyle && props.custStyle.reviewGap
      }}
    >
      <div className={styles.Left}>
        <img
          className={styles.OpenQuote}
          src={Quote}
          alt="opening quote"
          style={{ width: props.custStyle && props.custStyle.quoteSize }}
        />
        <p
          className={styles.Review}
          style={{
            fontSize: props.custStyle && props.custStyle.fontSize,
            lineHeight: props.custStyle && props.custStyle.lineHeight,
            width: props.custStyle && props.custStyle.textWidth,
          }}
        >
          {props.customerReview}
        </p>
        <img
          className={styles.CloseQuote}
          src={Quote}
          alt="closing quote"
          style={{ width: props.custStyle && props.custStyle.quoteSize }}
        />
      </div>
      <div className={styles.Right}>
        <img src={props.customerImg} alt="customer" />
      </div>
    </div>
  );
};
export default SingleReview;
