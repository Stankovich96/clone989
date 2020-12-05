import React, { Component } from 'react';
import styles from './ApartmentDescriptionPage.module.css';
import Header from '../../../shared-components/header/Header';
import Footer from '../../../shared-components/footer/Footer';
import ApartmentGallery from './apartment-gallery/ApartmentGallery';
import ApartmentAbout from './apartment-about/ApartmentAbout';
import ApartmentImage from './apartment-details/ApartmentDetails';

export class ApartmentDescriptionPage extends Component {
	state = {};
	render() {
		return (
			<div className={styles.ApartmentLandingPage}>
				<Header
					backgroundColor='white'
					menuFontColor='#1A202C'
					isWhiteBg={true}
				/>
				<div className={styles.ApartmentLandingPageBody}>
					<ApartmentImage />
					<ApartmentGallery />
					<ApartmentAbout />
				</div>

				<Footer />
			</div>
		);
	}
}

export default ApartmentDescriptionPage;
