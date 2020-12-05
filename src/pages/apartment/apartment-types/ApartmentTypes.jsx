import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../../components/ui-components/back-button/BackButton';
import styles from './ApartmentTypes.module.css';
import LogoOnlyHeader from '../../../shared-components/logo-only-header/LogoOnlyHeader';
import LongStay from '../../../assets/apartment/longStay.svg';
import ShortStay from '../../../assets/apartment/shortStay.svg';

const TITLE = 'Tell us how long you will be staying';
export const ApartmentTypes = (props) => {
	// console.log(`i am in types with ${props.location.state.value}`);
	return (
		<>
			<LogoOnlyHeader />
			<BackButton history={props.history} to='/apartment' />
			<section className={styles.ApartmentTypes}>
				<p className={styles.Title}>{TITLE}</p>
				<section className={styles.Options}>
					<Link to='/apartmentLongLet' className={styles.link}>
						<div className={styles.imageA}>
							<img src={LongStay} alt='' className={styles.svgImage} />
							<form className={styles.formField}>
								<input
									type='radio'
									name='Stay'
									id='LongStay'
									value='LongStay'
									className={styles.inputField}
								/>
								<label for='LongStay'>Long Stay</label>
							</form>
						</div>
					</Link>
					<Link to='/apartmentShortLet' className={styles.link}>
						<div className={styles.imageA}>
							<img src={ShortStay} alt='' className={styles.svgImage} />
							<form className={styles.formField}>
								<input
									type='radio'
									name='Stay'
									id='ShortStay'
									value='ShortStay'
									className={styles.inputField}
								/>
								<label for='ShortStay'>Short Stay</label>
							</form>
						</div>
					</Link>
				</section>
			</section>
		</>
	);
};
