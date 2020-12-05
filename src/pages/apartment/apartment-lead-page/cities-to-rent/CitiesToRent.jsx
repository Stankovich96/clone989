import React from 'react';
import styles from './CitiesToRent.module.css';
import galleryA from '../../../../assets/apartment/galleryA.png';
import galleryB from '../../../../assets/apartment/galleryB.png';
import galleryC from '../../../../assets/apartment/galleryC.png';
import galleryD from '../../../../assets/apartment/galleryD.png';
import galleryE from '../../../../assets/apartment/galleryE.png';
import galleryF from '../../../../assets/apartment/galleryF.png';

const TITLE = 'Our top cities to rent apartment in Nigeria';
const DESC =
	'We offer cozy and beautiful accommodation in best places around a city in Nigeria, we try as much to locate our apartments in the heart of the city. Stay close to transport links, major attractions and business areas.';
const LOCATIONA = 'Victoria Island, Lagos';
const LOCATIONB = 'Maitama, Abuja';
const LOCATIONC = 'Ikeja, Lagos';
const LOCATIOND = 'Lekki,Lagos';
const LOCATIONE = 'Obudu, Cross River';
const LOCATIONF = 'Lagos Island, Lagos';

const CitiesToRent = () => (
	<div className={styles.CitiesToRentSection}>
		<p className={styles.Heading}>{TITLE}</p>
		<p className={styles.Description}>{DESC}</p>
		<section className={styles.gallery}>
			<div className={styles.imageA}>
				<img src={galleryA} alt='' />
				<p className={styles.imageText}>{LOCATIONA}</p>
			</div>
			<div className={styles.imageA}>
				<img src={galleryB} alt='' />
				<p className={styles.imageText}>{LOCATIONB}</p>
			</div>
			<div className={styles.imageA}>
				<img src={galleryC} alt='' />
				<p className={styles.imageText}>{LOCATIONC}</p>
			</div>
		</section>
		<section className={styles.gallery}>
			<div className={styles.imageA}>
				<img src={galleryD} alt='' />
				<p className={styles.imageText}>{LOCATIOND}</p>
			</div>
			<div className={styles.imageA}>
				<img src={galleryE} alt='' />
				<p className={styles.imageText}>{LOCATIONE}</p>
			</div>
			<div className={styles.imageA}>
				<img src={galleryF} alt='' />
				<p className={styles.imageText}>{LOCATIONF}</p>
			</div>
		</section>
	</div>
);

export default CitiesToRent;
