import React from "react";
import { ReactComponent as WifiIcon } from '../../../../assets/meetingroom/wifi.svg';
import { RiArtboardLine } from 'react-icons/ri';
import { AiFillStar } from 'react-icons/ai';
import { ReactComponent as TelephoneIcon } from '../../../../assets/meetingroom/telephone.svg';
import { ReactComponent as EateryIcon } from '../../../../assets/meetingroom/eatery.svg';
import { ReactComponent as SeatIcon } from '../../../../assets/meetingroom/cushion-seats.svg';
import { ReactComponent as CarParkIcon } from '../../../../assets/meetingroom/car-parking.svg';
import { ReactComponent as TheatreIcon } from '../../../../assets/meetingroom/theatre.svg';
import { ReactComponent as ProjectorIcon } from '../../../../assets/meetingroom/projector.svg';
import { ReactComponent as LocationMap } from '../../../../assets/meetingroom/location-map.svg';
import User1Img from '../../../../assets/meetingroom/user1.jpg';
import User2Img from '../../../../assets/meetingroom/user2.jpg';
import User3Img from '../../../../assets/meetingroom/user3.jpg';
import User4Img from '../../../../assets/meetingroom/user4.jpg';
import User5Img from '../../../../assets/meetingroom/user5.jpg';
import Rating from "../../../../shared-components/rating/Rating";

export const DescriptionTab = () => (
    <div className="description-tab">
        <div className="about">
            <div className="about-header">About</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>Non pulvinar neque laoreet suspendisse interdum consectetur. Adipiscing diam donec adipiscing tristique 
                risus nec. Id velit ut tortor pretium viverra suspendisse potenti. Ultricies tristique nulla aliquet enim 
                tortor at. Libero id faucibus nisl tincidunt eget nullam non nisi. Pharetra convallis posuere morbi leo urna 
                molestie at. Lorem ipsum dolor sit amet consectetur. Tempus urna et pharetra pharetra massa massa. A lacus 
                vestibulum sed arcu non. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. 
                Eget nunc lobortis mattis aliquam faucibus purus in massa. Maecenas pharetra convallis posuere morbi leo urna. 
                Tortor vitae purus faucibus ornare suspendisse. Nunc sed augue lacus viverra vitae congue eu consequat ac. 
                Sit amet porttitor eget dolor.
            </p>
        </div>
        <div className="amenities">
            <div className="amenities-header">Amenities</div>
            <div className="amenities__icon-list">
                <span><WifiIcon className="icon"/> Wifi router</span>
                <span><EateryIcon className="icon"/> Catering</span>
                <span><CarParkIcon className="icon"/> Parking</span>
                <span><TheatreIcon className="icon"/> Theatre</span>
                <span><TelephoneIcon className="icon"/> Telephone</span>
                <span><ProjectorIcon className="icon"/> Projector</span>
                <span><RiArtboardLine className="icon whiteboard-icon"/> Whiteboard</span>
                <span><SeatIcon className="icon"/> Cushion seats</span>
            </div>
        </div>
        <div className="policy">
            <div className="policy-header">Things to know</div>
            <div className="policy-statement">
                <p>Concellation policy</p>
                <p>You have only 72 hours notice for cancellation.</p>
                <a href="#">More details</a>
            </div>
        </div>
    </div>
);

export const UserReviewsTab = () => (
    <div className="reviews">
        <div className="user-reviews">
            <div className="review-count">Reviews (19)</div>
            <div className="users">
                <UserReviewsDetails name="Martins Obi"  avatar={User1Img} />
                <UserReviewsDetails  name="Maryann M."  avatar={User3Img} />
                <UserReviewsDetails name="Christina Brown"  avatar={User2Img} />
                <UserReviewsDetails name="Kingsley Orji"  avatar={User4Img} />
                <UserReviewsDetails name="Suleiman Danusi"  avatar={User5Img} />
            </div>
        </div>
        <div className="reviews-rating">
            <p className="ratings-text">Ratings</p>
            <div className="guest-ratings">
                <div className="guest-ratings__count">
                    Guest <span>4.0</span>
                </div>
                <div className="guest-ratings__stars">
                    <Rating starCount={5} isDarkStar />
                    <div className="guest-ratings__stars-info">Based on 19 reviews</div>
                </div>
            </div>
            <div className="overview">
                <div className="overview-story">
                    <div className="overview-story__item">
                        <span className="photo-accuracy">Photo accuracy</span>
                        <span className="photo-accuracy__rate">4</span>
                    </div>
                    <div className="photo-accuracy-bar"><div></div></div>
                </div>
                <div className="overview-story">
                    <div className="overview-story__item">
                        <span className="value">Value</span>
                        <span className="value__rate">5</span>
                    </div>
                    <div className="value-bar"><div></div></div>
                </div>
                <div className="overview-story">
                    <div className="overview-story__item">
                        <span className="price">Price quality</span>
                        <span className="price__rate">4</span>
                    </div>
                    <div className="price-bar"><div></div></div>
                </div>
                <div className="overview-story">
                    <div className="overview-story__item">
                        <span className="location">Location area</span>
                        <span className="location__rate">3</span>
                    </div>
                    <div className="location-bar"><div></div></div>
                </div>
            </div>
        </div>
    </div>
);

const UserReviewsDetails = (props) => (
    <div className="user">
        <div className="user-avatar">
            <img src={props.avatar} alt="user"/>
        </div>
        <div className="user-feedback">
            <div className="user-feedback__info">
                <div>
                    <div className="user-name">{props.name}</div>
                    <div className="date-stamp"> 15 April 2020</div>
                </div>
                <div className="user-rating"><span>5</span> <AiFillStar className="user-rating__star"/></div>
            </div>
            <div className="user-feedback__comment">
                Lorem ipsum non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu libero volutpat amet, elementum. 
                Enim interdum potenti platea purus imperdiet hac. Tristique at egestas porttitor in leo. Pharetra id ornare 
                netus venenatis arcu auctor.
            </div>
        </div>
    </div>
); 

export const LocationMapTab = () => (
    <div className="location">
        <div className="location-header">Location map</div>
        <div className="location-map-body">
            <LocationMap /> {/*This is coming in as an icon, which will be replaced later */}
        </div>
    </div>
);