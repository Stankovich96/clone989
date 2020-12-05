import React, { Component } from "react";
import styles from "./HeroSection.module.css";
import WorkspaceImg from "../../../assets/WorkspaceImg.png";
import WorkspaceImg1 from "../../../assets/meetingroom/Abuja-2.jpg";
import WorkspaceImg3 from "../../../assets/meetingroom/Abuja-3.jpg";
import { ReactComponent as ArrowRight } from "../../../assets/backArrow.svg";
//import {ReactComponent as ArrowRight} from "../../../assets/ArrowUp.svg";
import Header from "../../../shared-components/header/Header";
import Select, { components } from "react-select";
import DropdownArrow from "../../../components/ui-components/dropdown-arrow/DropdownArrow";
import {
  lagosOptions,
  groupedOptions,
} from "../../../external-data/location-data";
import { Link } from "react-router-dom";

const DropdownIndicator = (props) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <DropdownArrow />
    </components.DropdownIndicator>
  );

const GroupHeading = (props) => (
  <div className={styles.GroupHeading}>
    <components.GroupHeading {...props} />
  </div>
);

const Option = (props) => <components.Option {...props} />;

const HeroSection = (props) => (
  <div className={styles.HeroSection}>
    <div className={styles.Left}>
      <div className={styles.HeroWhiteLine}>
        <div className={styles.ShortLine}></div>
        <p>989</p>
        <div className={styles.LongLine}></div>
      </div>
      <div className={styles.HeroContent}>
        <p className={styles.CatchPhrase}>
          Booking made simple with 989workspaces
        </p>
        <p className={styles.Description}>
          Book for workspaces, meeting rooms & apartments any day and any time.
        </p>

        <div className={styles.Tab}>
          <button
            style={{
              backgroundColor: props.isWorkspaceActivated
                ? "#0F1310"
                : "#222020",
            }}
            onClick={() =>
              props.toggleTab(true, false, false, "Workspaces", "workspace")
            }
          >
            Workspaces
          </button>
          <button
            style={{
              backgroundColor: props.isMeetingRoomActivated
                ? "#0F1310"
                : "#222020",
            }}
            onClick={() =>
              props.toggleTab(
                false,
                true,
                false,
                "Meeting Rooms",
                "meetingRoom"
              )
            }
          >
            Meeting Rooms
          </button>
          <button
            style={{
              backgroundColor: props.isApartmentActivated
                ? "#0F1310"
                : "#222020",
            }}
            onClick={() =>
              props.toggleTab(false, false, true, "Apartments", "apartment")
            }
          >
            Apartments
          </button>
        </div>

        <div className={styles.TabContent}>
          <div className={styles.TabContentSub}>
            <p>Find a Location </p>
            <div className={styles.Underline}></div>
            <Select
              components={{
                DropdownIndicator,
                GroupHeading,
                Option,
              }}
              className={styles.Select}
              theme={(theme) => ({
                ...theme,
                borderRadius: 7,
                outline: "none",
                border: "1px solid red",
                colors: {
                  ...theme.colors,
                  primary25: "rgba(249, 249, 249, 0.4)",
                  primary: "#504B4B",
                  neutral0: "#CFCFCF",
                },
              })}
              defaultValue={lagosOptions[0]}
              options={groupedOptions}
              styles={{
                groupHeading: (base) => ({
                  ...base,
                  color: "#0F1310",
                  fontWeight: "bold",
                  fontSize: "15px",
                }),
                control: (base) => ({
                  ...base,
                  cursor: "pointer",
                }),
                option: (base) => ({
                  ...base,
                  padding: "15px 10px",
                  border: "1px solid #c4c4c4",
                }),
              }}
            />
          </div>
          <Link to={`/${props.bookingTypeUrl}`}>
            <button>Find {props.bookingType}</button>
          </Link>
        </div>
      </div>
    </div>

  <section className={styles.Right} >
      <div className={styles.Container} ref={props.imageLayoutRef}>
        <div ref={props.imageRef} className={styles.ImgHolder}>
          <img src={WorkspaceImg} alt="Workspace Image1" />
        </div>
        <div className={styles.ImgHolder}>
          <img src={WorkspaceImg} alt="Workspace Image2" />
        </div>
        <div className={styles.ImgHolder}>
          <img src={WorkspaceImg} alt="Workspace Image3" />
        </div>
        <div className={styles.Dummy}></div>
        <button className={styles.MoveRight} onClick={props.moveRight}>
          <ArrowRight />
        </button>
      </div>
    </section>

  </div>
);

export default HeroSection;
