import React from "react";
import styles from "./SingleCard.module.css";

const SingleCard = (props) => (
  <div className={styles.SingleCard}>
    {props.userCards.map(
      (
        {
          img,
          last4Digits,
          expDate,
          type,
          cardNoColor,
          expTextColor,
          expDateColor,
        },
        index
      ) => (
        <div className={styles.NumAndCard} style={props.cardStyle}>
          <p style={{display: props.noNumber && 'none'}} className={styles.Numbering}>{index + 1}.</p>
          <div className={styles.CardContent} key={index}>
            {img}
            <div className={styles.ImgTexts}>
              <div className={styles.SingleCard}>
                <p
                  style={{ color: cardNoColor }}
                  className={styles.Last4Digits}
                >
                  <span>**** </span>
                  {last4Digits}
                </p>
                <p style={{ color: expDateColor }} className={styles.ExpDate}>
                  <span style={{ color: expTextColor }}>Expires</span>
                  {expDate}
                </p>
              </div>

              <p style={{ color: expTextColor }} className={styles.Type}>
                {type}
              </p>
            </div>
          </div>
        </div>
      )
    )}
  </div>
);

export default SingleCard;
