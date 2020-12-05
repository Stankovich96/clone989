import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

import { ImLocation } from 'react-icons/im';
import { IoIosPricetags } from 'react-icons/io';
import { ReactComponent as RoomKeyIcon } from "../../../../assets/meetingroom/room-key.svg";
import { ReactComponent as RoomCapacityIcon } from "../../../../assets/meetingroom/room-capacity.svg";
import { ReactComponent as RoomAmenitiesIcon } from "../../../../assets/meetingroom/room-amenities.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/backArrow.svg";
import RoomImg1 from "../../../../assets/meetingroom/conference-center-2.jpg";
import RoomImg2 from "../../../../assets/meetingroom/Abuja-2.jpg";
import RoomImg3 from "../../../../assets/meetingroom/Abuja-3.jpg";
import RoomImg4 from "../../../../assets/meetingroom/abuja-10.jpg";
import RoomImg5 from "../../../../assets/meetingroom/Abuja-5.jpg";
import RoomImg6 from "../../../../assets/meetingroom/Abuja-6.jpg";


import "./RoomDetails.modules.scss";

const roomDescImages = [
    { src: RoomImg1 },
    { src: RoomImg2 },
    { src: RoomImg3 },
    { src: RoomImg4 },
    { src: RoomImg5 },
    { src: RoomImg6 },
];

const CustomPrevArrow =(props)=>{
    let ArrowClassName = props.type === "next" ? "nextArrow" : "prevArrow";
    ArrowClassName += " arrow";

    return(
        <span className={ArrowClassName} onClick={props.onClick}>
            <ArrowRight />
        </span>
    )
};

class RoomDetails extends Component {
    render(){
        const settings = {
            customPaging: function(i) {
                return (
                <a>
                    <img src={roomDescImages[i].src} />
                </a>
                );
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            lazyLoad: 'progressive',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return(
            <div className="room-details">
                <div className="container">
                    <div className="room-images">
                        <Slider {...settings} prevArrow={<CustomPrevArrow type="prev" />} nextArrow={<CustomPrevArrow type="next" />}>
                            <div className="room-images-1">
                                <img src={RoomImg1} alt="Abuja conference pic-1"/>
                            </div>
                            <div className="room-images-2">
                                <img src={RoomImg2} alt="Abuja conference pic-2"/>
                            </div>
                            <div className="room-images-3">
                                <img src={RoomImg3} alt="Abuja conference pic-3"/>
                            </div>
                            <div className="room-images-4">
                                <img src={RoomImg4} alt="Abuja conference pic-4"/>
                            </div>
                            <div className="room-images-5">
                                <img src={RoomImg5} alt="Abuja conference pic-5"/>
                            </div>
                            <div className="room-images-6">
                                <img src={RoomImg6} alt="Abuja conference pic-6"/>
                            </div>
                        </Slider>
                    </div>
                    <div className="room-bookings">
                        <div className="room-bookings__left">
                            <div className="room-name">Abuja International Conference Center</div>
                            <div className="room-type">Conference Room</div>
                            <div className="room-location"><ImLocation className="location-icon" /> 36A Yusuf Yakubu Avenue, Phase II, Abuja</div>
                            <div className="room-property-overview">
                                <div className="room-key">
                                    <span className="room-key__icon"><RoomKeyIcon /></span>
                                    <span className="room-key__text">Room 407</span>
                                </div>
                                <div className="room-capacity">
                                    <span className="room-capacity__icon"><RoomCapacityIcon /></span>
                                    <span className="room-capacity__text">60 capacity</span>
                                </div>
                                <div className="room-amenities">
                                    <span className="room-amenities__icon"><RoomAmenitiesIcon /></span>
                                    <span className="room-amenities__text">4 Amenities</span>
                                </div>
                            </div>
                        </div>
                        <div className="room-bookings__right">
                            <div className="priceList">
                                <div className="price">
                                    <span className="price-tag"><IoIosPricetags className="price-tag__icon"/></span>
                                    <span className="price-rate">Price Per Hour</span>
                                    <span className="amount">NA</span>
                                </div>
                                <div className="price">
                                    <span className="price-tag"><IoIosPricetags className="price-tag__icon" /></span>
                                    <span className="price-rate">Price Per Half Day</span>
                                    <span className="amount">NA</span>
                                </div>
                                <div className="price">
                                    <span className="price-tag"><IoIosPricetags className="price-tag__icon"/></span>
                                    <span className="price-rate">Price Per Day</span>
                                    <span className="amount">N650,000</span>
                                </div>
                            </div>
                            <div className="virtual-tour-button">Book a virtual tour</div>
                            <Link to="/MeetingRoomPayment"><div className="book-now-button">Book now</div></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
};

export default RoomDetails;
