import React from 'react';
import styles from './PersonalDetails.module.css';

const PersonalDetails = (props) => {
	// const handleChange = (value) => {
	// 	this.setState({
	// 		currentTab: value,
	// 	});
	// };

	return (
		<div className={styles.PersonalDetails}>
			<div className={styles.Header}>
				<p className={styles.Title}>Key in your details</p>
				<p className={styles.LoginQuestion}>
					Already a member? <span>Log In</span>
				</p>
			</div>
			<div className={styles.Form}>
				<div className={styles.InputLayout}>
					<p className={styles.Label}>Full Name</p>
					<input value='Tolani Fashola' />
				</div>
				<div className={styles.InputLayout}>
					<p className={styles.Label}>Email</p>
					<input placeholder='Input your email' type='email' />
				</div>
				<div className={styles.InputLayout}>
					<p className={styles.Label}>Mobile Number</p>
					<input placeholder='Input your mobile' />
				</div>
				{props.changeToSecondTab ? (
					<button onClick={() => props.changeToSecondTab(1)}>NEXT</button>
				) : (
					<button onClick={() => props.click(false)}>NEXT</button>
				)}
			</div>
		</div>
	);
};

export default PersonalDetails;
