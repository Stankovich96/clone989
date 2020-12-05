import React from "react";

import Apartment from '../../../../../assets/apartment/1bedroom.png';
import MeetingRoom from '../../../../../assets/meetingroom/Abuja-1.jpg';
import Workspace from '../../../../../assets/meetingroom/Abuja-2.jpg';
import CleftBookType from "../c-left-booktype/CleftBookType";

const transactions = [
  {
    img: Workspace,
    name: "Tower Building",
    location: "Ikeja, Lagos",
    numOfPeople: 3,
    date: "3 Sept, 2020",
    rating: 5,
  },
  {
    img: MeetingRoom,
    name: "Conference Room",
    location: "Surulere, Lagos",
    numOfPeople: 11,
    date: "31 Dec, 2020",
    rating: 4.5,
  },
  {
    img: Apartment,
    name: "Bristol Palace",
    location: "Ajah, Lagos",
    numOfPeople: 31,
    date: "13 Aug, 2020",
    rating: 3,
  },
];

const CleftApartment = (props) => (
  
  <CleftBookType
    totalBookingLabel="Total Apartments"
    activeBookingLabel="Active Apartments"
    totalBookingCount={7}
    activeBookingCount={3}
    transactions={transactions}
    width='301px'
    subHeading='Your Apartments'
  />
);

export default CleftApartment;
