import React from "react";
import DashboardCard from "../../../../../components/ui-components/dashboard-card/DashboardCard";
import styles from "./CleftBookType.module.css";
import BookTypeCard from "./book-type-card/BookTypeCard";
import { Link } from "react-router-dom";

const CleftBookType = (props) => (
  <>
    <div className={styles.CleftBookType}>
      <DashboardCard
        type={props.totalBookingLabel}
        count={props.totalBookingCount}
        width={props.width}
      />
      <DashboardCard
        type={props.activeBookingLabel}
        count={props.activeBookingCount}
        width={props.width}
      />
    </div>
    <p className={styles.RecentBookings}>{props.subHeading}</p>
    <div className={styles.Cards}>
      {props.transactions.map(
        ({ img, name, location, numOfPeople, date, rating }, i) => (
          <Link to="/dashboard/selectedTransaction">
            <BookTypeCard
              key={i}
              img={img}
              name={name}
              location={location}
              numOfPeople={numOfPeople}
              date={date}
              rating={rating}
            />
          </Link>
        )
      )}
    </div>
  </>
);

export default CleftBookType;
