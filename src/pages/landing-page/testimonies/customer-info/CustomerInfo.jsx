import React from "react";
import styles from "./CustomerInfo.module.css";
import Customer1 from "../../../../assets/customer1.png";
import Customer2 from "../../../../assets/customer2.png";
import Customer3 from "../../../../assets/customer3.png";
import SingleCustomer from "./single-customer/SingleCustomer";

const CustomerInfo = (props) => {
  const customerData = [
    {
      name: "John Doe",
      workRole: "Developer",
      customerImage: Customer1,
      personalInfo:
        "Tincidunt egestas sit viverra in tincidunt morbi elit ultricies vel. Adipiscing nibh posuere aliquam sed iaculis sed facilisis vulputate convallis. ",
    },
    {
      name: "Sarah Matt",
      workRole: "Designer",
      customerImage: Customer2,
      personalInfo:
        "Tincidunt egestas sit viverra in tincidunt morbi elit ultricies vel. Adipiscing nibh posuere aliquam sed iaculis sed facilisis vulputate convallis. ",
    },
    {
      name: "Hillary David",
      workRole: "Marketer",
      customerImage: Customer3,
      personalInfo:
        "Tincidunt egestas sit viverra in tincidunt morbi elit ultricies vel. Adipiscing nibh posuere aliquam sed iaculis sed facilisis vulputate convallis. ",
    },
  ];

  return (
    <div className={styles.CustomerInfo}>
      {
          customerData.map(({ name, workRole, customerImage, personalInfo}, index) => (
            <SingleCustomer
                key={index}
                index={index}
                name={name}
                workRole={workRole}
                personalInfo={personalInfo}
                customerImage={customerImage}
                customerDataShown={props.customerDataShown}
                showCustomerData={props.showCustomerData}
            />
          ))
      }
    </div>
  );
};

export default CustomerInfo;
