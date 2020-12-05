import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./DbTransactions.module.css";
import TrMiddle from "./tr-middle/TrMiddle";
import TrRight from "./tr-right/TrRight";
import img1 from '../../../assets/workspace/workspaceImg1.png';
import img2 from '../../../assets/workspace/workspaceImg2.png';
import img3 from '../../../assets/workspace/workspaceImg3.png';
import img4 from '../../../assets/workspace/workspaceImg4.png';
import img5 from '../../../assets/meetingroom/Abuja-1.jpg';
import img6 from '../../../assets/meetingroom/Abuja-2.jpg';

class DbTransactions extends React.Component {
  state = {
    monthIndex: 0,
    months: [
      {
        month: "Oct.",
        year: 2019,
        selected: true,
        transactions: [
          {
            image: img1,
            name: "Tower Building",
            location: "Ikeja Lagos",
            rating: 4,
            type: "Workspace",
            date: "12th Oct. 2020",
          },
          {
            image: img2,
            name: "Aba House",
            location: "Jaba, Kano",
            rating: 4.5,
            type: "Apartment",
            date: "11th Oct. 2020",
          },
          {
            image: img3,
            name: "Conference Room",
            location: "Apapa, Lagos",
            rating: 3,
            type: "Meeting Room",
            date: "10th Oct. 2020",
          },
        ],
      },
      {
        month: "Sep.",
        year: 2019,
        selected: false,
        transactions: [
          {
            image: img4,
            name: "Tower Building",
            location: "Ikeja Lagos",
            rating: 4,
            type: "Workspace",
            date: "12th Sep. 2020",
          },
          {
            image: img5,
            name: "Aba House",
            location: "Jaba, Kano",
            rating: 4.5,
            type: "Apartment",
            date: "11th Sep. 2020",
          },
        ],
      },
      {
        month: "Aug.",
        year: 2019,
        selected: false,
        transactions: [
          {
            image: img6,
            name: "Tower Building",
            location: "Ikeja Lagos",
            rating: 4,
            type: "Workspace",
            date: "12th Aug. 2020",
          },
        ],
      },
    ],
    clickedCard:   {
      image: img1,
      name: "Tower Building",
      location: "Ikeja Lagos",
      rating: 4,
      type: "Workspace",
      date: "12th Oct. 2020",
    }
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  changeMonth = (i) => {
    const newState = { ...this.state };
    const newMonths = [...newState.months];
    newState.months = newMonths.map((obj, index) => {
      return {
        ...obj,
        selected: index == i ? true : false,
      };
    });
    this.setState({ months: newState.months, monthIndex: i });
  };

  cardClickHandler = (props) => {
    this.setState({clickedCard: props})
  };

  render() {
    return (
      <div className={styles.DbTransactions}>
        <Navigation />

        <div className={styles.MainContent}>
          <div className={styles.Left}>
            <p className={styles.TransactionText}>Transactions</p>
            {this.state.months.map(({ month, year, selected }, index) => (
              <div
                className={styles.MonthLayout}
                key={index}
                style={{ backgroundColor: selected && "#F7E9DE" }}
                onClick={() => this.changeMonth(index)}
              >
                <p className={styles.Month}>{month}</p>
                <p className={styles.Year}>{year}</p>
              </div>
            ))}
          </div>
          <TrMiddle
            months={this.state.months}
            monthIndex={this.state.monthIndex}
            click={this.cardClickHandler}
          />
          <TrRight clickedCard={this.state.clickedCard}/>
        </div>
      </div>
    );
  }
}

export default DbTransactions;
