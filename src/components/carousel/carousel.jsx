import React from 'react';
import Slider from 'react-slick';

import CarouselStyles from './Carousel.module.css';
import './dotsStyling.css';

import ApartmentImage1 from '../../assets/apartment/apartmentImg1.png';
import ApartmentImage2 from '../../assets/apartment/apartmentImg2.png';
import ApartmentImage3 from '../../assets/apartment/apartmentImg3.png';
import ApartmentImage4 from '../../assets/apartment/apartmentImg4.png';

const Carousel = () => {
	const settings = {
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		speed: 1000,
		arrows: true,
		adaptiveHeight: true,
		appendDots: (dots) => <ul>{dots}</ul>,
		customPaging: (i) => <div className='ft-slick__dots--custom'></div>,
		appendArrows: (arrows) => <ul>{arrows}</ul>,
		customPaging: (i) => <div className='ft-slick__dots--custom'></div>,
	};

	return (
		<div className={CarouselStyles.AlignDots}>
			<Slider {...settings}>
				<div className={CarouselStyles.ImgWrapper}>
					<img
						className={CarouselStyles.SliderImage}
						src={ApartmentImage1}
						alt='apartment Images'
					/>
				</div>
				<div className={CarouselStyles.ImgWrapper}>
					<img src={ApartmentImage2} alt='apartment Images' />
				</div>
				<div className={CarouselStyles.ImgWrapper}>
					<img src={ApartmentImage3} alt='apartment Images' />
				</div>
				<div className={CarouselStyles.ImgWrapper}>
					<img src={ApartmentImage4} alt='apartment Images' />
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
