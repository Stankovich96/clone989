import React from 'react';
import RoomImage from "../../../../assets/meetingroom/seminar-room1.png";
import { ReactComponent as WifiIcon } from "../../../../assets/meetingroom/wifi.svg";
import { ReactComponent as ConferenceIcon } from "../../../../assets/meetingroom/video-conference.svg";
import { ReactComponent as WhiteboardIcon } from "../../../../assets/meetingroom/whiteboard.svg";
import { ReactComponent as EateryIcon } from "../../../../assets/meetingroom/eatery.svg";
import { ReactComponent as TelephoneIcon } from "../../../../assets/meetingroom/telephone.svg";
import { FaUserAlt } from "react-icons/fa";

export const ResultCard = (props) =>{
    const { cardViewStyle } = props;
    return (
        <div className={`card ${cardViewStyle}` }>
            <div className="card-img">
                <img src={RoomImage} alt="seminar room" className="result-img"/>
                <span><FaUserAlt className="room-capacity"/>  20 capacity</span>
            </div>
            <div className="card-info">
                <div className="room-name">Abuja International Conference Center</div>
                <div className="room-type">Conference room</div>
                <div className="room-location">36A Yusuf Yakubu Avenue, Phase II, Abuja</div>
                <div className="room-amenities">
                    <span className="amenities"><WifiIcon /></span>
                    <span className="amenities"><ConferenceIcon /></span>
                    <span className="amenities"><WhiteboardIcon /></span>
                    <span className="amenities"><TelephoneIcon /></span>
                    <span className="amenities"><EateryIcon /></span>
                    <span className="amenities-extra">+2</span>
                </div>
                <div className="room-price">
                    <div className="room-price__card">
                        <span className="rate">Per Hour</span>
                        <span className="rate-price">NA</span>
                    </div>
                    <div className="room-price__card">
                        <span className="rate">Per Half Day</span>
                        <span className="rate-price">NA</span>
                    </div>
                    <div className="room-price__card">
                        <span className="rate">Per Day</span>
                        <span className="rate-price">N 450,000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};