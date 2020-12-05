import React, { Component } from 'react';
import styles from './ApartmentLeadPage.module.css';
import Header from '../../../shared-components/header/Header';
import Footer from '../../../shared-components/footer/Footer';
import HeroSection from './hero-section/HeroSection';
import HeroSectionCopy from './hero-section/HeroSectionCopy';
import Overview from './overview/Overview';
import Types from './types/Types';
import Featured from './featured/Featured';
import Rent from './rent/Rent';
import TopCities from './cities-to-rent/CitiesToRent';

export class ApartmentLeadPage extends Component {
	state = {
		isDisabled: true,
		imageScrollValue: 0,
	};

	componentDidMount() {
		window.scrollTo(0, 0);

		document.onkeydown = this.checkKey;
	}

	enableSearchBtn = () => {
		this.setState({ isDisabled: false });
	};

	//a ref that needs to the referenced by the herosection image scroll bar layout
	imageContainerRef = React.createRef();

	//a ref that needs to the referenced by the herosection image
	singleImageRef = React.createRef();

	checkKey = (e) => {
		e = e || window.event;
		if (e.keyCode == '37') {
			// left arrow
			//console.log("left");
			this.moveRight(false);
		} else if (e.keyCode == '39') {
			// right arrow
			// console.log("right");
			this.moveRight(true);
		}
	};

	modifyScrollLeft = (operation) => {
		let widthPlusGap = this.singleImageRef.current.clientWidth + 25;

		const scrollLeftValue =
			operation === 'plus'
				? (this.imageContainerRef.current.scrollLeft = Math.ceil(
						this.imageContainerRef.current.scrollLeft + widthPlusGap
				  ))
				: (this.imageContainerRef.current.scrollLeft = Math.ceil(
						this.imageContainerRef.current.scrollLeft - widthPlusGap
				  ));

		return scrollLeftValue;
	};

	//moves the herosection image scroll bar to the right or left
	moveRight = (isForwardArrow) => {
		let scrollValue = this.imageContainerRef.current.scrollLeft;
		//25 is the gap between the images
		//clientWidth fetches the width of an image

		//we rounded up the scrollValue because at times it returns decimal and for our comaprison to work perfectly, we need
		//to evaluate objects of thesame type
		if (this.state.imageScrollValue == Math.ceil(scrollValue)) {
			isForwardArrow
				? this.setState({
						imageScrollValue: this.modifyScrollLeft('plus'),
				  })
				: this.setState({
						//if we are at the beginning of the scroll Layout, do not subtract the scrollLeft value, instead do nothing by setting it to 0
						imageScrollValue:
							scrollValue == 0 ? 0 : this.modifyScrollLeft('minus'),
				  });
		} else {
			isForwardArrow
				? this.setState({
						imageScrollValue: (this.imageContainerRef.current.scrollLeft = 0),
				  })
				: this.setState({
						//if we are at the beginning of the scroll Layout, do not subtract the scrollLeft value, instead do nothing by setting it to 0
						imageScrollValue:
							scrollValue == 0 ? 0 : this.modifyScrollLeft('minus'),
				  });
		}
	};

	moveToLeft = () => this.moveRight(false);

	render() {
		return (
			<div className={styles.ApartmentLandingPage}>
				<Header
					backgroundColor='white'
					menuFontColor='#1A202C'
					isWhiteBg={true}
				/>
				{/* <HeroSection
					isDisabled={this.state.isDisabled}
					enableSearchBtn={this.enableSearchBtn}
					imageLayoutRef={this.imageLayoutRef}
					imageRef={this.imageRef}
					moveRight={this.moveRight}
				/> */}
				<HeroSectionCopy
					isDisabled={this.state.isDisabled}
					enableSearchBtn={this.enableSearchBtn}
					imageContainerRef={this.imageContainerRef}
					singleImageRef={this.singleImageRef}
					moveRight={this.moveRight}
				/>
				<Overview />
				<Types />
				<Featured />
				<Rent />
				<TopCities />
				<Footer />
			</div>
		);
	}
}

export default ApartmentLeadPage;
