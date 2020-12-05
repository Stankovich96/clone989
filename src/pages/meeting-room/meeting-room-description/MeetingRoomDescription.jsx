import React, { Fragment } from 'react';
import Footer from '../../../shared-components/footer/Footer';

import Header from "../../../shared-components/header/Header";
import RoomDetails from "../meeting-room-components/mr-booking-details/RoomDetails";
import RoomInfo from "../meeting-room-components/mr-booking-info/RoomInfo";

const MeetingRoomDescription = () => {
    return (
        <Fragment>
            <Header
                isWhiteBg={true}
                backgroundColor="#fff"
                menuFontColor="#1A202c"
            />
            <RoomDetails />
            <RoomInfo />
            <Footer />
        </Fragment>
    )
}

export default MeetingRoomDescription;
