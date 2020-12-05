import React from 'react';
import styles from './ApartmentGallery.module.css';
import { useHistory } from 'react-router';
import Favourite from '../../../../assets/apartment/gallery/favourites.svg';
import Bed from '../../../../assets/apartment/gallery/bed.png';
import Guest from '../../../../assets/apartment/gallery/guest.png';
import Area from '../../../../assets/apartment/gallery/distance.png';
import Kitchen from '../../../../assets/apartment/gallery/kitchen.png';
import Rating from '../../../../shared-components/rating/Rating';
import DatePickerSelector from '../../date-input/DateInput';

const MOVE_IN = 'Selected move-in date';
const LOCATION = 'finalApartmentStage';

const ApartmentGallery = () => {
	const history = useHistory();
	return (
		<>
			<section className={styles.Container}>
				<section className={styles.Bottom}>
					<div className={styles.bottomLeft}>
						<div className={styles.bottomLeftTop}>
							<div className={styles.bottomLeftTopLeft}>
								<p className={styles.title}>3 Bedroom Apartment</p>
								<p>Bode thomas junc ~ 9 min. walk</p>
								<p>16B Badeiya Street, Surulere, Lagos</p>
							</div>
							<div className={styles.bottomLeftTopRight}>
								<Rating isDarkStar starCount={4.5} />
								<p className={styles.ratingScore}>4.0</p>
								<img src={Favourite} alt='' />
							</div>
						</div>
						<div className={styles.bottomLeftBottom}>
							<div className={styles.bed}>
								<img src={Bed} alt='' className={styles.svg} />
								<p>2 beds</p>
							</div>
							<div className={styles.guest}>
								<img src={Guest} alt='' className={styles.svg} />
								<p>4 Guest (max)</p>
							</div>
							<div className={styles.size}>
								<img src={Area} alt='' className={styles.svg} />
								<p>42m2</p>
							</div>
							<div className={styles.kitchen}>
								<img src={Kitchen} alt='' className={styles.svg} />
								<p>1 kitchen</p>
							</div>
						</div>
					</div>
					<div className={styles.bottomRight}>
						<p>
							<span className={styles.currency}>N</span>{' '}
							<span className={styles.price}> 70,000</span> per month
						</p>
						<div className={styles.formRowInnerDate}>
							<DatePickerSelector
								placeholderText={MOVE_IN}
								className={styles.picker}
							/>
						</div>
						<button
							type='submit'
							className={styles.formBtn1}
							onClick={() => {
								history.push(LOCATION);
							}}>
							Book a Physical tour
						</button>
						<button
							type='submit'
							className={styles.formBtn2}
							onClick={() => {
								history.push(LOCATION);
							}}>
							Book Now
						</button>
					</div>
				</section>
			</section>
		</>
	);
};

export default ApartmentGallery;
