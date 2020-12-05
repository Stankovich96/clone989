import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import BackButton from '../../../components/ui-components/back-button/BackButton';
import PersonalDetails from '../../workspace/final-booking-stage/personal-details/PersonalDetails';
import RoomImg1 from "../../../assets/meetingroom/conference-center-2.jpg";
import { ReactComponent as RoomKeyIcon } from "../../../assets/meetingroom/room-key.svg";
import { ReactComponent as RoomCapacityIcon } from "../../../assets/meetingroom/room-capacity.svg";
import { ReactComponent as RoomAmenitiesIcon } from "../../../assets/meetingroom/room-amenities.svg";
import { ReactComponent as RemoveIcon } from "../../../assets/meetingroom/close-icon.svg";
import { ReactComponent as CateringIcon } from "../../../assets/meetingroom/eatery.svg";
import { ReactComponent as WhiteboardIcon } from "../../../assets/meetingroom/whiteboard.svg";
import { ImPencil } from 'react-icons/im';
import { RiArtboardFill } from 'react-icons/ri';

const MRPayment = () =>(
    <div className="payment-detailed-info">
        <div className="payment-title-tag">Confirm and Pay</div>
        <div className="payment-item">
            <div className="payment-item-overview">
                <div className="payment-item-img">
                    <img src={RoomImg1} alt="conference room"/>
                </div>
                <div>
                    <div className="payment-item-title">Abuja International Conference Center</div>
                    <div className="payment-item-location">36A Yusuf Yakubu Avenue, Phase II, Abuja</div>
                    <div className="payment-item-properties">
                        <span><RoomAmenitiesIcon className="property-icon"/> 4 amenities</span>
                        <span><RoomKeyIcon className="property-icon"/> Room 407</span>
                        <span><RoomCapacityIcon className="property-icon capacity-icon"/> 60 max. capacity</span>
                    </div>
                </div>
            </div>
            <div className="payment-item-type">Conference Room</div>
            <div className="payment-item-edit">Edit</div>
        </div>
        <div className="booking-timestamp">
            <div className="booking-timestamp-details">
                <div className="start-time">
                    <div className="timestamp-title">Start Time</div>
                    <div className="timestamp-body">10:30 AM</div>
                </div>
                <div className="end-time">
                    <div className="timestamp-title">End Time</div>
                    <div className="timestamp-body">04:00 PM</div>
                </div>
                <div className="attendees">
                    <div className="timestamp-title">Attendees</div>
                    <div className="timestamp-body">12 people</div>
                </div>
                <div className="date">
                    <div className="timestamp-title">Date</div>
                    <div className="timestamp-body">23 Sept, 2020 ~Thur</div>
                </div>
                <div className="duration">
                    <div className="timestamp-title">Duration</div>
                    <div className="timestamp-body">~6 Hours/ Day</div>
                </div>
            </div>
            <div className="booking-timestamp-edit">Edit</div>
        </div>
        <div className="payment-plan">
            <div className="payment-plan-amount">
                <div className="payment-plan-header">Amount</div>
                <div className="payment-plan-content">N 40, 000</div>
            </div>
            <div className="payment-plan-type">
                <div className="payment-plan-header">Payment Plan</div>
                <div className="payment-plan-content">Recurrent</div>
            </div>
            <div className="payment-plan-edit">Edit</div>
        </div>
        <div className="additional-services">
            <div className="grid-item service-header">
                <label>Additional Services</label>
                <label>Price</label>
                <label>Quantity</label>
                <label>Total</label>
                <label>&nbsp;</label>
            </div>
            <div className="grid-item service-item">
                <div className="extra-service"><CateringIcon />  <span>Catering</span></div>
                <div className="price">N 5,000</div>
                <div className="quantity"> <input type='text' name='quantity' placeholder="6"/> </div>
                <div className="total">N 30,000</div>
                <div className="remove-item"><RemoveIcon className="remove-icon"/></div>
            </div>
            <div className="grid-item service-item">
                <div className="extra-service"><RiArtboardFill style={{fill: "#6D6969"}}/>  <span>Whiteboard</span></div>
                <div className="price">N 1,500</div>
                <div className="quantity"> <input type='text' name='quantity' placeholder="1"/> </div>
                <div className="total">N 1,500</div>
                <div className="remove-item"><RemoveIcon className="remove-icon"/></div>
            </div>
            <div className="grid-item service-item">
                <div className="extra-service"><ImPencil style={{fill: "#6D6969"}}/>  <span>Marker</span></div>
                <div className="price">N 500</div>
                <div className="quantity"> <input type='text' name='quantity' placeholder="1"/> </div>
                <div className="total">N 500</div>
                <div className="remove-item"><RemoveIcon className="remove-icon"/></div>
            </div>
            <span className="add-more"><span>Add more</span></span>
        </div>
        <div className="payment-subtotal">
            <div className="payment-subtotal-1">
                <span>N 40,000 * 6 hours</span>
                <span>N 240 000</span>
            </div>
            <div className="payment-subtotal-2">
                <span>Additional Services</span>
                <span>N 32 000</span>
            </div>
        </div>
        <div className="payment-total">
            <span>Total</span>
            <span>N 272 000</span>
        </div>
        <div className="pay-button">
            <button className="pay-button-cancel">Cancel</button>
            <Link to="/dashboard/home">
                <button className="pay-button-confirm">Pay</button>
            </Link>
        </div>
    </div>
);

export class PaymentCard extends Component {
    state = {
        tabIndex: 0
    }

    setTabIndex=(index)=> {
        this.setState({ tabIndex: index });
    }

    render() {
        const { tabIndex } = this.state;
        //Remove tabFor and defaultTab warnings from the console
        return (
            <div className="mr-payment">
                <Tabs defaultTab="one" selectedTabClassName="mr-active-tab" selectedTabPanelClassName="catab-panel-animation" selectedIndex={tabIndex} onSelect={index => this.setTabIndex(index)}>
                    <TabList className="mr-payment-tablist">
                        <div className="container">
                            <Tab className="mr-payment-tablist-menu" tabFor="one" >Payment Details</Tab>
                            <Tab className="mr-payment-tablist-menu" tabFor="two">Payment</Tab>
                        </div>
                    </TabList>

                    <TabPanel tabId="one" className="tab-content">
                        <Fragment>
                            <BackButton history={this.props.history} to="/MeetingRoomDescription"/>
                            <PersonalDetails changeToSecondTab={this.setTabIndex} />
                        </Fragment>
                    </TabPanel>

                    <TabPanel tabId="two" className="tab-content">
                        <div className="container">
                            <MRPayment />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default PaymentCard;
