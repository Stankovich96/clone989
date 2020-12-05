import React from "react";
import { Link } from "react-router-dom";
import DbBookBtn from "../../../../../components/ui-components/dashboard-bookBtn/DbBookBtn";
import RbTransaction from "./rb-transaction/RbTransaction";
import styles from "./RecentBookings.module.css";
import Apartment from "../../../../../assets/apartment/1bedroom.png";
import MeetingRoom from "../../../../../assets/meetingroom/Abuja-1.jpg";
import Workspace from "../../../../../assets/workspace/workspaceImg1.png";

const transactions = [
  {
    img: Workspace,
    name: "Tower Building",
    location: "Ikeja, Lagos",
    numOfPeople: 3,
    date: "3 Sept, 2020",
    bookingType: "Workspace",
  },
  {
    img: MeetingRoom,
    name: "Conference Room",
    location: "Surulere, Lagos",
    numOfPeople: 11,
    date: "31 Dec, 2020",
    bookingType: "Apartment",
  },
  {
    img: Apartment,
    name: "Bristol Palace",
    location: "Ajah, Lagos",
    numOfPeople: 31,
    date: "13 Aug, 2020",
    bookingType: "Meeting Room",
  },
];

const RecentBookings = (props) => (
  <div className={styles.RecentBookingsLayout}>
    <div className={styles.Top}>
      <p className={styles.RecentBookings}>Recent Bookings</p>
      <p className={styles.ViewAll}>
        <Link to="/dashboard/transactions">View all</Link>
      </p>
    </div>
    <div className={styles.Body}>
      {!props.transactionAvailable ? (
        <div className={styles.Body_Empty}>
          <p className={styles.Oh}>"Oh - Oh"</p>
          <p className={styles.NoBooking}>
            We could not find any booking. Book now.
          </p>
          <Link to="/dashboard/reservationSelection">
            <DbBookBtn />
          </Link>
        </div>
      ) : (
        transactions.map(
          ({ img, name, location, numOfPeople, date, bookingType }, i) => (
            <RbTransaction
              key={i}
              img={img}
              name={name}
              location={location}
              numOfPeople={numOfPeople}
              date={date}
              bookingType={bookingType}
            />
          )
        )
      )}
    </div>
  </div>
);

export default RecentBookings;
