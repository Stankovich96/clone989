import React from 'react';
import styles from './ApartmentAbout.module.css';
import ApartmentInfo from '../apartment-description-info/ApartmentInfo';

const DESCRIPTION =
	'Lorem ipsum non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu libero volutpat amet, elementum. Enim interdum potenti platea purus imperdiet hac. Tristique at egestas porttitor in leo. Pharetra id ornare netus venenatis arcu auctor.Nulla viverra urna facilisis amet, vitae sapien. Velit feugiat tortor nisl eu faucibus dolor mauris. Malesuada tincidunt rutrum turpis vitae sed euismod urna etiam mi. Vitae, rutrum quis enim integer.';
const ABOUT = 'About';
const ApartmentAbout = () => {
	return (
		<>
			<section className={styles.about}>
				<div className={styles.aboutTop}>
					<p className={styles.title}>{ABOUT}</p>
					<p className={styles.desc}>{DESCRIPTION}</p>
				</div>
				<ApartmentInfo />
			</section>
		</>
	);
};

export default ApartmentAbout;
