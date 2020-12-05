import React, { Component, Fragment } from 'react';
import _debounce from 'lodash.debounce';
import BookOption from './meeting-room-components/mr-book-option-section/BookOption';

import './MeetingRoom.modules.scss';
import Header from '../../shared-components/header/Header';
import HeroSection from './meeting-room-components/mr-hero-section/HeroSection';
import MrFeature from './meeting-room-components/mr-features-section/MeetingRoomFeatures';
import MeetingTypesSection from './meeting-room-components/mr-types-section/MeetingRoomTypes';
import HowItWorks from './meeting-room-components/mr-how-it-works-section/HowItWorks';
import MeetingVenues from './meeting-room-components/mr-venue-space-section/MeetingVenues';
import ContactUs from './meeting-room-components/mr-contact-us-section/ContactUs';
import BrilliantFeatures from './meeting-room-components/mr-brilliant-feature-section/BrilliantFeatures';
import UniqueVenues from './meeting-room-components/mr-unique-venues-section/UniqueVenues';
import Footer from '../../shared-components/footer/Footer';

class MeetingRoom extends Component {
	constructor() {
		super();

		this.state = {
			imageScrollValue: 0,
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		document.onkeydown = this.checkKey;
	}

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
			<Fragment>
				<Header
					isWhiteBg={true}
					backgroundColor='#fff'
					menuFontColor='#1A202c'
				/>
				<HeroSection
					imgWrapperRef={this.imageContainerRef}
					moveRight={this.moveRight}
					moveLeft={
						this.state.imageScrollValue > 0 ? this.moveToLeft : undefined
					}
					singleImageRef={this.singleImageRef}
				/>
				<MrFeature />
				<MeetingTypesSection />
				<BookOption />
				<HowItWorks />
				<MeetingVenues />
				<ContactUs />
				<BrilliantFeatures />
				<UniqueVenues />
				<Footer />
			</Fragment>
		);
	}
}

export default MeetingRoom;
