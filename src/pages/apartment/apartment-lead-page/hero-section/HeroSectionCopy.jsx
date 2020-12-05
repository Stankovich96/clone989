import React from 'react';
import styles from './HeroSectionA.module.css';
import ApartmentImage1 from '../../../../assets/apartment/1Apartment.png';
import ApartmentImage2 from '../../../../assets/apartment/2Apartment.png';
import ApartmentImage3 from '../../../../assets/apartment/3Apartment.png';
import ApartmentImage4 from '../../../../assets/apartment/4Apartment.png';
import SearchLayout from '../../../../shared-components/search-layout/SearchLayout';
// import './styles.css';
import { ReactComponent as ArrowRight } from '../../../../assets/backArrow.svg';

const DESC =
	'Find adventures nearby or in faraway places and access unique homes, experiences, and place around the Nigeria.';
const TITLE = 'Luxury holiday apartment for families and friends';

const HeroSectionCopy = (props) => (
	<div className={styles.HeroSection}>
		<section className={styles.Left}>
			<div className={styles.booking}>
				<p className={styles.Title}>{TITLE}</p>
				<p className={styles.Description}>{DESC}</p>
				<SearchLayout
					heading='Find a Apartment'
					placeholder='Search for an apartment'
					path='apartmentType'
					isDisabled={props.isDisabled}
					enableSearchBtn={props.enableSearchBtn}
				/>
			</div>
		</section>
		<section className={styles.Right}>
			<div className={styles.Container} ref={props.imageContainerRef}>
				<div ref={props.singleImageRef} className={styles.ImgHolder}>
					<img src={ApartmentImage1} alt='Workspace Image1' />
				</div>
				<div className={styles.ImgHolder}>
					<img src={ApartmentImage2} alt='Workspace Image2' />
				</div>
				<div className={styles.ImgHolder}>
					<img src={ApartmentImage3} alt='Workspace Image3' />
				</div>
				<div className={styles.ImgHolder}>
					<img src={ApartmentImage4} alt='Workspace Image3' />
				</div>
				<div className={styles.Dummy}></div>
			</div>
			{props.moveLeft ? (
				<button className={styles.MoveLeft} onClick={props.moveLeft}>
					<ArrowRight />
				</button>
			) : (
				''
			)}
			<button className={styles.MoveRight} onClick={props.moveRight}>
				<ArrowRight />
			</button>
		</section>
	</div>
);

export default HeroSectionCopy;
// const HeroSectionCopy = (props) => (
// 	<div className={styles.HeroSection}>
// 		<section className={styles.Left}>
// 			<p className={styles.Title}>{TITLE}</p>
// 			<p className={styles.Description}>{DESC}</p>
// 			<SearchLayout
// 				heading='Find a Apartment'
// 				placeholder='Search for an apartment'
// 				path='apartmentType'
// 				isDisabled={props.isDisabled}
// 				enableSearchBtn={props.enableSearchBtn}
// 			/>
// 		</section>
// 		<section className={styles.Right}>
// 			<Carousel />
// 		</section>
// 	</div>
// );

// export default HeroSectionCopy;
