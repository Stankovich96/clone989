import React from 'react';
import styles from './SingleCustomer.module.css';
import Instagram from '../../../../../assets/instagramNoCircle.svg';
import Twitter from '../../../../../assets/twitterNoCircle.svg';
import LinkedIn from '../../../../../assets/linkedInNoCircle.svg';

const SingleCustomer = (props) => (
	<>
		<div
			onMouseEnter={() => props.showCustomerData(props.index, true)}
			onMouseLeave={() => props.showCustomerData(props.index, false)}
			className={styles.CustomerInfo}>
			<div className={styles.CustImgHolder}>
				<img src={props.customerImage} alt={props.name} />
			</div>
			{props.customerDataShown[props.index] && (
				<div className={styles.CustomerData}>
					<p className={styles.Name}>{props.name}</p>
					<p className={styles.WorkRole}>{props.workRole}</p>
					<div className={styles.Divider}></div>
					<p className={styles.PersonalInfo}>{props.personalInfo}</p>
					<div className={styles.MediaIcons}>
						<img src={Instagram} alt='instagram' />
						<img src={Twitter} alt='twitter' />
						<img src={LinkedIn} alt='linkedin' />
					</div>
				</div>
			)}

			{!props.customerDataShown[props.index] && (
				<div className={styles.CustomerNameOnly}>
					<p className={styles.Name}>{props.name}</p>
				</div>
			)}
		</div>

		<div className={styles.CustomerInfoTab}>
			{/* <div className={styles.CustImgHolderTab}>
				<img src={props.customerImage} alt={props.name} />
			</div> */}
			<div className={styles.ImageContainer}>
				<img
					className={styles.ImageTab}
					src={props.customerImage}
					alt={props.name}
				/>
			</div>
			{/* <img
				className={styles.ImageTab}
				src={props.customerImage}
				alt={props.name}
			/> */}
			<div className={styles.CustomerDataTab}>
				{/* <div className={styles.CustImgHolderTab}> */}

				{/* </div> */}
				<p className={styles.NameTab}>{props.name}</p>
				<p className={styles.WorkRoleTab}>{props.workRole}</p>
				<div className={styles.DividerTab}></div>
				<p className={styles.PersonalInfoTab}>{props.personalInfo}</p>
				<div className={styles.MediaIconsTab}>
					<img src={Instagram} alt='instagram' />
					<img src={Twitter} alt='twitter' />
					<img src={LinkedIn} alt='linkedin' />
				</div>
			</div>
		</div>
	</>
);

export default SingleCustomer;
