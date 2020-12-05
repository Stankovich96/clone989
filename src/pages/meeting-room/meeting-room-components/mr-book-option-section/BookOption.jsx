import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import throttle from 'lodash.throttle';
import classNames from 'classnames';

import { ReactComponent as NavLeft } from '../../../../assets/meetingroom/nav-left.svg';
import { ReactComponent as NavRight } from '../../../../assets/meetingroom/nav-right.svg';
import { Card, BookOptionDesc, scrollTo } from './BookOption.utils';
import { cardData } from './CardData';

import './BookOption.modules.scss';

class BookOption extends Component {
	constructor() {
		super();

		this.throttleScroll = throttle(this.onScroll, 250);
		this.carouselViewportRef = React.createRef();

		this.state = {
			numOfSlidesToScroll: 1,
			allTheWayLeft: false,
			allTheWayRight: false,
		};
	}

	onScroll = (e) => {
		this.checkIfAllTheWayOver();
	};

	checkIfAllTheWayOver() {
		const carouselViewport = this.carouselViewportRef.current;
		// if scroll left === 0
		// do not show left button nav or lower the opacity of the button

		let allTheWayLeft = false;
		if (carouselViewport.scrollLeft === 0) {
			allTheWayLeft = true;
		}

		// if scrollLeft + lengthOfCarouselOffsetWidth === real length of the all slides in the viewport
		// then do not show right button nav

		let allTheWayRight = false;
		let amountScrolled = carouselViewport.scrollLeft;
		let carouselViewportLength = carouselViewport.clientWidth;
		let totalWidthOfCarousel = carouselViewport.scrollWidth;
		// console.log('scrolling', totalWidthOfCarousel, Math.ceil(amountScrolled + carouselViewportLength), amountScrolled );
		if (
			Math.ceil(amountScrolled + carouselViewportLength) ===
			totalWidthOfCarousel
		) {
			allTheWayRight = true;
		}

		if (
			this.state.allTheWayLeft !== allTheWayLeft ||
			this.state.allTheWayRight !== allTheWayRight
		) {
			this.setState({
				allTheWayLeft,
				allTheWayRight,
			});
		}
	}

	componentDidMount() {
		this.checkIfAllTheWayOver();
		this.carouselViewportRef.current.scrollLeft = this.carouselViewportRef.current.scrollWidth;
	}

	widthAndTimeToScroll() {
		let numOfSlidesToScroll = this.state.numOfSlidesToScroll;
		let widthOfSlide = findDOMNode(this.slide).offsetWidth;
		let timeToMoveOneSlide = 200;
		return {
			widthToScroll: numOfSlidesToScroll * widthOfSlide,
			timeToScroll: Math.min(numOfSlidesToScroll * timeToMoveOneSlide, 400),
		};
	}

	handleLeftNav = (e) => {
		const carouselViewport = this.carouselViewportRef.current;
		let { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
		let newPos = carouselViewport.scrollLeft - widthToScroll;

		return scrollTo({
			element: carouselViewport,
			to: newPos,
			duration: timeToScroll,
			scrollDirection: 'scrollLeft',
			callback: this.checkIfAllTheWayOver,
			context: this,
		});
	};

	handleRightNav = (e) => {
		const carouselViewport = this.carouselViewportRef.current;
		let { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
		let newPos = carouselViewport.scrollLeft + widthToScroll;

		let promise = scrollTo({
			element: carouselViewport,
			to: newPos,
			duration: timeToScroll,
			scrollDirection: 'scrollLeft',
			callback: this.checkIfAllTheWayOver,
			context: this,
		});
		return promise;
	};

	render() {
		const { allTheWayLeft, allTheWayRight } = this.state;

		const leftNavClasses = classNames({
			'control-nav-disabled': allTheWayLeft,
		});

		const rightNavClasses = classNames({
			'control-nav-disabled': allTheWayRight,
		});

		return (
			<div className='container'>
				<div className='book-option'>
					<div className='book-option__left'>
						<div className='control-nav'>
							<span className={leftNavClasses} onClick={this.handleLeftNav}>
								<NavLeft />
							</span>
							<span className={rightNavClasses} onClick={this.handleRightNav}>
								<NavRight />
							</span>
						</div>
						<div className='card-venues'>
							<div
								className='cards'
								ref={this.carouselViewportRef}
								onScroll={this.throttleScroll}>
								{cardData.map((info, index) => (
									<Card
										key={index}
										cardInfo={info}
										ref={(compSlide) => (this.slide = compSlide)}
									/>
								))}
								<div className='card-ending-space'></div>
							</div>
						</div>
					</div>
					<div className='book-option__right'>
						<BookOptionDesc />
					</div>
				</div>
			</div>
		);
	}
}

export default BookOption;
