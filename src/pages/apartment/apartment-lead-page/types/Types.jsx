import React from 'react';
import styles from './Types.module.css';
import LongLet from '../../../../assets/apartment/longLet.png';
import ShortLet from '../../../../assets/apartment/shortLet.png';
import Explore from '../../../../assets/apartment/Explor.png';
import Arrow from '../../../../assets/apartment/Arrow.png';
import { Link } from 'react-router-dom';

const LONGLETTITLE = 'Co-Living';
const SHORTLETTITLE = 'Shortlet Apartments';
const LONGLETDESC =
	'Long let properties are rented typically for more than 1 month. Our database consists of large number properties ready to be rented in major cities in Nigeria.';
const SHORTLETDESC =
	'Short Let properties are rented for periods not more than 1 months. Our catalogue includes thousands of properties available for short let accommodation in Nigeria.';
const BUTTONTEXT = 'MOVE IN FOR MONTHS';
const BUTTONTEXT2 = 'STAY A FEW NIGHTS';

const Types = () => {
	return (
		// <div className={styles.all}>
		<section className={styles.TypesSection}>
			<section className={styles.Left}>
				<p className={styles.Title}>{LONGLETTITLE}</p>
				<p className={styles.Desc}>{LONGLETDESC}</p>
				<img src={LongLet} alt='' />
				<Link to='/apartmentLongLet'>
					<button className={styles.TypesButtonLeft}>
						{BUTTONTEXT} <img src={Arrow} alt='' className={styles.Arrow} />
					</button>
				</Link>
			</section>
			<section className={styles.Right}>
				<p className={styles.Title}>{SHORTLETTITLE}</p>
				<p className={styles.Desc}>{SHORTLETDESC}</p>
				<img src={ShortLet} alt='' />
				<Link to='/apartmentShortLet'>
					<button className={styles.TypesButtonRight}>
						{BUTTONTEXT2} <img src={Arrow} alt='' className={styles.Arrow} />
					</button>
				</Link>
				{/* <img src={Explore} alt='' className={styles.exploreImage} /> */}
			</section>
		</section>
		// </div>
	);
};

export default Types;
