import React from 'react';
import styles from './Featured.module.css';
import { useHistory } from 'react-router';
import FeaturedImg1 from '../../../../assets/apartment/featuredImg1.png';
import FeaturedImg2 from '../../../../assets/apartment/featuredImg2.png';
import FeaturedImg3 from '../../../../assets/apartment/featuredImg3.png';

const DESC = 'Featured Apartments';
const LIST = 'See the full list';
const BEDROOM1 = '1 Bedroom Apartment';
const CITY = 'Lekki - Lagos';
const PRICE = 'N52,000 per month';
const BEDROOM2 = '3 Bedroom Apartment';
const CITY2 = 'Maitaima - Abuja';
const PRICE2 = 'N90,000 per month';
const BEDROOM3 = 'Cottage';
const CITY3 = 'Ikeja - Lagos';
const PRICE3 = 'N75,000 per month';
const LOCATION = 'apartment/:id';
const DESCRIPTION = 'apartmentDescriptionPage';

const Featured = () => {
	const history = useHistory();
	return (
		<div className={styles.all}>
			<div className={styles.FeaturedSection}>
				<section className={styles.Top}>
					<div className={styles.TopLeft}>
						<p className={styles.FeaturedDesc}>{DESC}</p>
					</div>
					<div
						className={styles.TopRight}
						onClick={() => {
							history.push(LOCATION);
						}}>
						<p className={styles.FeaturedList}>{LIST}</p>
						<svg height='40' width='70'>
							<line x1='0' y1='0' x2='90' y2='0' className={styles.Line} />
						</svg>
					</div>
				</section>
				<section className={styles.Bottom}>
					<div
						className={styles.imageA}
						onClick={() => {
							history.push(DESCRIPTION);
						}}>
						<img src={FeaturedImg1} alt='' />
						<div className={styles.textBottom}>
							<p className={styles.imageText}>{BEDROOM1}</p>
							<p className={styles.imageTextCity}>{CITY}</p>
							<p className={styles.imagePrice}>{PRICE}</p>
						</div>
					</div>
					<div
						className={styles.imageA}
						onClick={() => {
							history.push(DESCRIPTION);
						}}>
						<img src={FeaturedImg2} alt='' />
						<div className={styles.textBottom}>
							<p className={styles.imageText}>{BEDROOM2}</p>
							<p className={styles.imageTextCity}>{CITY2}</p>
							<p className={styles.imagePrice}>{PRICE2}</p>
						</div>
					</div>
					<div
						className={styles.imageA}
						onClick={() => {
							history.push(DESCRIPTION);
						}}>
						<img src={FeaturedImg3} alt='' />
						<div className={styles.textBottom}>
							<p className={styles.imageText}>{BEDROOM3}</p>
							<p className={styles.imageTextCity}>{CITY3}</p>
							<p className={styles.imagePrice}>{PRICE3}</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default Featured;
