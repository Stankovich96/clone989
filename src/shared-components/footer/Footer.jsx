import React from 'react';
import styles from './Footer.module.css';
import LogoWhite from '../../assets/989LogoWhite.svg';
import FooterName from '../../assets/989Name.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedln from '../../assets/linkedln.svg';
import Twitter from '../../assets/twitter.svg';
import Playstore from '../../assets/playstore.svg';
import Applestore from '../../assets/appleStore.svg';
import ArrowRight from '../../assets/ArrowRight.svg';
import ArrowUp from '../../assets/ArrowUp.svg';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => (
	<div className={styles.Footer}>
		<footer>
			<div className={styles.leftSection}>
				<div className={styles.companyDetails}>
					<img
						src={LogoWhite}
						alt='989 Logo White'
						className={styles.footerLogo}
					/>
					<img src={FooterName} alt='989 Name' className={styles.footerName} />
				</div>
				<div className={styles.companySocials}>
					<ul>
						<li>
							<img src={Instagram} alt='989 Name' className={styles.socials} />
						</li>
						<li>
							<img src={Linkedln} alt='989 Name' className={styles.socials} />
						</li>
						<li>
							<img src={Twitter} alt='989 Name' className={styles.socials} />
						</li>
					</ul>
				</div>

				<div className={styles.companyStore}>
					<ul>
						<li>
							<img src={Playstore} alt='989 Name' className={styles.store} />
						</li>
						<li>
							<img src={Applestore} alt='989 Name' className={styles.store} />
						</li>
					</ul>
				</div>

				<div className={styles.subscription}>
					<p className={styles.subscriptionText}> Subscribe to newsletter</p>
					<form>
						<input
							type='email'
							name=''
							id=''
							placeholder='Email'
							className={styles.inputEmail}
						/>
						<button>
							<img
								src={ArrowRight}
								alt='arrow pointer'
								className={styles.arrowRight}
							/>
						</button>
					</form>
				</div>
			</div>
			<div className={styles.rightSection}>
				<div className={styles.footerDetails}>
					<div className={styles.footerDetailsLeft}>
						<ul className={styles.footerDetailsList}>
							<li className={styles.footerDetailsListItemTitle}>About</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/'>Home</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/aboutUs'>About us</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/blog'>Blog</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/termsConditions'>Terms & Conditions</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/privacyPolicy'>Privacy Policy</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.footerDetailsCenter}>
						<ul className={styles.footerDetailsList}>
							<li className={styles.footerDetailsListItemTitle}>Services</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/workspace'>Workspace</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/meetingRoom'>Meeting Room</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								{' '}
								<NavLink to='/apartment'>Apartment</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.footerDetailsRight}>
						<ul className={styles.footerDetailsList}>
							<li className={styles.footerDetailsListItemTitle}>Support</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/faq'>FAQ</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/contactUs'>Contact us</NavLink>
							</li>
							<li className={styles.footerDetailsListItem}>
								<NavLink to='/siteMap'>Site map</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					<p className={styles.copyrightIcon}>© 2019 BY 989 WORKSPACE INC </p>

					<img
						src={ArrowUp}
						alt='arrow pointer'
						className={styles.arrowUp}
						onClick={() => <NavLink to='/' />}
					/>
				</div>
			</div>
		</footer>
	</div>
);

export default Footer;
