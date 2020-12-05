import React from 'react';
import styles from './SingleCardApartment.module.css';
import poniter from '../../../assets/apartment/locationpointer.svg';

const SingleCard = (props) => (
	<div className={styles.SingleCard}>
		<img src={props.officeImg} alt={props.title} className={styles.cardImage} />
		<p className={styles.Title}>{props.title}</p>
		<img src={poniter} alt='location pointer ' className={styles.Pointer} />
		<p className={styles.Location}>{props.location}</p>
		<p className={styles.Pricing}>
			N{props.pricing}/ {props.duration}
		</p>
	</div>
);

export default SingleCard;
