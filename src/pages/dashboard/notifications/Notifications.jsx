import React from "react";
import Rating from "../../../shared-components/rating/Rating";
import Navigation from "../navigation/Navigation";
import styles from "./Notifications.module.css";
import { ReactComponent as Arrow } from "../../../assets/ArrowUp.svg";
import WorkspaceImg from "../../../assets/workspace/workspaceImg1.png";
import { ReactComponent as DeleteIcon } from "../../../assets/dashboard/dbDeleteIcon.svg";

class Notifications extends React.Component {
  state = {
    moreDetailsShown: false,
    userNotifications: {
      expired: [
        {
          period: "16 hours ago",
          name: "Aba's House",
          location: "Ikeja, Lagos",
          duration: "3 Sep. 2020 - 3 Aug. 2020",
          type: "Workspace",
          cost: "10,000",
          teammates: "10",
          starCount: 4.5,
          img: WorkspaceImg,
          dropDownShown: false,
          read: false,
        },
        {
          period: "16 hours ago",
          name: "John's House",
          location: "Ikeja, Lagos",
          duration: "3 Sep. 2020 - 3 Aug. 2020",
          type: "Workspace",
          cost: "10,000",
          teammates: "10",
          starCount: 4.5,
          img: WorkspaceImg,
          dropDownShown: false,
          read: false,
        },
        {
          period: "16 hours ago",
          name: "Dave's House",
          location: "Ikeja, Lagos",
          duration: "3 Sep. 2020 - 3 Aug. 2020",
          type: "Workspace",
          cost: "10,000",
          teammates: "10",
          starCount: 4.5,
          img: WorkspaceImg,
          dropDownShown: false,
          read: false,
        },
        {
          period: "16 hours ago",
          name: "Dave's House",
          location: "Ikeja, Lagos",
          duration: "3 Sep. 2020 - 3 Aug. 2020",
          type: "Workspace",
          cost: "10,000",
          teammates: "10",
          starCount: 4.5,
          img: WorkspaceImg,
          dropDownShown: false,
          read: false,
        },
        {
          period: "16 hours ago",
          name: "John's House",
          location: "Ikeja, Lagos",
          duration: "3 Sep. 2020 - 3 Aug. 2020",
          type: "Workspace",
          cost: "10,000",
          teammates: "10",
          starCount: 4.5,
          img: WorkspaceImg,
          dropDownShown: false,
          read: false,
        },
      ],
      newBooking: [],
    },
    unreadNotifs: 0,
  };

  componentDidMount() {
    window.scroll(0, 0);
    this.setState({
      unReadNotifs: this.countUnreadMessages(
        this.state.userNotifications.expired
      ),
    });
  }

  countUnreadMessages = (array) => {
    let unReadNotifs = 0;
    array.forEach((obj) => obj.read === false && unReadNotifs++);
    return unReadNotifs;
  };

  //.slice()
  //.map()

  toggleNotificationDropDown = (index) => {
    const tempState = { ...this.state };
    const t = { ...tempState.userNotifications };
    const exp = t.expired.slice();
    const newUpate = exp.map((obj, i) => {
      return {
        ...obj,
        dropDownShown: i == index ? !obj.dropDownShown : false,
        read: i == index ? (obj.read ? obj.read : true) : obj.read,
      };
    });
    t.expired = newUpate;

    this.setState({
      userNotifications: t,
      unReadNotifs: this.countUnreadMessages(newUpate),
    });
  };

  deleteNotification = (index) => {
    const tempState = { ...this.state };
    const t = { ...tempState.userNotifications };
    const exp = t.expired.slice();
    t.expired = exp.filter((obj, i) => i != index);
    this.setState({ userNotifications: t });
  };

  render() {
    return (
      <div className={styles.Parent}>
        <Navigation />
        <div className={styles.Header}>
          <p className={styles.HeaderText}>Notifications</p>
        </div>
        <div className={styles.MainContent}>
          <div className={styles.SubHeading}>
            <div className={styles.UnreadLayout}>
              <p className={styles.UnreadText}>Unread</p>
              <p className={styles.UnreadValue}>{this.state.unReadNotifs}</p>
            </div>
            <div className={styles.Dropdown}></div>
          </div>
          {this.state.userNotifications.expired.map(
            (
              {
                period,
                name,
                location,
                duration,
                type,
                cost,
                teammates,
                starCount,
                img,
                dropDownShown,
              },
              index
            ) => (
              <div className={styles.Notifications} key={index}>
                <div
                  className={styles.NotifOpen}
                  style={{
                    boxShadow: !dropDownShown && "none",
                    borderRadius: !dropDownShown && "15px",
                  }}
                >
                  <p className={styles.Period}>{period}</p>
                  <p className={styles.ReserveExpText}>
                    Your reservation at{" "}
                    <span className={styles.BookingPlace}> {name} </span>{" "}
                    expired
                  </p>
                  <div className={styles.DelAndDropDown}>
                    <DeleteIcon
                      className={styles.DeleteIcon}
                      onClick={() => this.deleteNotification(index)}
                    />
                    <Arrow
                      onClick={() => this.toggleNotificationDropDown(index)}
                      style={{
                        transform: dropDownShown && "rotate(180deg)",
                      }}
                    />
                  </div>
                </div>
                {dropDownShown && (
                  <div className={styles.NotifClose}>
                    <div className={styles.Ntc_Left}>
                      <img src={img} alt="" />
                      <div className={styles.NameAndLoc}>
                        <p className={styles.Name}>{name}</p>
                        <p className={styles.Location}>{location}</p>
                      </div>
                    </div>
                    <div className={styles.Ntc_Right}>
                      <div className={styles.Ntcr_Top}>
                        <p className={styles.Duration}>{duration}</p>
                        <p className={styles.Type}>{type}</p>
                      </div>
                      <div className={styles.Ntcr_Btm}>
                        <div className={styles.VertLayout}>
                          <p className={styles.CostText}>Cost</p>
                          <p className={styles.CostValue}>{cost}</p>
                        </div>
                        <div className={styles.VertLayout}>
                          <p className={styles.TeamateText}>Teammates</p>
                          <p className={styles.TeamateValue}>{teammates}</p>
                        </div>
                        <div className={styles.VertLayout}>
                          <p className={styles.Rating}>989 Rating</p>
                          <Rating isDarkStar starCount={starCount} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Notifications;
