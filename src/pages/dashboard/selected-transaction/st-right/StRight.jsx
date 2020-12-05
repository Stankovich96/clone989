import React from "react";
import Rating from "../../../../shared-components/rating/Rating";
import styles from "./StRight.module.css";
import { ReactComponent as DateIcon } from "../../../../assets/dashboard/dbDatesIcon.svg";
import { ReactComponent as TimeIcon } from "../../../../assets/dashboard/dbTime.svg";
import CustomTab from "../../../../shared-components/custom-tab/CustomTab";
import StrDescription from "./str-tabs/str-description/StrDescription";
import StrReviews from "./str-tabs/str-reviews/StrReviews";
import StrMap from "./str-tabs/str-maps/StrMap";
import StrAmenities from "./str-tabs/str-amenities/StrAmenities";
import { Link } from "react-router-dom";

const StRight = (props) => (
  <div className={styles.Right}>
    <div className={styles.Section1}>
      <div className={styles.NameAndLocation}>
        <p className={styles.Name}>Tower Building</p>
        <p className={styles.Location}>Ikeja, Lagos</p>
      </div>
      <p className={styles.BookType}>Private Workspace</p>
    </div>
    <div className={styles.Section2}>
      <div className={styles.RatingLayout}>
        <p className={styles.Rating}>989 Rating</p>
        <Rating starCount={5} isDarkStar />
      </div>
      <div className={styles.TimeLayout}>
        <TimeIcon />
        <p className={styles.Time}>9am to 11pm</p>
      </div>
      <div className={styles.DateLayout}>
        <DateIcon />
        <p className={styles.Date}>3 Sept. 2020</p>
      </div>
    </div>
    <CustomTab
     maxHeight='193px'
      tabNames={["Description", "Reviews", "Map", "Amenities"]}
      currentTab="Description"
      tabComponents={[
        <StrDescription />,
        <StrReviews />,
        <StrMap />,
        <StrAmenities />,
      ]}
    />
    <div className={styles.Section4}>
      <div className={styles.Cost}>
        <p className={styles.Sec4_Label}>Cost</p>
        <p className={styles.CostValue}>N10, 000</p>
      </div>
      <div className={styles.AccessCode}>
        <p className={styles.Sec4_Label}>Access Code</p>
        <p className={styles.AccessCodeValue}>HD9-WET</p>
      </div>
      <div className={styles.BookingOccurrence}>
        <p className={styles.Sec4_Label}>Booking</p>
        <p className={styles.BookingOccurrenceValue}>Recurrent</p>
      </div>
    </div>
    <div className={styles.Section5}>
      <div className={styles.PlanLayout}>
        <p className={styles.Plan}>
          1 Month <span>plan</span>
        </p>
        <p className={styles.Modify}><Link to='/dashboard/selectedTransaction/updatePlan'>Update</Link></p>
      </div>
      <div className={styles.TeammateLayout}>
        <p className={styles.Teammate}>
          10 <span>teammates</span>
        </p>
        <p className={styles.Modify}><Link to='/dashboard/selectedTransaction/updateTeammates'>Add More</Link></p>
      </div>
    </div>
    <div className={styles.Section6}>
      <div className={styles.LikeWorkspaceLayout}>
        <p className={styles.LikeWorkspace}>Like this Workspace?</p>
        <p className={styles.LeaveReview}>Leave a review</p>
      </div>
      <div className={styles.CancelBookingLayout}>
        <p className={styles.NoLongerInterested}>No longer interested?</p>
        <p className={styles.CancelBooking}>Cancel Booking</p>
      </div>
    </div>

  </div>
);

export default StRight;
