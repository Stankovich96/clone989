import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ReactComponent as LocationMap } from '../../../../assets/apartment/location-map.svg';
import { FaArrowDown, FaCaretDown } from 'react-icons/fa';
import User1Img from '../../../../assets/meetingroom/user1.jpg';
import User2Img from '../../../../assets/meetingroom/user2.jpg';
import User3Img from '../../../../assets/meetingroom/user3.jpg';
import User4Img from '../../../../assets/meetingroom/user4.jpg';
import User5Img from '../../../../assets/meetingroom/user5.jpg';
import Rating from '../../../../shared-components/rating/Rating';

export const DescriptionTab = () => (
	<div className='apartment-description-tab'>
		<div className='amenitiess'>
			<div className='amenitiess-header-left'>
				<p className='amenitiess-title'>Amenities</p>
				<div className='list'>
					<ul>
						<li>~ Master bedroom</li>
						<li>~ Kitchen</li>
						<li>~ Balcony</li>
						<li>~ Bathroom</li>
					</ul>
					<ul>
						<li>~ Air condition</li>
						<li>~ Wardrobe</li>
						<li>~ Ceiling fan</li>
						<li>~ Toilet</li>
					</ul>
				</div>
			</div>
			<div className='amenitiess-header-right'>
				<p className='amenitiess-title'>House Rules</p>
				<ul>
					<li>~ Suitable for professionals and students</li>
					<li>~ Pets are allowed</li>
					<li>~ No smoking</li>
					<li>~ Overnight guess are allowed provided it’s not max outed.</li>
				</ul>
			</div>
		</div>

		<p className='show'>
			Show more <FaCaretDown />
		</p>
	</div>
);

export const UserReviewsTab = () => (
	<div className='apartment-reviews'>
		<div className='apartment-user-reviews'>
			<div className='apartment-review-count'>Reviews (19)</div>
			<div className='apartment-users'>
				<UserReviewsDetails name='Martins Obi' avatar={User1Img} />
				<UserReviewsDetails name='Maryann M.' avatar={User3Img} />
				<UserReviewsDetails name='Christina Brown' avatar={User2Img} />
				<UserReviewsDetails name='Kingsley Orji' avatar={User4Img} />
				<UserReviewsDetails name='Suleiman Danusi' avatar={User5Img} />
			</div>
		</div>
		<div className='apartment-reviews-rating'>
			<p className='apartment-ratings-text'>Ratings</p>
			<div className='apartment-guest-ratings'>
				<div className='apartment-guest-ratings__count'>
					Guest <span>4.0</span>
				</div>
				<div className='apartment-guest-ratings__stars'>
					<Rating starCount={5} isDarkStar />
					<div className='apartment-guest-ratings__stars-info'>
						Based on 19 reviews
					</div>
				</div>
			</div>
			<div className='apartment-overview'>
				<div className='apartment-overview-story'>
					<div className='apartment-overview-story__item'>
						<span className='apartment-photo-accuracy'>Photo accuracy</span>
						<span className='apartment-photo-accuracy__rate'>4</span>
					</div>
					<div className='apartment-photo-accuracy-bar'>
						<div></div>
					</div>
				</div>
				<div className='apartment-overview-story'>
					<div className='apartment-overview-story__item'>
						<span className='apartment-value'>Value</span>
						<span className='apartment-value__rate'>5</span>
					</div>
					<div className='apartment-value-bar'>
						<div></div>
					</div>
				</div>
				<div className='apartment-overview-story'>
					<div className='apartment-overview-story__item'>
						<span className='apartment-price'>Price quality</span>
						<span className='apartment-price__rate'>4</span>
					</div>
					<div className='apartment-price-bar'>
						<div></div>
					</div>
				</div>
				<div className='apartment-overview-story'>
					<div className='apartment-overview-story__item'>
						<span className='apartment-location'>Location area</span>
						<span className='apartment-location__rate'>3</span>
					</div>
					<div className='apartment-location-bar'>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const UserReviewsDetails = (props) => (
	<div className='apartment-user'>
		<div className='apartment-user-avatar'>
			<img src={props.avatar} alt='user' />
		</div>
		<div className='apartment-user-feedback'>
			<div className='apartment-user-feedback__info'>
				<div>
					<div className='apartment-user-name'>{props.name}</div>
					<div className='apartment-date-stamp'> 15 April 2020</div>
				</div>
				<div className='apartment-user-rating'>
					<span>5</span> <AiFillStar className='apartment-user-rating__star' />
				</div>
			</div>
			<div className='apartment-user-feedback__comment'>
				Lorem ipsum non sollicitudin lobortis quis quis vel, sem nisl turpis.
				Arcu libero volutpat amet, elementum. Enim interdum potenti platea purus
				imperdiet hac. Tristique at egestas porttitor in leo. Pharetra id ornare
				netus venenatis arcu auctor.
			</div>
		</div>
	</div>
);

export const LocationMapTab = () => (
	<div className='apartment-location'>
		<div className='apartment-location-header'>Location map</div>
		<div className='apartment-location-map-body'>
			<LocationMap className='apartment-svg-body' />{' '}
		</div>
	</div>
);
