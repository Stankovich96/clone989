import React from "react";
import BackButton from "../../../../components/ui-components/back-button/BackButton";
import Navigation from "../../navigation/Navigation";
import styles from "./AddCard.module.css";
import { ReactComponent as PadlockIcon } from "../../../../assets/dashboard/dbPadlock.svg";

const AddCard = (props) => (
  <div className={styles.AddCard}>
    <Navigation />
    <BackButton MarginLt='180px' MarginTp='27px' history={props.history} to="/dashboard/cards"/>
    <p className={styles.AddCardText}>Add Card</p>
    <p className={styles.Desc}>
      989 automatically renews your subscription through your Debit Card. Add
      your card now securely.
    </p>
    <div className={styles.MainContent}>
      <input placeholder='Card Number' type="number" />
      <div className={styles.SecondSection}>
        <div className={styles.ExpiryLayout}>
          <p className={styles.ExpiryDate}>Expiry Date</p>
          <input placeholder='MM/YY' type="text" className={styles.BtmInput} />
        </div>
        <input placeholder='CVV' className={`${styles.BtmInput} ${styles.CVV}`} type='text' />
      </div>

      <button>Update</button>
      <div className={styles.SecureLayout}>
        <PadlockIcon />
        <p className={styles.PayStackSecure}>Secured by Paystack</p>
      </div>
    </div>
  </div>
);

export default AddCard;
