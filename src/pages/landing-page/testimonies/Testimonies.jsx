import React from "react";
import styles from "./Testimonies.module.css";
import CustomerInfo from "./customer-info/CustomerInfo";

const Testimonies = (props) => (
  <div className={styles.Testimonies}>
    <p className={styles.Title}>Testimonials from our Customers</p>
    <CustomerInfo
      customerDataShown={props.customerDataShown}
      showCustomerData={props.showCustomerData}
    />
  </div>
);

export default Testimonies;
