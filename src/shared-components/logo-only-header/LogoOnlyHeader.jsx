import React from "react";
import styles from "./LogoOnlyHeader.module.css";
import LogoBlack from "../../assets/989BlackLogo.svg";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const LogoOnlyHeader = (props) => (
  <div 
    style={{ marginBottom: props.marginBtm,  borderBottom: props.borderBtm, marginTop: props.marginTp }}
    className={styles.LogoOnlyHeader}>
    <header>
      <img src={LogoBlack} alt="989 Logo" style={{ marginLeft: props.marginLt }}/>
    </header>
  </div>
);

LogoOnlyHeader.propTypes = {
  marginBtm: PropTypes.string,
  borderBtm: PropTypes.string,
  marginLt: PropTypes.string,
  marginTp: PropTypes.string
}

export default LogoOnlyHeader;
