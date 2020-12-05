import React from 'react';
import styles from './Rent.module.css';
import RentImg from '../../../../assets/apartment/rentImg.png';

const DESC =
	'Do you have a flat/room to share or rent? You can make more money today by listing on our platform. No matter what kind of home or room you have to share. You’re in full control of your  prices, house rules, and how you interact with guests.';
const TITLE = 'Rent Your Place make a Living';
const BUTTONTEXT = 'Host an Apartment';

const Rent = () => (
	<div className={styles.RentSection}>
		<section className={styles.Left}>
			<div className={styles.ImageA}>
				<img src={RentImg} alt='' className={styles.ImageA} />
			</div>
		</section>
		<section className={styles.Right}>
			<p className={styles.Title}>{TITLE}</p>
			<p className={styles.Description}>{DESC}</p>
			<button className={styles.RentButton}>{BUTTONTEXT}</button>
		</section>
	</div>
);

export default Rent;
