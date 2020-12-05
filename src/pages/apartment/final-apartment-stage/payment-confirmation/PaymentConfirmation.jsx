import React from 'react';
import { useHistory } from 'react-router';
import Rating from '../../../../shared-components/rating/Rating';
import { Link } from 'react-router-dom';
import styles from './PaymentConfirmation.module.css';
import WorkspaceImg1 from '../../../../assets/workspace/workspaceImg1.png';
import Location from '../../../../assets/apartment/Location.svg';

const PaymentConfirmation = (props) => {
	const history = useHistory();
	return (
		<div className={styles.PaymentConfirmation}>
			<p>Confirm and Pay</p>
			<div className={styles.Section1}>
				<div className={styles.NameAndLocation}>
					<img src={WorkspaceImg1} alt='' />
					<div>
						<p className={styles.Name}>3 Bedroom Apartment</p>
						<div className={styles.LocationImage}>
							<img src={Location} alt='' />
							<p className={styles.Location}>
								16B Badeiya Street, Surulere, Lagos
							</p>
						</div>
						<p className={styles.Distance}>Bode thomas junc ~ 9 min. walk</p>
					</div>
				</div>
				<div className={styles.Edit}>
					<p>Edit</p>
					<div></div>
				</div>
			</div>
			<div className={styles.Section2}>
				<div>
					<div className={styles.Duration}>
						<p className={styles.Label}>Duration</p>
						<p className={styles.Value}>
							3 September, 2020 - 20 Septeber, 2020
						</p>
					</div>
					<div className={styles.Edit}>
						<p>Edit</p>
						<div></div>
					</div>
				</div>
			</div>
			<div className={styles.Section3}>
				<div className={styles.Price}>
					<p className={styles.Label}>Amount</p>
					<p className={styles.Value}>N40, 000</p>
				</div>
			</div>
			<div className={styles.Section4}>
				<button className={styles.Cancel}>Cancel</button>

				<button
					className={styles.Pay}
					onClick={() => history.push('/dashboard/home')}>
					Pay
				</button>
			</div>
		</div>
	);
};

export default PaymentConfirmation;
