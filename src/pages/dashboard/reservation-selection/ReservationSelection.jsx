import React from "react";
import styles from "./ReservationSelection.module.css";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import { ReactComponent as Apartment } from "../../../assets/dashboard/dbApartmentVector.svg";
import { ReactComponent as MeetingRoom } from "../../../assets/dashboard/dbMeetingRoomVector.svg";
import { ReactComponent as Workspace } from "../../../assets/dashboard/dbWorkspaceVector.svg";
import Navigation from "../navigation/Navigation";
import { Link } from "react-router-dom";

const ReservationSelection = (props) => (
  <>
    <Navigation />
    <div className={styles.ReservationSelection}>
      <BackButton history={props.history} to="/dashboard/home" />
      <p className={styles.SpecificReserv}>Choose a specific reservation</p>
      <div className={styles.BookingTypeLayout}>
        <Link to="/workspace">
          <div className={styles.BookingType}>
            <Workspace />
            <div>
              <label>Workspace</label>
            </div>
          </div>
        </Link>

        <Link to="/meetingRoom">
          <div className={styles.BookingType}>
            <MeetingRoom />
            <div>
              <label for="meetingRoom">Meeting Room</label>
            </div>
          </div>
        </Link>

        <Link to="/apartment">
          <div className={styles.BookingType}>
            <Apartment />
            <div>
              <label for="apartment">Apartment</label>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </>
);

export default ReservationSelection;
