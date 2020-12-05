import React from "react";
import styles from "./BCRight.module.css";
import {ReactComponent as DeleteIcon} from '../../../../../assets/dashboard/dbDeleteIcon.svg'
import { ReactComponent as VisaCardDark } from "../../../../../assets/dashboard/visaCardDark.svg";
import SingleCard from "../single-card/SingleCard";

const custUserCard = [
  {
    img: <VisaCardDark />,
    last4Digits: 2235,
    expDate: "09/2022",
    type: "VISA",
  },
];

const BCRight = (props) => (
  <div className={styles.BCRight}>
    <p className={styles.ManageCard}>Manage Card</p>
    <SingleCard
      userCards={custUserCard}
      noNumber
      cardStyle={{
        marginTop: "58px",
        transform: "scale(1.51)",
        marginLeft: "auto",
        marginRight: 'auto',
        maxWidth: '300px',
      }}
    />
    <div className={styles.SectionLayout}>
      <p className={styles.Text}>Card Status</p>
      <p className={styles.Value}>Active</p>
    </div>
    <div className={styles.Divider}></div>
    <div className={styles.SectionLayout}>
      <p className={styles.Text}>Issuer Bank</p>
      <p className={styles.Value}>Access Bank</p>
    </div>
    <div className={styles.Divider}></div>
    <div className={styles.SectionLayout}>
      <p className={styles.Text}>Added On</p>
      <p className={styles.Value}>Sep 19, 2020</p>
    </div>
    <div className={styles.Divider}></div>
    <div className={styles.SectionLayout}>
      <p className={styles.Text}>Expires In</p>
      <p className={styles.Value}>600 Days</p>
    </div>
    <div className={styles.Divider}></div>
    <div className={styles.DeleteLayout}>
        <DeleteIcon />
      <p className={styles.Value}>DELETE</p>
    </div>
  </div>
);

export default BCRight;
