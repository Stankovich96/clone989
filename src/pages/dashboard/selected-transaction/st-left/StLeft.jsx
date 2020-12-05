import React from "react";
import styles from "./StLeft.module.css";
import { ReactComponent as PlusIcon } from '../../../../assets/dashboard/dbPlus.svg';

const StLeft = (props) => (
  <div className={styles.StLeft}>
    <img className={styles.MainImage} src={props.imgCollection[0]} alt="Main Image" />
    <div className={styles.ImageLayout}>
        <img src={props.imgCollection[1]} alt='Sub Image 1' />
        <img src={props.imgCollection[2]} alt='Sub Image 2' />
        <img src={props.imgCollection[3]} alt='Sub Image 3' />
        <img src={props.imgCollection[4]} alt='Sub Image 4' />
        <img src={props.imgCollection[5]} alt='Sub Image 5' />
    </div>
    <div className={styles.ExtraImgLayout}>
      <div className={styles.PlusContainer}><PlusIcon /></div>
      <p className={styles.MoreImages}>See more photos</p>
      <button>View in 3D</button>
    </div>
  </div>
);

export default StLeft;
