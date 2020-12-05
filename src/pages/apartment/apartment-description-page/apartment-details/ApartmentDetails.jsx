import React from 'react';
import Carousel from '../../../../components/carousel/carousel';
import { IoMdCamera } from 'react-icons/io';
import Slider from 'react-slick';
import { ReactComponent as ArrowRight } from '../../../../assets/backArrow.svg';
import MainImage from '../../../../assets/apartment/gallery/mainImage.png';
import Image1 from '../../../../assets/apartment/gallery/image1.png';
import Image2 from '../../../../assets/apartment/gallery/image2.png';
import Image3 from '../../../../assets/apartment/gallery/image3.png';
import Image4 from '../../../../assets/apartment/gallery/image4.png';
import Bathroom from '../../../../assets/apartment/gallery/bathroom.png';
import Apartment1 from '../../../../assets/apartment/1Apartment.png';
import Apartment2 from '../../../../assets/apartment/2Apartment.png';
import Apartment3 from '../../../../assets/apartment/3Apartment.png';
import Apartment4 from '../../../../assets/apartment/4Apartment.png';

import './ApartmentDetails.modules.scss';

const roomDescImages = [
	{ src: Apartment2 },
	{ src: Apartment1 },
	{ src: Apartment2 },
	{ src: Apartment3 },
	{ src: Apartment4 },
	{ src: Apartment1 },
];

const CustomPrevArrow = (props) => {
	let ArrowClassName = props.type === 'next' ? 'nextArrow' : 'prevArrow';
	ArrowClassName += ' arrow';

	return (
		<span className={ArrowClassName} onClick={props.onClick}>
			<ArrowRight />
		</span>
	);
};

const ApartmentDetails = (props) => {
	const settings = {
		customPaging: function (i) {
			return (
				<a>
					<img src={roomDescImages[i].src} />
				</a>
			);
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		lazyLoad: 'progressive',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='apartment-details'>
			<div className='container'>
				<div className='apartment-images'>
					<Slider
						{...settings}
						prevArrow={<CustomPrevArrow type='prev' />}
						nextArrow={<CustomPrevArrow type='next' />}>
						<div className='room-images-1'>
							<img src={Apartment2} alt='Apartment pic-1' />
						</div>
						<div className='room-images-2'>
							<img src={Apartment1} alt='Apartment pic-2' />
						</div>
						<div className='room-images-3'>
							<img src={Apartment2} alt='Apartment pic-3' />
						</div>
						<div className='room-images-4'>
							<img src={Apartment3} alt='Apartment pic-4' />
						</div>
						<div className='room-images-5'>
							<img src={Apartment4} alt='Apartment pic-5' />
						</div>
						<div className='room-images-6'>
							<img src={Apartment1} alt='Apartment pic-6' />
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};
export default ApartmentDetails;
