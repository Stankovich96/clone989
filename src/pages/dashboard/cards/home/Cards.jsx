import React from "react";
import Navigation from "../../navigation/Navigation";
import styles from "./Cards.module.css";
import { ReactComponent as VisaCardLight } from "../../../../assets/dashboard/visaCardLight.svg";
import { ReactComponent as VisaCardDark } from "../../../../assets/dashboard/visaCardDark.svg";
import BCRight from "./bc-right/BCRight";
import SingleCard from "./single-card/SingleCard";
import { ReactComponent as AddIcon } from "../../../../assets/plusIcon.svg";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  userCards = [
    {
      img: <VisaCardDark />,
      last4Digits: 2235,
      expDate: "09/2022",
      type: "VISA",
    },
    {
      img: <VisaCardLight />,
      last4Digits: 2345,
      expDate: "09/2022",
      type: "VISA",
      cardNoColor: "#4A3A2F",
      expTextColor: "#7F6858",
      expDateColor: "#4A3A2F",
    },
  ];

  componentDidMount(){
    window.scroll(0, 0);
  }

  render() {
    return (
      <div className={styles.Cards}>
        <Navigation />
        <div className={styles.Left}>
          <p className={styles.CardText}>Cards</p>
          <p className={styles.YourCardsText}>Your Cards</p>
          <SingleCard userCards={this.userCards} />
          <Link to='/dashboard/cards/addCard'> <div className={styles.AddIcon}>
            <AddIcon />
          </div></Link>
         
        </div>
        <BCRight />
      </div>
    );
  }
}

export default Cards;
