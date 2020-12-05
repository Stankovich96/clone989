import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/989Logo.svg";
import LogoBlack from "../../assets/989BlackLogo.svg";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => (
  <div
    className={styles.Header}
    style={{
      backgroundColor: props.backgroundColor,
      borderBottom: props.isWhiteBg ? "1px solid #E2E2E7" : "none",
    }}
  >
    <header>
      <Link to="/">
        <img src={props.isWhiteBg ? LogoBlack : Logo} alt="989 Logo" />
      </Link>

      <ul>
        <li>
          <NavLink
            to="/workspace"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Workspace
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/meetingRoom"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Meeting Room
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apartment"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Apartment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactUs"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
      <ul className={styles.LoginAndSignUp}>
        <li>
          <NavLink
            to="/login"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signUp"
            style={{ color: props.menuFontColor }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </header>
  </div>
);

Header.propTypes = {
  menuFontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  isWhiteBg: PropTypes.bool,
};

export default Header;
