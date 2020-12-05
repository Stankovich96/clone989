import React from 'react';
import styles from './Overview.module.css';
import { useHistory } from 'react-router';
import Bedroom1 from '../../../../assets/apartment/1bedroom.png';
import Bedroom2 from '../../../../assets/apartment/3bedroom.png';
import Bedroom3 from '../../../../assets/apartment/cottage.png';

const NUMBER = '23';
const DESC = 'Apartments near you';
const LIST = 'See the full list';
const BEDROOM1 = '1 Bedroom Apartment';
const CITY = 'Lekki - Lagos';
const PRICE = 'N25,500 per night';
const BEDROOM2 = '3 Bedroom Apartment';
const CITY2 = 'Maitaima - Abuja';
const PRICE2 = 'N40,000 per night';
const BEDROOM3 = 'Cottage';
const CITY3 = 'Ikeja - Lagos';
const PRICE3 = 'N77,500 per night';

const LOCATION = 'apartment/:id';
const DESCRIPTION = 'apartmentDescriptionPage';

const Overview = () => {
	const history = useHistory();
	return (
		<div className={styles.all}>
			<div className={styles.OverviewSection}>
				<section className={styles.Top}>
					<div className={styles.TopLeft}>
						<p className={styles.OverviewNumber}>{NUMBER}+</p>
						<p className={styles.OverviewDesc}>{DESC}</p>
					</div>
					<div
						className={styles.TopRight}
						onClick={() => {
							history.push(LOCATION);
						}}>
						<p className={styles.OverviewList}>{LIST}</p>
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
						<img src={Bedroom1} alt='' />
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
						<img src={Bedroom2} alt='' />
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
						<img src={Bedroom3} alt='' />
						<div className={styles.textBottom}>
							<p className={styles.imageText}>{BEDROOM3}</p>
							<p className={styles.imageTextCity}>{CITY3}</p>
							<p className={styles.imagePrice}>{PRICE3}</p>
						</div>
					</div>
				</section>
			</div>
			<hr className={styles.bottomLine} />
		</div>
	);
};

export default Overview;
