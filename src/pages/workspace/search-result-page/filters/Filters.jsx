import React from "react";
import SrAmenities from "./amenities/SrAmenities";
import styles from "./Filters.module.css";
import SrPrice from "./price/SrPrice";
import TypeOfWorkspace from "./type-of-workspace/TypeOfWorkspace";

const Filters = (props) => (
  <div className={styles.Filters}>
    <TypeOfWorkspace />
    <SrPrice />
    <SrAmenities />
  </div>
);

export default Filters;
